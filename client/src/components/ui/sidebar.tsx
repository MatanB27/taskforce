/* eslint-disable react-refresh/only-export-components */
import * as React from "react";

import { cn } from "@/lib/utils";

type SidebarContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  className,
  defaultOpen = true,
  ...props
}: React.ComponentProps<"div"> & { defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
        toggleSidebar: () => setOpen((current) => !current),
      }}
    >
      <div
        data-slot="sidebar-provider"
        className={cn(
          "relative min-h-dvh w-full overflow-x-hidden bg-background",
          className,
        )}
        {...props}
      />
    </SidebarContext.Provider>
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<"div">) {
  const { open } = useSidebar();

  return (
    <div
      data-slot="sidebar-inset"
      className={cn(
        "min-w-0 bg-background transition-[padding] duration-200 lg:pl-16",
        open && "lg:pl-72",
        className,
      )}
      {...props}
    />
  );
}

function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      data-slot="sidebar-trigger"
      aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      onClick={toggleSidebar}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent text-neutral transition-colors hover:bg-primary/10 hover:text-primary dark:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

function Sidebar({
  className,
  collapsible = "none",
  ...props
}: React.ComponentProps<"aside"> & {
  collapsible?: "icon" | "none";
}) {
  const { open } = useSidebar();
  const isCollapsed = collapsible === "icon" && !open;

  return (
    <aside
      data-slot="sidebar"
      data-state={isCollapsed ? "collapsed" : "expanded"}
      className={cn(
        "fixed inset-y-0 left-0 z-50 hidden flex-col overflow-x-visible border-r border-neutral/20 bg-white transition-[width] duration-200 lg:flex dark:bg-black",
        isCollapsed ? "w-16" : "w-72",
        className,
      )}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { open } = useSidebar();

  return (
    <div
      data-slot="sidebar-header"
      className={cn(
        "flex h-14 items-center border-b border-neutral/20 transition-[padding] duration-200",
        open ? "px-4" : "justify-center px-0",
        className,
      )}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  const { open } = useSidebar();

  return (
    <div
      data-slot="sidebar-content"
      className={cn(
        "flex flex-1 flex-col gap-6 overflow-y-auto overflow-x-hidden py-5 transition-[padding] duration-200",
        open ? "px-4" : "px-2",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroup({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="sidebar-group"
      className={cn("space-y-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({ className, ...props }: React.ComponentProps<"p">) {
  const { open } = useSidebar();

  return (
    <p
      data-slot="sidebar-group-label"
      className={cn(
        "px-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-secondary transition-opacity",
        !open && "pointer-events-none opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn("space-y-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  const { open } = useSidebar();

  return (
    <li
      data-slot="sidebar-menu-item"
      data-collapsed={!open}
      className={cn("group relative list-none", className)}
      {...props}
    />
  );
}

function SidebarMenuButton({
  className,
  isActive = false,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) {
  const { open } = useSidebar();

  return (
    <a
      data-slot="sidebar-menu-button"
      data-active={isActive}
      data-collapsed={!open}
      className={cn(
        "flex items-center rounded-xl text-sm font-medium text-neutral transition-colors hover:bg-primary/10 hover:text-primary data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
        open ? "gap-3 px-3 py-2.5" : "mx-auto size-9 justify-center",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
};
