"use client"

import Image from "next/image"
import { Slide } from "react-awesome-reveal"

const OldWeAre = () => {
  return (
    <div className="py-20 flex max-md:flex-col-reverse" id="about_us">
      <div className="w-[50%] max-md:w-full px-[5%]">
        <h2 className="text-4xl max-md:text-3xl font-bold">
          Qui sommes-nous ?
        </h2>
        <div className="italic my-3 text-2xl">
          Nous sommes un groupe de professionnels de la communication qui ont
          chacun acquis une expertise tout en travaillant pour certaines des
          plus grandes agences et clients en Afrique, en Asie, en Europe et
          au-delà. Notre expérience depuis plus de 15 ans, nous permet
          d&apos;apporter notre riche expertise et une meilleure gestion de la
          communication au bénéfice de nos clients.
        </div>
        <p className="mt-6 text-2xl font-bold">
          Nous croyons en la puissance de l&apos;innovation et de la simplicité.
          Chaque projet est une opportunité de transformer une idée en réalité,
          en repoussant les limites de ce qui est possible.
        </p>
        <p className="mt-6 text-2xl">
          Nous sommes une agence de communication globale spécialisée dans la
          communication institutionnelle des entreprises et dans la promotion
          des produits et services de nos client.
        </p>
        <p className="mt-6 text-2xl">
          Nous sommes un partenaire fiable pour la planification et l’achat des
          espaces médias en République Démocratique du Congo et au Congo
          Brazzaville.
        </p>
      </div>
      <div className="w-[50%] max-md:w-full max-md:mb-4 px-[5%]">
        <Slide direction="right" triggerOnce>
          <Image
            src="/assets/images/madame_v3.jpg"
            alt="Madame Mireille Kaimby Tshiyoyo"
            height={239}
            width={239}
            className="w-full object-cover slide-reveal-right transition-all duration-300"
            quality={100}
            unoptimized
          />
        </Slide>
      </div>
    </div>
  )
}

export default OldWeAre
