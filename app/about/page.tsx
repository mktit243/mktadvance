import MainHeader from "@/components/shared/header/main_header"
import WhoWeAre from "../(home)/components/who_we_are"
import Footer from "../(home)/components/footer"
import { Metadata } from "next"
import { Slide } from "react-awesome-reveal"
import Image from "next/image"
import OldWeAre from "./old_who_we_are"

export const metadata: Metadata = {
  title: "MktAdvance - A propos de nous",
  description:
    "Nous créons des espaces de rencontre entre vos marques et les consommateurs",
}

const Page = () => {
  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">
          A propos de nous
        </h1>

        <section className="bg-scroll min-h-[300px] w-full flex flex-col justify-center items-center text-white relative px-[5%] text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-2] bg-[url('/assets/images/cta-bg.jpg')] bg-fixed"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>
        <h1 className="text-3xl font-bold">
          Transformez votre visibilité dès aujourd&apos;hui !
        </h1>
        <p className="max-md:mt-5">
          Contactez-nous maintenant pour faire briller votre marque et captiver
          votre public.
        </p>
        <Link href="/#contact">
          <Button variant="outline" className="mt-6">
            Contactez-nous
          </Button>
        </Link>
      </section>
        
      </MainHeader>

      <OldWeAre />
      <Footer />
    </main>
  )
}


export default Page
