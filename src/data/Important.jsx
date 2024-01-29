export const mainMenu = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Projects", url: "/project" },
  { id: 3, title: "About Me", url: "/about" },
];

const DataProject = [
  {
    title: "Al Qur'an Digital",
    desc: "Project Sederhana ini dibuat atas keresahan ketika ingin melakukan copy surah al-quran yang susah. Website Sederhana ini dibangun dengan React JS Vite dan Tailwind CSS menggunakan bantuan Plugin Daisy UI.  ",
    img: "https://images.unsplash.com/photo-1598777025922-76f01b057927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    mt: "January",
    yr: "2023",
    lang: "Javascript",
    ct: "Personal",
    link: "https://al-quran.pages.dev/",
    popular: true,
  },
  {
    title: "Public API Data Gempa Bumi",
    desc: "Sebuah API sederhana untuk Forward API dari Data Terbuka BMKG karena ada issue CORS pada Website Resmi data terbuka milik BMKG. Project ini dibangun dengan Express JS dan Deploy di Vercel.",
    img: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mt: "July",
    yr: "2023",
    lang: "Javascript",
    ct: "Personal",
    link: "#",
    popular: false,
  },
  {
    title: "menulisapaini blog",
    desc: "Project ini dibuat sebagai tempat untuk menyimpan catatan saya selama menjadi Web Dev, mengenai apa saja yang menurut saya perlu untuk di catat. Project ini sangat sederhana hanya menggunakan Blogger milik Google.",
    img: "https://images2.imgbox.com/4c/33/hC6mUfhQ_o.png",
    mt: "Februari",
    yr: "2023",
    lang: "XML",
    ct: "Personal",
    link: "https://menulisapaini.blogspot.com/",
    popular: false,
  },
  {
    title: "Manajemen FEB UNIV. Brawijaya",
    desc: "Manajemen FEB adalah Project Website Kampus dari Sekawan Studio yang saya terlibat dalam pengerjaanya mulai dari awal, project ini bisa disebut multi site dikarenakan didalamnya berisi 5 Program Studi dari FEB UB.",
    img: "https://sekawanstudio.com/wp-content/uploads/2022/10/POTTOFOLIO-MANAJEMEN-FEB.webp",
    mt: "Juli",
    yr: "2022",
    lang: "PHP",
    ct: "Sekawan Studio",
    link: "https://sekawanstudio.com/portofolio/website-manajemen-feb-ub/",
    popular: false,
  },
  {
    title: "Adil Makmur Fajar",
    desc: "PT Adil Makmur Fajar (AMCO) adalah sebuah project Company Profile dari Sekawan Studio yang saya terlibat dalam pengerjaanya awal sampai live. Pada project ini menggunakan multi language, terdapat 3 bahasa pada websitenya.",
    img: "https://sekawanstudio.com/wp-content/uploads/2022/10/POTTOFOLIO-ADIL-MAKMUR.webp",
    mt: "Agustus",
    yr: "2022",
    lang: "PHP",
    ct: "Sekawan Studio",
    link: "https://sekawanstudio.com/portofolio/website-adil-makmur-fajar/",
    popular: false,
  },
  {
    title: "FIA Universitas Brawijaya",
    desc: "FIA UB adalah project Website Campus dengan multi site yang besar karena didalam website ini tedapat 3 Departemen dengan lebih dari 10 program studi, project ini merupakan project dari Sekawan Studio",
    img: "https://sekawanstudio.com/wp-content/uploads/2022/10/POTTOFOLIO-FIA.webp",
    mt: "April",
    yr: "2022",
    lang: "PHP",
    ct: "Sekawan Studio",
    link: "https://sekawanstudio.com/portofolio/website-fia-ub/",
    popular: false,
  },
  {
    title: "Cardion UIN 2022",
    desc: "Cardion UIN 2022 merupakan project website landing page sederhana untuk pendaftaran dan Portal Informasi Perlombaan oleh Universitas Islam Negeri Malang, Website ini merupakan project Sekawan Studio.",
    img: "https://sekawanstudio.com/wp-content/uploads/2022/10/POTTOFOLIO-CARDION.webp",
    mt: "Oktober",
    yr: "2022",
    lang: "PHP",
    ct: "Sekawan Studio",
    link: "https://sekawanstudio.com/portofolio/website-cardion-uin/",
    popular: false,
  },
  {
    title: "Sekawan Studio",
    desc: "Sekawan Studio merupakan project Company Profile internal milik Sekawan Studio sendiri dimana project ini sebenarnya adalah project Revamp dari website yang sebelumnya, project ini berjalan pada akhir tahun 2022.",
    img: "https://thumbs2.imgbox.com/b3/9b/NlLrsTkX_t.png",
    mt: "November",
    yr: "2022",
    lang: "PHP",
    ct: "Sekawan Studio",
    link: "https://sekawanstudio.com/",
    popular: true,
  },
  {
    title: "Asbes Adimas",
    desc: "Project asbes adimas adalah salah satu project company profile milik sekawan Sekawan Studio. Website ini ditujukan untuk menampilkan Perusahaan dan beberapa produk milik dari Asbes Adimas. ",
    img: "https://sekawanstudio.com/wp-content/uploads/2022/10/POTTOFOLIO-ADIMAS.webp",
    mt: "Desember",
    yr: "2022",
    lang: "PHP",
    ct: "Sekawan Studio",
    link: "https://sekawanstudio.com/portofolio/website-adimas/",
    popular: false,
  },
];
export default DataProject;
export const DataChangeLog = [
  /*  color documentation
  success : bg-emerald-100 text-emerald-800
  update : bg-amber-100 text-amber-800 
  error   : bg-red-100 text-red-700
  */
  {
    author: "fajriyan",
    date: "27/10/2023",
    version: "1.1.0",
    color: "bg-amber-100 text-amber-800",
    status: "update",
    desc: "update data project and new data `lang`",
  },
  {
    author: "fajriyan",
    date: "16/10/2023",
    version: "1.0.9",
    color: "bg-amber-100 text-amber-800",
    status: "update",
    desc: "migrate to vite and fix bug",
  },
  {
    author: "fajriyan",
    date: "07/03/2023",
    version: "1.0",
    color: "bg-amber-100 text-amber-800",
    status: "update",
    desc: "add data on my project",
  },
  {
    author: "fajriyan",
    date: "09/02/2023",
    version: "1.0",
    color: "bg-amber-100 text-amber-800",
    status: "update",
    desc: "add google site verification",
  },
  {
    author: "fajriyan",
    date: "27/01/2023",
    version: "1.0",
    color: "bg-amber-100 text-amber-800",
    status: "update",
    desc: "add some data expertise",
  },
  {
    author: "fajriyan",
    date: "20/01/2023",
    version: "1.0",
    color: "bg-emerald-100 text-emerald-800",
    status: "release",
    desc: "first website release",
  },
];
export const DataLearnings = [
  {
    id: 1,
    status: "University",
    name: "Universitas PGRI Kanjuruhan Malang",
    major: "S1 Teknik Informatika",
    since: "From 2018 - 2022",
  },
  {
    id: 2,
    status: "Senior High School",
    name: "Sekolah Menengah Akhir 6 Lamongan",
    major: "Matematika dan Ilmu Alam",
    since: "From 2016 - 2018",
  },
  {
    id: 3,
    status: "Junior High School",
    name: "Sekolah Menengah Pertama 14 Lamongan",
    major: "General",
    since: "From 2014 - 2016",
  },
];
export const DataExp = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
    name: "HTML 5",
    level: "Advanced ",
  },
  {
    id: 2,
    img: "https://mitacademys.com/wp-content/uploads/2022/07/logo-2582747_1920.png",
    name: "CSS 3",
    level: "Advanced ",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "Javascript",
    level: "Intermediate ",
  },
  {
    id: 4,
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    name: "React JS",
    level: "Intermediate ",
  },
  {
    id: 5,
    img: "data:image/png;base64,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",
    name: "Wordpress",
    level: "Advanced",
  },
  {
    id: 6,
    img: "https://histla.com/wp-content/uploads/2015/02/Codeigniter.png",
    name: "Codeigniter",
    level: "Intermediate",
  },
  {
    id: 7,
    img: "https://qnp.co.id/wp-content/uploads/2022/06/laravel.jpg",
    name: "Laravel",
    level: "Beginner",
  },
  {
    id: 8,
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    name: "Github",
    level: "Intermediate",
  },
  {
    id: 9,
    img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    name: "Bootstrap",
    level: "Advanced",
  },
  {
    id: 10,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    name: "Tailwind",
    level: "Intermediate",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.png",
    name: "Figma",
    level: "Intermediate",
  },
];
export const ContactBTN = [
  {
    svg: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
    text: "fajriyan.nur",
    link: "mailto:fajriyan20@gmail.com",
  },
  {
    svg: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
    text: "in/fajriyan/",
    link: "https://www.linkedin.com/in/fajriyan/",
  },
  {
    svg: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    text: "github/fajriyan",
    link: "https://github.com/fajriyan",
  },
];
export const DataOtherPlatform = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
    name: "HTML 5",
    level: "Advanced ",
  },
  {
    id: 2,
    img: "https://mitacademys.com/wp-content/uploads/2022/07/logo-2582747_1920.png",
    name: "CSS 3",
    level: "Advanced ",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "Javascript",
    level: "Intermediate ",
  },
  {
    id: 4,
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    name: "React JS",
    level: "Intermediate ",
  },
  {
    id: 5,
    img: "https://www.websites24-7.co.uk/wp-content/uploads/2015/09/wplogoblue-notext-rgb.png",
    name: "Wordpress",
    level: "Advanced",
  },
  {
    id: 6,
    img: "https://histla.com/wp-content/uploads/2015/02/Codeigniter.png",
    name: "Codeigniter",
    level: "Intermediate",
  },
  {
    id: 7,
    img: "https://qnp.co.id/wp-content/uploads/2022/06/laravel.jpg",
    name: "Laravel",
    level: "Beginner",
  },
];
