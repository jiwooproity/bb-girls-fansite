type MenuIF = {
  id: string;
  label: string;
  to: string;
}[];

const menu: MenuIF = [
  {
    id: "home",
    label: "홈",
    to: "/",
  },
  {
    id: "gallery",
    label: "갤러리",
    to: "/gallery",
  },
];

export default menu;
