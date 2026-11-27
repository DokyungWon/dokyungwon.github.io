// =====================================================================
//  사진 설정 파일 (album.js)
//  - 앨범 사진은 폴더에 올리기만 하면 자동으로 전부 표시돼요.
//    (사진을 추가·삭제할 때 이 파일을 고칠 필요가 없어요)
//  - 사진 순서는 파일 이름 순서예요: 1.jpg, 2.jpg, ... 10.jpg
//  - 쉼표(,)와 따옴표(" ")는 지우지 마세요.
// =====================================================================

// 1) 첫 화면 프로필 사진
window.PROFILE_PHOTO = "images/profile.jpg";

// 1-2) 스크롤하면 프로필 사진이 이 사진으로 바뀌어요. 파일이 없으면 증명사진만 보여요.
window.PROFILE_PHOTO_FIELD = "images/profile-field.jpg";

// 2) Album
//    folder   : 사진을 넣을 폴더 (이 폴더 안의 jpg/png 사진이 모두 표시됨)
//    captions : 사진 아래 설명(선택). "파일 이름": "설명" 형식으로 적어요.
//               설명을 안 적은 사진은 설명 없이 사진만 보여요.
window.ALBUMS = [
  {
    title: "Exchange semester",
    place: "University of Sussex, Brighton, UK",
    date: "Sep 2024 – Jan 2025",
    folder: "images/exchange",
    captions: {
      "1.jpg": "On campus at the University of Sussex.",
    },
  },
  {
    title: "Field work",
    place: "Wheat field trials, Republic of Korea",
    date: "2025 – present",
    folder: "images/fieldwork",
    captions: {
      "1.jpg": "Sowing wheat seeds in the field.",
    },
  },
  {
    title: "Conferences",
    place: "Korean Society of Breeding Science, Busan",
    date: "2026",
    folder: "images/conference",
    captions: {
      "1.jpg": "Presenting my first poster on a heat-responsive PUB E3 ubiquitin ligase.",
    },
  },
  {
    title: "Advising",
    place: "Korea University, Seoul",
    date: "2025",
    folder: "images/advising",
    captions: {
      "1.jpg": "Mentoring middle and high school students (Aug 2025).",
      "2.jpg": "Helping exchange students from all around the world settle in at Korea University (Spring 2025).",
    },
  },
];
