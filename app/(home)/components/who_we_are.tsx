"use client"

import Image from "next/image"
import { Slide } from "react-awesome-reveal"

const WhoWeAre = () => {
  return (
    <div className="py-20 flex max-md:flex-col-reverse" id="about_us">
      <div className="w-[50%] max-md:w-full px-[5%]">
        <div className="italic my-3 text-3xl capitalize font-semibold flex flex-col [&>*]:my-5">
          <p>AGENCE DE CONSEIL EN COMMUNICATION GLOBALE</p>
          <p>
            CONCEPTION PRODUCTION, INSTALLATION DES ENSEIGNES ET SUPPORTS DE
            VISIBILITE
          </p>
          <p>ENSEIGNES SIGNALETIQUES LUMINEUSES ET NON-LUMINEUSES </p>
          <p> LETTRAGES 3D LUMINEUX ET NON-LUMINEUX</p>
          <p>IMPRESSION GRAND FORMAT (Bâche, Vinyle, One Way,...)</p>
          <p>
            DECOUPE AU LASER DES SUPPORTS CREATIFS (Plexi, Alucobonde, bois,...)
          </p>
          <p>AFFICHAGE PUBLICITAIRE</p>
        </div>
      </div>
      <div className="w-[50%] max-md:w-full max-md:mb-4 px-[5%]">
        <Slide direction="right" triggerOnce>
          <Image
            src="/assets/images/Nous (2) (1).png"
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

export default WhoWeAre
