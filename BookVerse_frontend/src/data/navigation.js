import {
  House,
  LibraryBig,
  Heart,
  BookMarked,
  Settings,
} from "lucide-react";

const navigation = [
  {
    title: "HOME",
    items: [
      {
        name: "Home",
        icon: House,
        path: "/",
      },
    ],
  },

  {
    title: "LIBRARY",
    items: [
      {
        name: "My Library",
        icon: LibraryBig,
        path: "/books",
      },
      {
        name: "Favourites",
        icon: Heart,
        path: "/favourites",
      },
      {
        name: "Reading List",
        icon: BookMarked,
        path: "/reading-list",
      },
    ],
  },

  {
    title: "OTHERS",
    items: [
      {
        name: "Settings",
        icon: Settings,
        path: "/settings",
      },
    ],
  },
];

export default navigation;