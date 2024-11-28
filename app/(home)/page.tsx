import Image from "next/image"
import HeroSectionCarousel from "./components/hero_section_carousel"
import { Button } from "@/components/ui/button"
import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Dumbbell,
  HandCoins,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
} from "lucide-react"
import React from "react"
import WhoWeAre from "./components/who_we_are"
import TheyTrustUs from "./components/they_trust_us"
import HeroTitle from "./components/hero_title"
import ValuesImage from "./components/values_image"
import MktTeam from "./components/team"
import Footer from "./components/footer"
import WhatsappBubble from "./components/whatsapp_bubble"
import MainNavigationMenu from "./components/main_navigation"
import { getServices } from "./utils/service"
import { getTeam } from "./utils/team"
import { getPartners } from "./utils/partners"
import { getInfo } from "./utils/info"
import { getCarousels } from "./utils/projects"
import Link from "next/link"
import ContactUsForm from "./components/contact_us_form"
import NumberTicker from "@/components/ui/number-ticker"
import SparklesText from "@/components/ui/sparkles-text"

export default async function Home() {
  const services = await getServices()
  const team = await getTeam()
  const partners = await getPartners()
  const info = await getInfo()
  const carouselImages = await getCarousels()

  return (
    <main>
      <div className="h-screen w-screen relative">
        <HeroSectionCarousel images={carouselImages} />
        <div className="bg-black/60 absolute top-0 left-0 h-screen w-screen"></div>
        <div className="absolute top-0 left-0 h-screen w-screen flex flex-col justify-between">
          <MainNavigationMenu services={services} />
          <div className="text-white text-center mt-8">
            <HeroTitle />
            <div className="mt-8 grid grid-cols-6 max-md:grid-cols-3 max-sm:hidden max-md:gap-2 place-items-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="h-full p-4 w-[180px] border-[1px] border-red-500/60 flex flex-col items-center justify-center"
                >
                  <span
                    className="text-red-500"
                    dangerouslySetInnerHTML={{ __html: service.icon }}
                  ></span>
                  <div className="mt-4 font-bold text-lg">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <WhoWeAre />
      <TheyTrustUs partners={partners} />
      <section>
        <div className="my-6 flex px-[5%] max-md:flex-col">
          <ValuesImage />
          <div className="w-[50%] px-[5%] max-md:w-full max-md:mt-6">
            <h1 className="text-4xl font-bold text-left mb-6">Nos valeurs</h1>
            <div className="[&>*]:mb-6 flex flex-col justify-center">
              <div className="flex">
                <Award className="text-green-500 w-[140px] mr-4" size={50} />
                <div>
                  <h3 className="text-xl text-green-500 font-bold">
                    <SparklesText
                      className="text-3xl"
                      text="La Passion"
                      colors={{ first: "#22c55e", second: "#22c55e" }}
                      sparklesCount={2}
                    />
                  </h3>
                  <p className="text-lg">
                    Nous pensons qu&apos;il est important d&apos;être passionné
                    par ce que l&apos;on fait afin de prendre du plaisir dans
                    les projets que nous menons et à le partager avec nos
                    clients et partenaires. A ce titre, la co-création est au
                    coeur de nos process.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Dumbbell
                  className="text-black-500 w-[60px] h-[60px] mr-4"
                  size={50}
                />
                <div>
                  <h3 className="text-xl text-black-500 font-bold">
                    <SparklesText
                      className="text-3xl"
                      text="L'exigence"
                      colors={{ first: "#000000", second: "#000000" }}
                      sparklesCount={2}
                    />
                  </h3>
                  <p className="text-lg">
                    Nous nous imposons ce que nous recommandons à nos clients et
                    ce que nous exigeons de nos prestataires.
                  </p>
                </div>
              </div>
              <div className="flex">
                <HandCoins className="text-red-500 w-[90px] mr-4" size={50} />
                <div>
                  <h3 className="text-xl text-red-500 font-bold">
                    <SparklesText
                      className="text-3xl"
                      text="La Rentabilité"
                      colors={{ first: "#ef4444", second: "#ef4444" }}
                      sparklesCount={2}
                    />
                  </h3>
                  <p className="text-lg">
                    La rentabilité de nos actions est la garantie de la
                    satisfaction de nos clients. Notre propre rentabilité est la
                    garantie de notre indépendance et de notre développement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[20%] max-md:px-[5%] py-[3rem] max-md:py-[1rem] [&>*]:my-3">
        <Image
          src="/assets/images/words.png"
          alt="WORDS"
          height={330}
          width={1801}
          unoptimized
        />
        <Image
          src="/assets/images/professionalisme.png"
          alt="WORDS"
          height={330}
          width={1801}
          unoptimized
        />
      </section>
      {/* <section className="my-6 px-[5%]">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e]">
            NOS SERVICES
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            Consultez nos services
          </h1>
        </div>
        <div className="mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-9">
          {services.map((service, index) => (
            <ServiceItem service={service} index={index} key={index} />
          ))}
        </div>
      </section> */}
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
      <section className="mt-8 mb-4 p-[5%] flex justify-between max-md:flex-col">
        <div className="w-[40%] max-md:w-full max-md:mb-4">
          <Image
            src="/assets/images/image16_v3.jpg"
            alt="Directeur MKTAdvance"
            width={239}
            height={239}
            className="w-full h-full object-cover"
            quality={100}
            unoptimized
          />
        </div>
        <div className="w-[55%] max-md:w-full">
          <h1 className="text-3xl font-bold">Nos Performances Éclatantes</h1>
          <p>
            Découvrez l&apos;impact de nos réalisations à travers des chiffres
            impressionnants qui témoignent de notre engagement envers
            l&apos;excellence et la réussite. Explorez nos performances
            éclatantes pour voir comment nous transformons les défis en succès
            et les idées en résultats concrets.
          </p>
          <div className="grid grid-cols-2 mt-5 gap-4 max-sm:grid-cols-1">
            <p className="">
              <PartyPopper
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">
                +<NumberTicker value={100} />
              </span>
              <span className="font-bold">clients heureux</span> et satisfaits
              de nos services, témoignant de notre engagement envers
              l&apos;excellence et la satisfaction clientèle.
            </p>
            <p className="">
              <BriefcaseBusiness
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">
                +<NumberTicker value={300} />
              </span>
              <span className="font-bold">projets réalisés</span> avec succès,
              démontrant notre expertise et notre capacité à concrétiser les
              visions de nos clients avec efficacité et professionnalisme.
            </p>
            <p className="">
              <BrainCircuit
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">
                +<NumberTicker value={15} />
              </span>
              <span className="font-bold">ans d&apos;expérience</span> à
              innover, créer et exceller dans l&apos;industrie, façonnant notre
              expertise et notre engagement à vous offrir le meilleur.
            </p>
            <p className="">
              <Award
                size={50}
                className="text-red-500 h-[50px] w-[50px] float-left mr-3"
              />
              <span className="text-4xl font-bold mr-1">
                +<NumberTicker value={20} />
              </span>
              <span className="font-bold">prix remportés,</span> une
              reconnaissance de notre dévouement à l&apos;excellence et à
              l&apos;innovation dans notre domaine.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[500px] max-md:min-h-[600px] w-full relative">
        <div className="bg-[url('/assets/images/testimonials-bg.jpg')] bg-cover bg-fixed bg-center z-[-2] w-full h-full absolute top-0 left-0"></div>
        <div className="z-[-1] bg-black/70 w-full h-full absolute top-0 left-0"></div>
        <div className="w-full h-full absolute top-0 left-0 py-[2%] text-white flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">Notre équipe</h2>
          <p className="my-3 px-[20%] max-lg:px-[5%] text-center">
            <strong>L&apos;EQUIPE</strong> qui vous accompagne est une
            concentration d&apos;experts et de consultants ayant travaillée au
            sein des plus grandes agences et régies publicitaires en République
            Démocratique du Congo, Congo Brazzaville, en Afrique et au-delà.
            Avec une connaissance profonde du marché local en RDC, et nous
            travaillons en collaboration avec d&apos;autres agences en Afrique
            et au-delà.
          </p>
          <p className="my-3 px-[20%] max-lg:px-[5%] text-center">
            Forte d&apos;une connaissance approfondie du marché local en RDC,
            Nous collaborons également avec d&apos;autres agences à travers le
            continent africain et dans le monde.
          </p>
          <MktTeam team={team} />
        </div>
      </section>
      <section className="my-12 px-[5%]" id="contact">
        <div>
          <h5 className="flex items-center font-bold text-gray-400 opacity-60 after:ml-3 after:content-[''] after:w-[120px] after:h-[2px] after:bg-[#ffde9e] uppercase">
            Contact
          </h5>
          <h1 className="mt-1 uppercase font-bold text-[32px]">
            Contactez-nous
          </h1>
        </div>
        {info.coor.lat && info.coor.long && (
          <div className="mt-12">
            <iframe
              className="border-none w-full h-[400px]"
              title={`Mkt Advance - ${info.address}`}
              src={`https://www.google.com/maps?q=${info.coor.lat},${info.coor.long}&output=embed&hl=fr`}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="mt-8 flex items-center justify-center max-md:flex-col">
          <div className="w-[40%] flex flex-col [&>*]:mb-8 max-md:w-full">
            <a
              href="https://www.google.com/maps/search/?api=1&query=-4.313828829294465,15.30045616439124"
              className="flex"
            >
              <div className="w-[50px] h-[50px] bg-red-500 flex items-center justify-center">
                <MapPin className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Adresse</h4>
                <p>
                  {info.address}, {info.city}
                </p>
              </div>
            </a>
            <a href={`mailto:${info.email}`} className="flex">
              <div className="w-[50px] h-[50px] bg-red-500 flex items-center justify-center">
                <Mail className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Adresse e-mail</h4>
                <p>{info.email}</p>
              </div>
            </a>
            <a href={`tel:${info.phone}`} className="flex">
              <div className="w-[50px] h-[50px] bg-red-500 flex items-center justify-center">
                <Phone className="text-white" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg">Téléphone</h4>
                <p>{info.phone}</p>
              </div>
            </a>
          </div>
          <div className="lg:w-8/12 mt-5 mt-lg-0 w-full">
            <ContactUsForm />
          </div>
        </div>
      </section>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}
