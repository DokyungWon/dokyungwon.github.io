// =====================================================================
//  사진 설정 파일 (album.js)
//  - 이 파일만 고치면 프로필 사진과 Album 사진을 넣고 뺄 수 있어요.
//  - 사진 파일은 저장소의 images 폴더에 올리고, 여기에는 "경로"만 적어요.
//  - 각 줄 끝의 쉼표(,)와 따옴표(" ")는 지우지 마세요.
// =====================================================================

// 1) 첫 화면 프로필 사진
//    images/profile.jpg 파일을 올리면 바로 표시돼요.
//    파일이 없으면 이니셜(DW)이 대신 보여요.
window.PROFILE_PHOTO = "images/profile.jpg";

// 2) Album
//    앨범 하나 = { title, place, date, photos: [ ... ] }
//    사진 한 장 = { file: "사진 경로", caption: "사진 설명(영어)" }
//    사진을 추가하려면 { file: ..., caption: ... }, 한 줄을 복사해서 붙여넣고 내용만 바꾸세요.
//    사진을 빼려면 그 줄을 통째로 지우세요.
window.ALBUMS = [
  {
    title: "Exchange semester",
    place: "University of Sussex, Brighton, UK",
    date: "Sep 2024 – Jan 2025",
    photos: [
      { file: "images/exchange/1.jpg", caption: "On campus at the University of Sussex." },
      { file: "images/exchange/2.jpg", caption: "Biology coursework during the exchange semester." },
      { file: "images/exchange/3.jpg", caption: "Brighton seafront." },
    ],
  },
  {
    title: "Field work",
    place: "Wheat field trials, Republic of Korea",
    date: "2025 – present",
    photos: [
      { file: "images/fieldwork/1.jpg", caption: "Wheat plots during the high-temperature treatment trial." },
      { file: "images/fieldwork/2.jpg", caption: "Inoculating wheat spikes with Fusarium asiaticum." },
      { file: "images/fieldwork/3.jpg", caption: "Recording traits for seed genetic resource conservation." },
    ],
  },
];
