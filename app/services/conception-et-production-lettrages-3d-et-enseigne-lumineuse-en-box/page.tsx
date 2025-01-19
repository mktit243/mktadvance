import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import Image from "next/image"

const Page = async () => {
  const slug =
    "conception-et-production-lettrages-3d-et-enseigne-lumineuse-en-box"
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

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-red-500">
            Lettrages Lumineux en 3D de toutes dimensions
          </h3>
          <p className="text-lg mb-8">
            Visibilité accrue, Haut de gamme! les lettres en 3D attirent
            l&apos;attention grâce à leur profondeur et à leurs jeux
            d&apos;ombres. La profondeur apporte un effet visuel attractif qui
            améliore la lisibilité et rend le message plus dynamique, comparé
            aux lettrages plats ou simple enseigne.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/slides/conceptions/Lettrages 3D RAXO Direction.jpg"
                  alt="Lettrages 3D RAXO Direction Générale RDC"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-center font-medium">
                Lettrages 3D RAXO Direction Générale RDC
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/slides/conceptions/Lettrages 3D sur fond en alucobond .jpg"
                  alt="Lettrages 3D sur fond en alucobond / DGDA Direction Provinciale"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-center font-medium">
                Lettrages 3D sur fond en alucobond / DGDA Direction Provinciale
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/slides/conceptions/Lettrages 3D Boutique Montale Paris.jpg"
                  alt="Lettrages 3D Boutique Montale Paris RDC - Kinshasa"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-center font-medium">
                Lettrages 3D Boutique Montale Paris RDC - Kinshasa
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <blockquote className="my-4 italic border-s-4 p-4 border-red-300 bg-gray-50 leading-relaxed font-semibold text-xl">
            <h3 className="text-2xl font-semibold mb-4 text-red-500 underline">
              Lettrages Lumineux en 3D de toutes dimensions :
            </h3>
          </blockquote>

          <p className="text-lg mb-4">
            Impact mémorable: Les lettres en relief sont plus faciles à
            mémoriser pour vos clients et vos visiteurs, ce qui contribue à
            renforcer la visibilité de votre marque et du lieu.
          </p>

          <p className="text-lg mb-4">
            Durabilité : fabriqués en matériaux résistants (comme
            l&apos;acrylique, le métal ou le plexi), les lettrages 3D sont
            robustes et peuvent supporter des conditions extérieures difficiles,
            ce qui prolonge leur durée de vie.
          </p>

          <p className="text-lg mb-8">
            Polyvalence : Ils peuvent être installés en intérieur ou en
            extérieur et sont adaptés à divers environnements (bureaux,
            magasins, bâtiments publics, etc.), offrant une flexibilité
            d&apos;utilisation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Image
                src="/assets/images/slides/conceptions/lettrages/Espace réception centrale CNSS .jpg"
                alt="Espace réception centrale CNSS"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-2 text-sm text-center font-medium">
                Espace réception centrale CNSS Direction Générale
              </p>
            </div>

            <div className="relative">
              <Image
                src="/assets/images/slides/conceptions/lettrages/3D sur la coupole du bâtiment de la Direction Générale de la CNSS.jpg"
                alt="3D sur la coupole CNSS"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-2 text-sm text-center font-medium">
                3D sur la coupole du bâtiment de la Direction Générale de la
                CNSS
              </p>
            </div>

            <div className="relative">
              <Image
                src="/assets/images/slides/conceptions/lettrages/Lettrages 3D, Firstbank agence Boulevard du 30 juin.jpg"
                alt="Lettrages 3D Firstbank"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-2 text-sm text-center font-medium">
                Lettrages 3D, Firstbank agence Boulevard du 30 juin
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-red-500">
            Enseigne Lumineuse en Boxlight
          </h3>
          <p className="text-lg mb-8">
            Les enseignes boxlight peuvent être fabriquées dans différents formats, couleurs et styles, l&apos;adaptation pratique à l&apos;identité visuelle de l&apos;entreprise et de créer une signalétique personnalisée. Son éclairage intégré, permet une visibilité le jour comme la nuit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/slides/conceptions/lumineuses/Enseigne Lumineuse en drapeau, double face.png"
                  alt="Enseigne Lumineuse en drapeau, double face"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-center font-medium">
                Enseigne Lumineuse en drapeau, double face
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/slides/conceptions/lumineuses/Enseigne Lumineuse en caisson.jpg"
                  alt="Enseigne Lumineuse en caisson"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-center font-medium">
                Enseigne Lumineuse en caisson
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/images/slides/conceptions/lumineuses/Enseigne Lumineuse en caisson JOEL.jpg"
                  alt="Enseigne Lumineuse en caisson JOEL"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-center font-medium">
                Enseigne Lumineuse en caisson
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
