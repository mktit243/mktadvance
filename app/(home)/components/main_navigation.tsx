"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroNaviationMenu from "./hero_navigation_menu"
import { MouseEventHandler, useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { JackInTheBox } from "react-awesome-reveal"
import { Service } from "../utils/service"
import Link from "next/link"

const MainNavigationMenu = ({ services }: { services: Service[] }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > window.innerHeight) {
      // Adjust the scroll threshold as needed
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const handleClose: MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    event.stopPropagation()
    // @ts-expect-error: Should expect tagName
    if (event.target.tagName == "SECTION") {
      setIsOpened(false)
    }
  }

  return (
    <div
      className={cn(
        "my-4 px-8 flex justify-between text-white",
        isSticky &&
          "fixed w-full top-0 left-0 m-0 bg-white py-3 text-black z-[3] shadow-lg origin-top transition-all duration-300",
      )}
    >
      <div className="flex">
        <div className="bg-white">
          <Image
            src="/assets/images/mkt-advance.png"
            alt="MKT Advance Logo"
            height={262}
            width={529}
            className="w-[90px] object-contain"
          />
        </div>
        <Image
          src="/assets/images/Animated-Flag-Congo.gif"
          alt="Animated Congo DRC Flag"
          height={300}
          width={300}
          className="w-[50px] object-contain ml-2"
          unoptimized
        />
      </div>
      <HeroNaviationMenu services={services} isSticky={isSticky} />
      <Link href="/estimation">
        <Button
          variant="outline"
          className="bg-red-500 border-red-500 text-white font-bold transition-all duration-300 max-md:hidden"
        >
          Demander un devis
        </Button>
      </Link>
      <Button
        variant="outline"
        className="lg:hidden"
        onClick={() => setIsOpened(true)}
      >
        <Menu />
      </Button>
      {isOpened && (
        <section
          className={cn(
            "fixed top-0 right-0 h-screen w-screen bg-black/80 justify-end z-[10] flex",
          )}
          onClick={handleClose}
        >
          <JackInTheBox className="h-screen">
            <div className="w-[80dvw] h-full bg-white text-black origin-right transition-all duration-500">
              <div className="flex items-center justify-between px-4">
                <Image
                  src="/assets/images/mkt-advance.png"
                  alt="MKTAdvance Logo"
                  height={262}
                  width={529}
                  className="w-[120px] object-contain mt-4"
                />
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setIsOpened(false)}
                >
                  <X />
                </Button>
              </div>
              <HeroNaviationMenu
                services={services}
                isSticky={true}
                isMobile={true}
              />
              <Link href="/estimation">
                <Button
                  variant="outline"
                  className="bg-red-500 border-red-500 text-white font-bold transition-all duration-300 mx-7"
                >
                  Demander un devis
                </Button>
              </Link>
            </div>
          </JackInTheBox>
        </section>
      )}
    </div>
  )
}

export default MainNavigationMenu
