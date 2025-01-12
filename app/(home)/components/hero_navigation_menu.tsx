import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Service } from "../utils/service"
import { usePathname } from "next/navigation"

const HeroNaviationMenu = ({
  isSticky,
  isMobile = false,
  services,
}: {
  isSticky: boolean
  isMobile?: boolean
  services: Service[]
}) => {
  const path = usePathname()

  return (
    <NavigationMenu
      className={cn(
        "flex items-center max-md:hidden",
        isMobile && "max-md:block flex-col",
      )}
      orientation="vertical"
    >
      <NavigationMenuList
        className={cn(
          "flex items-center gap-6",
          isMobile && "flex-col py-5 px-7 items-start",
        )}
      >
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col justify-center">
              Accueil
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              À propos
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/about" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Nos services
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/services" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/realisations" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Réalisations
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/realisations" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/gallerie" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Gallérie
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/gallerie" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Blog
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/blog" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink className="group transition-all duration-300 font-semibold flex flex-col">
              Contact
              <span
                className={cn(
                  "h-[2px] origin-left bg-white rounded-md scale-x-0 group-hover:scale-x-105 transition-transform duration-200",
                  isSticky && "bg-black",
                  path === "/#contact" && "scale-x-105",
                )}
              ></span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none text space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default HeroNaviationMenu
