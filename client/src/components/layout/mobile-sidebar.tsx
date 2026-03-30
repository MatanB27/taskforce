import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icon, ICON_NAMES } from "@/assets/icons";

const navItems = [
  { label: "Homepage", href: "#", icon: ICON_NAMES.home },
  { label: "Projects", href: "#", icon: ICON_NAMES.project },
  { label: "Team", href: "#", icon: ICON_NAMES.team },
  { label: "Settings", href: "#", icon: ICON_NAMES.settings },
];

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Icon name={ICON_NAMES.menu} className="!h-auto !w-auto" />
      </SheetTrigger>
      <SheetContent
        side="left"
        showCloseButton={false}
        className="gap-0 border-sidebar-border bg-sidebar p-0 text-sidebar-foreground"
      >
        <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-4">
          <a href="#" className="inline-flex items-center">
            <Icon name={ICON_NAMES.logo} />
            <span className="ml-1 text-md font-bold tracking-wide text-foreground">
              TASKFORCE
            </span>
          </a>
          <div className="ml-auto">
            <SheetClose
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Close menu"
                />
              }
            >
              <Icon name={ICON_NAMES.cancel} className="!h-auto !w-auto" />
            </SheetClose>
          </div>
        </div>
        <nav className="flex flex-col gap-1 p-2">
          {navItems.map((item) => (
            <SheetClose
              key={item.label}
              render={
                <a
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                />
              }
            >
              <Icon name={item.icon} size={18} className="shrink-0" />
              <span>{item.label}</span>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
