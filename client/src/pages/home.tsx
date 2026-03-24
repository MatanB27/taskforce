import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const Home = () => {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <div className="min-h-dvh bg-background">
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <section className="rounded-3xl border border-neutral/20 bg-primary px-6 py-10 text-white sm:px-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/72">
                TaskForce Client
              </p>
              <h1 className="mt-4 max-w-2xl font-heading text-3xl font-semibold sm:text-4xl">
                A locked palette and a desktop sidebar that matches the current
                app shell.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
                Projects, Team, and Settings now live in a dedicated web
                sidebar, while mobile keeps the drawer version for smaller
                screens.
              </p>
            </section>

            <section className="mt-6 grid gap-4 md:grid-cols-3">
              <Card className="border border-neutral/20 bg-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-primary">Projects</CardTitle>
                  <CardDescription>
                    Desktop sidebar primary destination
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl bg-primary px-4 py-6 text-sm font-medium text-white">
                    Ready for the first route
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-neutral/20 bg-secondary text-white shadow-none">
                <CardHeader>
                  <CardTitle className="text-white">Team</CardTitle>
                  <CardDescription className="text-white/72">
                    Placeholder nav item until the page exists
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl bg-black/10 px-4 py-6 text-sm font-medium text-white">
                    Uses the new custom team icon
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-tertiary/20 bg-tertiary/10 shadow-none">
                <CardHeader>
                  <CardTitle className="text-tertiary">Settings</CardTitle>
                  <CardDescription className="text-neutral">
                    Hook this up when the page is ready
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-2xl bg-tertiary px-4 py-6 text-sm font-medium text-white">
                    Sidebar shell is in place
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
