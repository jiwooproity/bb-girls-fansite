type MenuIF = {
  id: string;
  label: string;
  to: string;
}[];

const menu: MenuIF = [
  {
    id: "home",
    label: "nav.menu.item.home",
    to: "/",
  },
  {
    id: "gallery",
    label: "nav.menu.item.gallery",
    to: "/gallery",
  },
];

export default menu;
