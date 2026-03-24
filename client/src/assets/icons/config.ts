import { Logo } from "./logo";
import { MenuIcon } from "./menu-icon";
import { CancelIcon } from "./cancel-icon";
import { SearchIcon } from "./search-Icon";
import { HomeIcon } from "./home-icon";
import { ProjectIcon } from "./project-icon";
import { TaskIcon } from "./task-icon";
import { TeamIcon } from "./team-icon";
import { SettingsIcon } from "./settings-icon";
import { ArrowIcon } from "./arrow-icon";

export const ICON_NAMES = {
  logo: "logo",
  menu: "menu",
  cancel: "cancel",
  search: "search",
  home: "home",
  project: "project",
  task: "task",
  team: "team",
  settings: "settings",
  arrow: "arrow",
} as const;

export const ICON_COMPONENTS = {
  [ICON_NAMES.logo]: Logo,
  [ICON_NAMES.menu]: MenuIcon,
  [ICON_NAMES.cancel]: CancelIcon,
  [ICON_NAMES.search]: SearchIcon,
  [ICON_NAMES.home]: HomeIcon,
  [ICON_NAMES.project]: ProjectIcon,
  [ICON_NAMES.task]: TaskIcon,
  [ICON_NAMES.team]: TeamIcon,
  [ICON_NAMES.settings]: SettingsIcon,
  [ICON_NAMES.arrow]: ArrowIcon,
} as const;
