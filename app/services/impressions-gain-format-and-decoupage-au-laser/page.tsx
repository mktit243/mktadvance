import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"

const Page = async () => {
  const slug = "impressions-gain-format-and-decoupage-au-laser"
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
        <div>
          <h4 className="text-2xl font-bold my-4"> Impression Grand format : </h4>
          <p>
            Nos Machines pour différentes impression Haute définition et sur
            divers supports de qualité tels que bâche, vinyle, oneway vision,
            Glass décor etc. Nous imprimons qu&apos;après validation du bon à tirer ;
            Et Nous respectons vos couleurs, vos finitions, vos dimensions et
            vos délais… L&apos;impression sur grand format pour un accompagnement
            efficace autant pour vos affichages publicitaires que pour vos
            évènements ! Visibilité maximum et capter l&apos;attention de loin
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-[10%]">
            <div className="aspect-video relative">
              <img 
                src="/assets/images/slides/grand_format/3555df24-0880-413d-a7df-ef89f098bfbf.jpg"
                alt="Impression Grand format"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <div className="aspect-video relative">
              <img 
                src="/assets/images/slides/grand_format/e574fc26-2cc1-4125-8ea0-4fc9611658a4.jpg"
                alt="Impression Grand format"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-2xl font-bold mb-4 underline">Route Laser</h4>
          <p className="leading-relaxed">
            Le service de découpe sur router laser est une solution de précision pour vos supports visuels et d&apos;éléments personnalisés en divers matériaux, tels que le bois, le plexiglas, le métal, ou le PVC. Nous utilisons une technologie laser pour réaliser des découpes nettes et précises, permettant des détails fins et des contours complexes. Rapide et efficace pour créer des éléments visuels uniques et professionnels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="aspect-video relative">
              <img 
                src="/assets/images/slides/lasers/19248094-0985-45de-81bd-a40ba5b93d67.png"
                alt="Route Laser"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <div className="aspect-video relative">
              <img 
                src="/assets/images/slides/lasers/2a01a8b1-0686-4d72-a2a7-755c915701dc.jpg"
                alt="Route Laser"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <div className="aspect-video relative">
              <img 
                src="/assets/images/slides/lasers/8067f5e8-8c79-4546-9c6d-faefecc7fc95.png"
                alt="Route Laser"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
