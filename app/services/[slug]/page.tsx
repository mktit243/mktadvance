import Footer from "@/app/(home)/components/footer"
import WhatsappBubble from "@/app/(home)/components/whatsapp_bubble"
import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import { Metadata } from "next"
import Image from "next/image"
import { TypedObject } from "sanity"

type CodeBlock = {
  value: {
    language: string
    code: string
  }
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = await getServiceBySlug(slug)

  return {
    title: service?.title ?? "MKTAdvance",
    openGraph: {
      images: [service?.icon ?? ""],
    },
  }
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const service = await getServiceBySlug(slug)

  const components = {
    types: {
      code: ({ value }: CodeBlock) => (
        <pre data-language={value.language}>
          <code>{value.code}</code>
        </pre>
      ),
    },
  }

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
        <div className="my-6 px-[15%]">
          {Boolean(service?.image) && (
            <Image
              src="/assets/images/man-sitting.jpeg"
              alt={service!.title}
              width={1240}
              height={900}
              className="max-w-[20dvw] object-contain float-left mr-6 mb-6"
            />
          )}
          <p className="text-xl">
            L'organisation et le sens de l'anticipation sont des leviers de
            réussite pour une entreprise, quel que soit son secteur d'activités.
            En développant une bonne stratégie de communication, une entreprise
            peut facilement augmenter sa visibilité, booster son chiffre
            d'affaires, améliorer les relations en interne ou encore maîtriser
            plus efficacement son budget. Ce guide vous permettra d'établir une
            méthodologie pour créer une stratégie de communication réussie.
          </p>
          <h1 className="text-3xl font-bold my-4">
            10 étapes pour réussir sa stratégie de communication
          </h1>
          <ul className="text-xl [&>*]:my-3 list-disc pl-[40%]">
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
            <li>Implémentation de la communication et suivi d’exécution</li>
            <li>Rapport et recommandations</li>
          </ul>
          {/* <div className="my-6 px-[5%] flex flex-col items-start justify-center text-2xl">
            <PortableText
              value={service?.content as TypedObject[]}
              components={components}
            />
          </div> */}
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
