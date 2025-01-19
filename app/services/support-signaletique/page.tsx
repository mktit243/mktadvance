import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import Image from "next/image"

const Page = async () => {
  const slug = "support-signaletique"
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

        <div className="mt-16">
          <div className="my-8">
            <p className="text-lg leading-relaxed">
              Les supports signalétiques et indicatifs jouent un rôle essentiel dans les environnements
              publics et privés. Les supports signalétique et indicatifs ont pour capacité à guider, informer
              et orienter efficacement les visiteurs, clients ou usagers.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              <span className="text-red-600 font-bold">Soulignant que la signalétique</span> contribue à renforcer l'image d'entreprise. En présentant des informations de manière cohérente et visuellement attrayante, elle reflète les valeurs et le professionnalisme de l'entité, créant un environnement accueillant et organisé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/957e8c84-6213-4afa-a9ba-e2d4680a6be4.jpg"
                alt="Panneau: Personne ne reste debout dans la salle SVP"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/ae9b91d3-cb64-4f44-b4d7-0f0cf7be2e9b.jpg"
                alt="Panneau: Aire de jeux"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/dc1d26e6-9df8-4c29-953f-c4dcd3dca3e8.jpg"
                alt="Panneau directionnel: Centre d'informations techniques, Bureaux administratifs, Toilettes"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg leading-relaxed">
              <span className="text-red-600 font-bold">Les supports indicateurs</span> améliorent l'expérience utilisateur en facilitant la navigation dans des espaces parfois complexes. Ils permettent de transmettre des informations claires et accessibles à tous, réduisant ainsi le risque de confusion ou de désorientation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/soulignant que la signalétique/3596db92-3ad4-4263-a795-ded747cc42bc.jpg"
                alt="Support signalétique"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/soulignant que la signalétique/6929ac8b-a52a-4397-b237-a93048c5c468.jpg"
                alt="Support signalétique"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/soulignant que la signalétique/9eee9f7f-2ecb-4762-ae6c-e94f595e2ea1.jpg"
                alt="Support signalétique"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/assets/images/slides/signalitiques/soulignant que la signalétique/eaa7aca6-1b56-4a94-a5e1-14ad682d3d31.jpg"
                alt="Support signalétique"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
