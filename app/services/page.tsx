import MainHeader from "@/components/shared/header/main_header"
import Footer from "../(home)/components/footer"
import ServiceItem from "../(home)/components/service_item"
import { getServices } from "../(home)/utils/service"

const Page = async () => {
  const services = await getServices()

  return (
    <main>
      <MainHeader className="min-h-[40dvh]">
        <div className="flex flex-col">
          <h1 className="text-center text-white text-4xl font-bold">
            Notre Positionnement
          </h1>
          <p className="text-center text-white my-6 text-lg">
            Leader dans la production des enseignes et les supports de
            visibilité.
          </p>
        </div>
      </MainHeader>
      <section className="my-6 px-[5%]">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e]">
            NOS SERVICES
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            {/* Consultez nos services */}
            Nous ambitionnons de créer plus de valeur autant pour les marques
            que pour les consommateurs
          </h1>
        </div>
        <div className="mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-9">
          {services.map((service, index) => (
            <ServiceItem service={service} index={index} key={index} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Page
