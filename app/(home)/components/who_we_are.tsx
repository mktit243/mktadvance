"use client"

import TextRevealByWord from "@/components/ui/text-reveal"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

const WhoWeAre = () => {
  return (
    <div className="py-20 flex max-md:flex-col-reverse relative" id="about_us">
      <div className="w-[50%] max-md:w-full px-[3%]">
        {/* <h2 className="text-4xl max-md:text-3xl font-bold">
          Qui sommes-nous ?
        </h2> */}
        <div className="italic my-3 capitalize font-semibold [&>*]:my-2">
          <TextRevealByWord text="Agence de Conseil en Communication Globale" />
          <TextRevealByWord text="Conception, Production, Installation des Enseignes et Supports de Visibilité" />
          <TextRevealByWord text="Enseignes Signalétiques Lumineuses et Non-Lumineuses" />
          <TextRevealByWord text="Lettrages 3D Lumineux et Non-Lumineux" />
          <TextRevealByWord text="Impression Grand Format (bâche, vinyle, one way,...)" />
          <TextRevealByWord text="Découpe au Laser des Supports Créatifs (Plexi, Alucobond, bois,...)" />
          <TextRevealByWord text="Affichage Publicitaire" />
        </div>
        {/* <p className="mt-6 text-lg font-semibold">
          Nous croyons en la puissance de l&apos;innovation et de la simplicité.
          Chaque projet est une opportunité de transformer une idée en réalité,
          en repoussant les limites de ce qui est possible.
        </p> */}
      </div>
      <div className="w-[50%] max-md:w-full max-md:mb-4 px-[5%] relative">
        <Slide
          direction="right"
          triggerOnce
          className="sticky top-[20%] right-0"
        >
          <Image
            src="/assets/images/Nous (2) (1).png"
            alt="Madame Mireille Kaimby Tshiyoyo"
            height={239}
            width={239}
            className="w-full object-cover slide-reveal-right transition-all duration-300 sticky top-0 right-0"
            quality={100}
            unoptimized
          />
        </Slide>
      </div>
    </div>
  )
}

export default WhoWeAre
