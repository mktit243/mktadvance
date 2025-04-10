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
        
      </MainHeader>
      <OldWeAre />

      <section className="min-h-[500px] max-md:min-h-[600px] w-full relative">
        <div className="bg-[url('/assets/images/testimonials-bg.jpg')] bg-cover bg-fixed bg-center z-[-2] w-full h-full absolute top-0 left-0"></div>
        <div className="z-[-1] bg-black/70 w-full h-full absolute top-0 left-0"></div>
        <div className="w-full h-full absolute top-0 left-0 py-[2%] text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Notre équipe</h2>
          <p className="my-3 px-[20%] max-lg:px-[5%] text-center">
            <strong>L&apos;EQUIPE</strong>qui vous accompagne est composée
            d&apos;experts et de consultants ayant travaillé au sein des plus
            grandes agences et régies publicitaires en République Démocratique
            du Congo, au Congo-Brazzaville, en Afrique, etc...
          </p>
          <p className="my-3 px-[20%] max-lg:px-[5%] text-center">
            Forte d&apos;une connaissance approfondie du marché local. Nous
            collaborons également avec d&apos;autres agences à travers le
            continent africain et dans le monde.
          </p>
          <MktTeam team={team} />
        </div>
      </section>
      <Footer />
    </main>
  )
}


export default Page
