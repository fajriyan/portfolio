import { useEffect, useState } from "react";

const Subscribe = () => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
  const HANDLE = "fajriyann";

  const [videos, setVideos] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);

  function parseDuration(duration) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    const seconds = parseInt(match[3] || 0);

    return hours * 3600 + minutes * 60 + seconds;
  }

  useEffect(() => {
    async function fetchVideos() {
      try {
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${HANDLE}&key=${API_KEY}`,
        );
        const channelData = await channelRes.json();

        if (!channelData.items?.length) {
          throw new Error("Channel tidak ditemukan");
        }

        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=25&key=${API_KEY}`,
        );
        const playlistData = await playlistRes.json();

        const videoIds = playlistData.items.map(
          (item) => item.snippet.resourceId.videoId,
        );

        const detailRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(
            ",",
          )}&key=${API_KEY}`,
        );
        const detailData = await detailRes.json();

        const normalVideos = [];
        const shortVideos = [];

        playlistData.items.forEach((item) => {
          const detail = detailData.items.find(
            (d) => d.id === item.snippet.resourceId.videoId,
          );

          if (!detail) return;

          const durationInSeconds = parseDuration(
            detail.contentDetails.duration,
          );

          if (durationInSeconds <= 180) {
            shortVideos.push(item);
          } else {
            normalVideos.push(item);
          }
        });

        setVideos(normalVideos);
        setShorts(shortVideos);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-3 lg:px-0">
      <div class="py-7 flex flex-wrap">
        <h2 class="font-bold text-3xl text-slate-800 w-full text-center">
          New{" "}
          <span class="bg-gradient-to-r from-violet-500 via-red-700 to-purple-900 bg-clip-text text-transparent animate-gradient">
            Video{" "}
          </span>
          Just Dropped!
        </h2>

        <p class="w-full text-center mt-2">
          Check out my Latest Video on Youtube
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        {videos.map((item) => {
          const videoId = item.snippet.resourceId.videoId;
          return (
            <a
              key={videoId}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              className="group hover:scale-105 duration-500"
              rel="noopener noreferrer"
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                className="group-hover:ring-2 ring-purple-800 rounded-lg"
              />
              <p className="mt-2.5 font-medium text-sm line-clamp-2">
                {item.snippet.title}
              </p>
            </a>
          );
        })}
      </div>

      {/* https://www.youtube.com/@fajriyann */}
      <div className="flex justify-center my-10">
        <a
          href="https://www.youtube.com/@fajriyann"
          target="_blank"
          className="group relative inline-flex items-center overflow-hidden rounded-lg px-8 py-3 text-white focus:outline-none bg-gradient-to-l hover:bg-gradient-to-t from-gray-900 to-gray-600 shadow-lg focus:ring-2 ring-gray-600 ring-offset-2"
        >
          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:mr-4">
            See More
          </span>
        </a>
      </div>

      {/* 📱 Shorts (≤ 3 menit) */}
      {/* <h2>Shorts (≤ 3 Menit)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
          gap: "20px",
        }}
      >
        {shorts.map((item) => {
          const videoId = item.snippet.resourceId.videoId;
          return (
            <a
              key={videoId}
              href={`https://www.youtube.com/shorts/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                style={{ width: "100%", borderRadius: "12px" }}
              />
              <p>{item.snippet.title}</p>
            </a>
          );
        })}
      </div> */}
    </div>
  );
};

export default Subscribe;
