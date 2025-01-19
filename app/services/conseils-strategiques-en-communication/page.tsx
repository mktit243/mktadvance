import Footer from "@/app/(home)/components/footer"
import WhatsappBubble from "@/app/(home)/components/whatsapp_bubble"
import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import { Metadata } from "next"
import Image from "next/image"

export async function generateMetadata(): Promise<Metadata> {
  const slug = "conseils-strategiques-en-communication"
  const service = await getServiceBySlug(slug)

  return {
    title: service?.title ?? "MKTAdvance",
    openGraph: {
      images: [service?.icon ?? ""],
    },
  }
}

const Page = async () => {
  const slug = "conseils-strategiques-en-communication"
  const service = await getServiceBySlug(slug)

  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">
          {service?.title}
        </h1>
      </MainHeader>
      <div className="p-[5%]">
        <h2 className="text-3xl font-bold">{service?.title}</h2>
        <blockquote className="my-4 italic border-s-4 p-4 border-red-300 bg-gray-50 leading-relaxed font-semibold text-xl">
          {service?.description}
        </blockquote>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              10 étapes pour réussir sa stratégie de communication
            </h3>
            <ol className="list-decimal list-inside space-y-3">
              <li>Définir les objectifs de sa stratégie de communication</li>
              <li>Identifier et comprendre sa cible</li>
              <li>Adapter sa Communication et Trouver son positionnement</li>
              <li>Définir son style de communication</li>
              <li>Choisir ses canaux de communication</li>
              <li>Établir son plan de Communication</li>
              <li>Établir son budget</li>
              <li>
                Adapter et formuler le message à Communication selon les
                différentes cibles
              </li>
              <li>
                Implémentation de la communication et suivi d&apos; exécution
              </li>
              <li>Rapport et recommandations</li>
            </ol>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/assets/images/slides/person_focus.jpg"
              alt="Professionnel concentré sur sa stratégie de communication"
              className="rounded-lg object-contain w-full h-full p-[5%]"
              height={500}
              width={260}
            />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
