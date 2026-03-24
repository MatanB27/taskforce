import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Button } from "@/components/ui/button";
import { Icon, ICON_NAMES } from "@/assets/icons";
import { ROUTES } from "@/routes";

export function Header() {
  const isLoginPage = window.location.pathname === ROUTES.LOGIN;

  return (
    <header className="sticky top-0 z-40 h-14 w-full border-b border-neutral/20 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/80 dark:bg-black/80">
      <div className="mx-auto flex h-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <MobileSidebar />
        <a href={ROUTES.HOME} className="inline-flex items-center lg:hidden">
          <Icon name={ICON_NAMES.logo} />
          <span className="ml-1 text-md font-bold tracking-wide text-primary">
            TASKFORCE
          </span>
        </a>
        {!isLoginPage ? (
          <div className="ml-auto">
            <Button
              render={<a href={ROUTES.LOGIN} />}
              variant="outline"
              className="h-9 border-primary/20 px-4 text-sm text-primary hover:bg-primary/8"
            >
              Login
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
