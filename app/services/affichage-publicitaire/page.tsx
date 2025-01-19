import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import Image from "next/image"

const Page = async () => {
  const slug = "affichage-publicitaire"
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
          <h3 className="text-2xl font-bold mb-4">Nos Panneaux Routiers :</h3>
          <p className="mb-4">
            Nos panneaux d&apos;affichage publicitaire situés à des endroits
            stratégiques de Kinshasa ainsi qu&apos;en provinces est un moyen
            puissant de communication visuelle, offrant de nombreux avantages
            pour les marques et les entreprises qui souhaitent atteindre un
            large public.
          </p>

          <div className="ml-4 mb-6">
            <p className="font-semibold mb-2">
              L&apos;affichage publicitaire offre :
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Grande visibilité</li>
              <li>
                Impact visuel fort : une Présence continue : Contrairement aux
                publicités numériques, l&apos;affichage extérieur est visible
                24h/24, 7j/7, ce qui augmente les chances de toucher un maximum
                de personnes. Il offre une visibilité continue, sans dépendre
                des horaires d&apos;audience.
              </li>
              <li>
                Confère de la crédibilité et renforce l&apos;image de la marque,
                car elle montre que l&apos;entreprise est bien établie et
                investit dans sa visibilité.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 w-full">
              <Image
                src="/assets/images/slides/panneaux/8d7af80c-af50-4929-8f5f-ee796151a482.jpg"
                alt="Panneau publicitaire 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/assets/images/slides/panneaux/92a254f9-4f05-4512-a3a2-87d7d029db75.jpg"
                alt="Panneau publicitaire 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/assets/images/slides/panneaux/f83d1cc1-f78f-434e-8a54-546edb4619bb.jpg"
                alt="Panneau publicitaire 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Affichage Publicitaire :</h3>
          <div className="ml-4 mb-8">
            <p className="mb-4">
              Nos panneaux d&apos;affichage publicitaire situés à des endroits
              stratégiques de Kinshasa ainsi qu&apos;en provinces est un moyen
              puissant de communication visuelle, offrant de nombreux avantages
              pour les marques et les entreprises qui souhaitent atteindre un
              large public.
            </p>
            <p className="font-semibold mb-2">
              L&apos;affichage publicitaire offre ;
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li>
                Ciblage géographique : L&apos;affichage publicitaire permet de
                cibler des zones spécifiques, ce qui est particulièrement utile
                pour les entreprises locales souhaitant attirer des clients dans
                leur zone de chalandise.
              </li>
              <li>
                Crédibilité et confiance : La présence physique des affiches,
                notamment en grands formats, confère de la crédibilité et
                renforce l&apos;image de la marque, car elle montre que
                l&apos;entreprise est bien établie et investit dans sa
                visibilité.
              </li>
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Lubumbashi/ Chaussée Mzee
                </h4>
                <div className="relative h-64 w-full">
                  <Image
                    src="/assets/images/slides/panneaux3/Lubumbashi: Chaussée Mzee.jpg"
                    alt="Panneau publicitaire à Lubumbashi Chaussée Mzee"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Lubumbashi/ Bld KASA-VUBU
                </h4>
                <div className="relative h-64 w-full">
                  <Image
                    src="/assets/images/slides/panneaux3/Lubumbashi: Bld KASA-VUBU.jpg"
                    alt="Panneau publicitaire à Lubumbashi Boulevard KASA-VUBU vue 1"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Nos Campagnes Médias :</h3>
          <div className="ml-4 mb-6">
            <p className="font-semibold mb-2">
              L&apos;affichage publicitaire extérieur offre ;
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li>
                Ciblage géographique : L&apos;affichage publicitaire permet de
                cibler des zones spécifiques, ce qui est particulièrement utile
                pour les entreprises locales souhaitant attirer des clients dans
                leur zone de chalandise.
              </li>
              <li>
                Crédibilité et confiance : La présence physique des affiches,
                notamment en grands formats, confère de la crédibilité et
                renforce l&apos;image de la marque, car elle montre que
                l&apos;entreprise est bien établie et investit dans sa
                visibilité.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Nos Campagnes Publicitaires :</h3>
          <div className="ml-4 mb-8">
            <p className="mb-6">
              Une <span className="font-semibold">campagne publicitaire</span> est une série coordonnée d&apos;actions de communication destinées à promouvoir un produit, un service, une marque ou une idée auprès d&apos;une audience cible. Elle combine différents canaux, messages et supports pour maximiser son impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative h-80 w-full">
                <Image
                  src="/assets/images/slides/campagnes/95584488-8df5-41bd-b8e9-79a596efe257.png"
                  alt="Campagne publicitaire exemple 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/assets/images/slides/campagnes/b3afbfd7-d9ff-404c-bb0f-5011acbbebf9.png"
                  alt="Campagne publicitaire exemple 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/assets/images/slides/campagnes/17aa3c4c-d244-4310-b7f2-f9230ee50317.jpg"
                  alt="Campagne publicitaire exemple 3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/assets/images/slides/campagnes/453e201c-77ab-41b2-864a-b4bbaefacafe.jpg"
                  alt="Campagne publicitaire exemple 4"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
