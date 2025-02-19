import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
// import { NavLogin } from "./nav-login"
import dynamic from "next/dynamic"
const NavLogin = dynamic(
  () => import("./nav-login").then((model) => model.default),
  { ssr: false }
)
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <NavLogin />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
