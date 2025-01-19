import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import Image from 'next/image'

const Page = async () => {
  const slug = "marketing-experientiel-et-evenementiel"
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
            <h3 className="text-2xl font-bold mb-6 text-green-700">Relations Publiques Efficace Pour :</h3>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-green-700">1.</span>
                <p>Amélioration, maintient d&apos;une image positive de votre entreprise auprès du public et des parties prenantes.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">2.</span>
                <p>Intervention pour protéger et renforcer la réputation de votre entreprise, en particulier en temps de crise.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">3.</span>
                <p>Favoriser une communication claire et honnête avec le public, renforçant ainsi la confiance et la crédibilité de l&apos;entreprise.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">4.</span>
                <p>Création et maintien de relations solides.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">5.</span>
                <p>Stratégies pour minimiser les dégâts et rétablir l&apos;image de l&apos;entreprise en cas de problème ou de scandale.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">6.</span>
                <p>Organiser des événements, conférences et campagnes médiatiques pour accroître la présence et la reconnaissance de l&apos;entreprise.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">7.</span>
                <p>Façonner les perceptions et influence l&apos;opinion en faveur des objectifs de l&apos;entreprise grâce à des messages stratégiques.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">8.</span>
                <p>Mettre en avant les réalisations, les succès et les engagements de l&apos;entreprise.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">9.</span>
                <p>Contribuer à atteindre les objectifs de l&apos;entreprise en alignant les messages et les actions de communication avec la stratégie globale.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-green-700">10.</span>
                <p>Une bonne communication interne améliore le moral des employés, en les impliquant et en les rendant fiers de leur entreprise.</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/assets/images/slides/marketing/e3f153e0-23b3-409c-94e8-c6a1c5420e8e.png" 
              alt="Relations Publiques Word Cloud" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <Image 
              src="/assets/images/slides/marketing/9037eb5f-4e72-4cf6-9f7c-8da836c2f65a.jpg"
              alt="Marketing Expérientiel"
              width={500}
              height={400}
              className="border-4 border-red-500"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Marketing expérientiel :</h3>
            <p className="text-gray-700 leading-relaxed">
              Un moyen crucial pour faire vivre au consommateur une expérience qui suscite des émotions positives et laisse un souvenir durable. Cela peut inclure des démonstrations interactives, des espaces de marque immersifs, ou des expériences personnalisées, toutes conçues pour que le consommateur se connecte émotionnellement avec la marque.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Marketing expérientiel :</h3>
            <h4 className="text-xl font-bold mb-4 text-red-500">Pour une activation terrain efficace :</h4>
            <ul className="space-y-3">
              <li>*Définir ce que l&apos;activation vise à accomplir (augmenter la notoriété, promouvoir un produit, générer des leads, fidéliser des clients, etc).</li>
              <li>*Identifier le public cible en fonction des caractéristiques démographiques, des comportements d&apos;achat ou des centres d&apos;intérêt.</li>
              <li>*Sélectionner un lieu où le public cible est présent (centres commerciaux, événements, marchés, salons, festivals, etc).</li>
              <li>*Proposer une interaction qui attire et retient l&apos;attention : démonstrations, échantillons gratuits, jeux concours, expériences immersives ou sensorielles.</li>
              <li>*Assurer une communication claire et en adéquation avec les valeurs et l&apos;image de l&apos;entreprise.</li>
              <li>*Prévoir du matériel adapté : flyers, goodies, kakemonos, supports numériques, etc.</li>
              <li>*Disposer d&apos;un personnel formé, dynamique et capable d&apos;interagir avec le public.</li>
              <li>*Encourager le public à une action concrète (achat, inscription, essai gratuit, visite du site web, partage sur les réseaux sociaux, etc).</li>
              <li>*Relier l&apos;activation à la présence en ligne : hashtags, QR codes, réseaux sociaux ou applications.</li>
              <li>*Mesurer le succès de l&apos;activation via des indicateurs comme le nombre d&apos;interactions, de ventes générées, ou de contacts collectés.</li>
              <li>*Planifier l&apos;événement avec soin pour éviter les imprévus et s&apos;assurer d&apos;avoir les autorisations nécessaires.</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <Image 
                src="/assets/images/slides/marketing/e7ad4356-0745-4aff-b797-35bcfc7e663b.jpg"
                alt="Lancement vente kit solar de Lux Africa Kinshasa"
                width={500}
                height={400}
                className="border-4 border-red-500 mb-2"
              />
              <p className="text-sm text-gray-600 italic">Lancement vente kit solar de Lux Africa Kinshasa –RDC au rond point UPN/Ngaliema</p>
            </div>
            <div>
              <Image 
                src="/assets/images/slides/marketing/811e527b-19b4-4758-999e-57a74c6887d5.jpg"
                alt="Marketing Expérientiel Event"
                width={500}
                height={400}
                className="border-4 border-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
