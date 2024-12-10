import MainHeader from "@/components/shared/header/main_header"
import Footer from "../(home)/components/footer"
import Porfolio from "../(home)/components/portfolio"
import { getCategories, getProjects } from "../(home)/utils/projects"

const Page = async () => {
  const projects = await getProjects()
  const categories = await getCategories()

  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">
          Réalisations
        </h1>
      </MainHeader>
      <section className="my-6 px-[5%]" id="realisations">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e] uppercase">
            Réalisations
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            Consultez nos Réalisations
          </h1>
          <p className="font-semibold">
          Nous sommes spécialisés dans la conception, production et installation des enseignes signalétiques lumineuses en 3D et box lumineux
          </p>
        </div>
        <Porfolio categories={categories} portfolios={projects} />
      </section>
      <Footer />
    </main>
  )
}

export default Page
