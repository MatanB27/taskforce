import { Icon, ICON_NAMES } from "@/assets/icons";
import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { label: "Dashboard", href: "#", icon: ICON_NAMES.home, isActive: true },
  { label: "Projects", href: "#", icon: ICON_NAMES.project },
  { label: "Tasks", href: "#", icon: ICON_NAMES.task },
  { label: "Team", href: "#", icon: ICON_NAMES.team },
  { label: "Settings", href: "#", icon: ICON_NAMES.settings },
] as const;

type NavItem = {
  label: string;
  href: string;
  icon: keyof typeof ICON_NAMES;
  isActive?: boolean;
};

function SidebarNavItem(item: NavItem) {
  const { open } = useSidebar();

  const link = (
    <SidebarMenuButton
      href={item.href}
      isActive={item.isActive}
      aria-label={item.label}
    >
      <Icon name={item.icon} size={22} className="shrink-0" />
      {open ? <span>{item.label}</span> : null}
    </SidebarMenuButton>
  );

  if (open) {
    return <SidebarMenuItem>{link}</SidebarMenuItem>;
  }

  return (
    <SidebarMenuItem>
      <Tooltip>
        <TooltipTrigger render={link} />
        <TooltipContent side="right">{item.label}</TooltipContent>
      </Tooltip>
    </SidebarMenuItem>
  );
}

export function Sidebar() {
  const { open } = useSidebar();

  return (
    <SidebarRoot collapsible="icon">
      <TooltipProvider>
        <SidebarHeader>
          {open ? (
            <>
              <a href="#" className="inline-flex items-center cursor-pointer">
                <Icon name={ICON_NAMES.logo} />
                <span className="ml-1 text-md font-bold tracking-wide text-primary">
                  TASKFORCE
                </span>
              </a>
              <SidebarTrigger className="ml-auto" aria-label="Collapse sidebar">
                <Icon
                  name={ICON_NAMES.menu}
                  className="!h-auto !w-auto cursor-pointer"
                />
              </SidebarTrigger>
            </>
          ) : (
            <SidebarTrigger aria-label="Expand sidebar">
              <Icon
                name={ICON_NAMES.menu}
                className="!h-auto !w-auto cursor-pointer"
              />
            </SidebarTrigger>
          )}
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarNavItem key={item.label} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </TooltipProvider>
    </SidebarRoot>
  );
}
