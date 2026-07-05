import { useEffect, useState } from "react";

const LEVEL_STYLES = [
  "bg-slate-100 border-slate-200",
  "bg-green-200 border-green-300",
  "bg-green-400 border-green-500",
  "bg-green-500 border-green-600",
  "bg-green-700 border-green-800",
];

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const createDateKey = (date) => date.toISOString().slice(0, 10);

const addDays = (date, amount) => {
  const nextDate = new Date(date);
  nextDate.setUTCDate(nextDate.getUTCDate() + amount);
  return nextDate;
};

const normalizeDate = (date) =>
  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

const createEmptyWeeks = () => {
  const today = normalizeDate(new Date());
  const startDate = addDays(today, -364 - today.getUTCDay());
  const weeks = [];

  for (let weekIndex = 0; weekIndex < 53; weekIndex += 1) {
    const days = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const date = addDays(startDate, weekIndex * 7 + dayIndex);

      days.push({
        date: createDateKey(date),
        count: 0,
        level: 0,
        month: MONTH_LABELS[date.getUTCMonth()],
      });
    }

    weeks.push(days);
  }

  return weeks;
};

const mapContributionsToWeeks = (contributions) => {
  const contributionsByDate = new Map(
    contributions.map((day) => [
      day.date,
      {
        count: day.count,
        level: Math.min(Number(day.level || 0), LEVEL_STYLES.length - 1),
      },
    ]),
  );

  return createEmptyWeeks().map((week) =>
    week.map((day) => ({
      ...day,
      ...(contributionsByDate.get(day.date) || {}),
    })),
  );
};

const getMonthLabels = (weeks) =>
  weeks.map((week, index) => {
    const firstDay = week[0];
    const previousWeek = weeks[index - 1];

    if (!previousWeek || previousWeek[0].month !== firstDay.month) {
      return firstDay.month;
    }

    return "";
  });

const GithubActivity = ({
  username = "fajriyan",
  profileUrl = "https://github.com/fajriyan",
  title = "GitHub Activity",
  subtitle = "Recent contribution pattern from my GitHub profile",
  className = "",
}) => {
  const [weeks, setWeeks] = useState(createEmptyWeeks);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loadState, setLoadState] = useState("loading");
  const monthLabels = getMonthLabels(weeks);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchContributions() {
      setLoadState("loading");

      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to load GitHub contributions");
        }

        const data = await response.json();

        setWeeks(mapContributionsToWeeks(data.contributions || []));
        setTotalContributions(data.total?.lastYear || 0);
        setLoadState("loaded");
      } catch (error) {
        if (error.name !== "AbortError") {
          setLoadState("error");
        }
      }
    }

    fetchContributions();

    return () => controller.abort();
  }, [username]);

  return (
    <section
      className={`w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-full ${className}`.trim()}
      aria-labelledby="github-activity-title"
    >
      <div className="">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            {loadState === "loaded"
              ? `${totalContributions} contributions in the last year`
              : "Loading contribution activity"}
          </p>
          <p className="text-xs text-slate-500">@{username}</p>
        </div>

        <div className="overflow-x-auto ">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            {loadState === "error" && (
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-700 underline underline-offset-4"
              >
                Open GitHub profile
              </a>
            )}
          </div>

          <div className="min-w-[760px]">
            <div className="ml-9 grid grid-cols-[repeat(53,0.75rem)] gap-1 text-[10px] text-slate-500">
              {monthLabels.map((month, index) => (
                <span key={`${month}-${index}`} className="h-4">
                  {month}
                </span>
              ))}
            </div>

            <div className="mt-1 flex gap-2">
              <div className="grid grid-rows-7 gap-1 text-[10px] leading-3 text-slate-500">
                {DAY_LABELS.map((day) => (
                  <span key={day} className="h-3">
                    {day === "Mon" || day === "Wed" || day === "Fri" ? day : ""}
                  </span>
                ))}
              </div>

              <div className="grid grid-flow-col grid-rows-7 gap-1">
                {weeks.flat().map((day) => (
                  <span
                    key={day.date}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-3 w-3 rounded-sm border transition hover:ring-2 hover:ring-slate-400 ${
                      LEVEL_STYLES[day.level]
                    } ${loadState === "loading" ? "animate-pulse" : ""}`}
                    aria-label={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-start gap-2 text-xs text-slate-500">
            <span>Less</span>
            {LEVEL_STYLES.map((levelStyle, index) => (
              <span
                key={levelStyle}
                className={`h-3 w-3 rounded-sm border ${levelStyle}`}
                aria-label={`Contribution level ${index}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;
