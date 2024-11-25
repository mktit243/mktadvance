import MainHeader from "@/components/shared/header/main_header"
import WhoWeAre from "../(home)/components/who_we_are"
import Footer from "../(home)/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "MktAdvance - A propos de nous",
    description: "Nous créons des espaces de rencontre entre vos marques et les consommateurs",
  }

const Page = () => {
  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">
          A propos de nous
        </h1>
      </MainHeader>
      <WhoWeAre />
      <Footer />
    </main>
  )
}

export default Page
