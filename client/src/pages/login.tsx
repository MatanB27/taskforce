import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icon, ICON_NAMES } from "@/assets/icons";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top_left,_rgb(var(--app-tertiary-rgb)/0.18),_transparent_28%),linear-gradient(135deg,_rgb(var(--app-primary-rgb)/0.08),_transparent_48%)]">
      <div className="mx-auto flex min-h-dvh max-w-6xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <section className="flex w-full max-w-lg flex-col items-center py-4">
          <Card className="w-full overflow-hidden rounded-[2rem] border border-neutral/15 bg-white/92 py-0 shadow-[0_32px_90px_rgba(67,56,202,0.14)] backdrop-blur">
            <CardHeader className="border-b border-neutral/12 px-6 py-6 sm:px-8">
              <Link to={ROUTES.HOME} className="inline-flex items-center">
                <Icon name={ICON_NAMES.logo} />
                <span className="ml-1 text-md font-bold tracking-wide text-primary">
                  TASKFORCE
                </span>
              </Link>
              <CardTitle className="mt-6 text-2xl font-semibold text-primary sm:text-3xl">
                Sign in
              </CardTitle>
              <CardDescription className="text-sm text-neutral">
                Access your workspace with Google or your email and password.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
              <Button
                variant="outline"
                className="h-11 w-full justify-center gap-3 border-neutral/18 bg-white text-base text-foreground hover:bg-muted"
              >
                <Icon
                  name={ICON_NAMES.google}
                  size={20}
                  className="!h-auto !w-auto shrink-0"
                />
                <span className="font-bold">Continue with Google</span>
              </Button>

              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-neutral/60">
                <span className="h-px flex-1 bg-neutral/14" />
                Or
                <span className="h-px flex-1 bg-neutral/14" />
              </div>

              <form className="space-y-4">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-primary">
                    Email
                  </span>
                  <Input
                    type="email"
                    placeholder="you@taskforce.app"
                    className="h-11 rounded-xl border-neutral/18 bg-white px-3 text-sm"
                  />
                </label>

                <label className="block space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-primary">
                      Password
                    </span>
                    <a
                    href="#"
                    className="text-sm font-medium text-tertiary transition-colors hover:text-primary"
                  >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 rounded-xl border-neutral/18 bg-white px-3 text-sm"
                  />
                </label>

                <Button className="mt-2 h-11 w-full text-sm font-semibold">
                  Login
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-neutral">
                  Don&apos;t have an account?{" "}
                  <Link
                    to={ROUTES.REGISTER}
                    className="font-semibold text-primary transition-colors hover:text-tertiary"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-5 flex items-center justify-center gap-6 text-[0.7rem] font-semibold tracking-[0.24em] text-neutral/70">
            <a href="#" className="transition-colors hover:text-primary">
              TERMS OF SERVICE
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              PRIVACY POLICY
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
