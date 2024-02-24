import * as FaIcons from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

interface SubNavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName?: string;
}

interface NavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  subNav?: SubNavItem[];
}

export const SidebarData: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "Songs",
    path: "/songs",
    icon: <FaIcons.FaMusic />,
  },
  {
    title: "Albums",
    path: "/albums",
    icon: <IoIcons.IoMdAlbums />,
  },
  {
    title: "Genres",
    path: "/genres",
    icon: <FaIcons.FaAlignJustify />,
  },
  {
    title: "Artists",
    path: "/artists",
    icon: <FaIcons.FaPersonBooth />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Statistics",
    path: "/songs/statistics",
    icon: <IoIcons.IoIosPaper />,
  },
];
