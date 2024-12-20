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
      <Footer />
    </main>
  )
}

export default Page
