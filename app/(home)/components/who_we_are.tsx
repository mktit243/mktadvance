"use client"

import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal"
import { motion } from "framer-motion"

const WhoWeAre = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white" id="about_us">
      <div className="container mx-auto flex max-md:flex-col-reverse gap-8">
        <motion.div 
          className="w-[50%] max-md:w-full px-[5%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Fade cascade damping={0.2}>
            <div className="space-y-6">
              {[
                "AGENCE DE CONSEIL EN COMMUNICATION GLOBALE",
                "CONCEPTION PRODUCTION, INSTALLATION DES ENSEIGNES ET SUPPORTS DE VISIBILITE",
                "ENSEIGNES SIGNALETIQUES LUMINEUSES ET NON-LUMINEUSES",
                "LETTRAGES 3D LUMINEUX ET NON-LUMINEUX",
                "IMPRESSION GRAND FORMAT (Bâche, Vinyle, One Way,...)",
                "DECOUPE AU LASER DES SUPPORTS CREATIFS (Plexi, Alucobonde, bois,...)",
                "AFFICHAGE PUBLICITAIRE"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="italic text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </Fade>
        </motion.div>
        <div className="w-[50%] max-md:w-full max-md:mb-4 px-[5%]">
          <Slide direction="right" triggerOnce>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/images/Nous (2) (1).png"
                alt="Madame Mireille Kaimby Tshiyoyo"
                height={239}
                width={239}
                className="w-full object-cover transition-all duration-300"
                quality={100}
                unoptimized
              />
            </motion.div>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
