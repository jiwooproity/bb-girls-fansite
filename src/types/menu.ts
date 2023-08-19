export type MenuIF = {
  id: string;
  label: string;
  children: MenuIF[];
};

export const menu: MenuIF[] = [
  {
    id: "home",
    label: "Home",
    children: [],
  },
  {
    id: "member",
    label: "Member",
    children: [],
  },
  {
    id: "music",
    label: "Music",
    children: [],
  },
];
