"use client"

import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "../../../components/ui/badge"
import { TextReveal } from "../../../components/ui/text-reveal"
import { Building2, Megaphone, Lightbulb, Printer, Scissors, Layers, PanelTop } from "lucide-react"

const WhoWeAre = () => {
  // Service items with icons for better visual representation
  const services = [
    {
      title: "AGENCE DE CONSEIL EN COMMUNICATION GLOBALE",
      icon: <Building2 className="h-5 w-5" />,
      color: "from-blue-600 to-indigo-600",
      gradientFrom: "#3b82f6",
      gradientTo: "#4f46e5"
    },
    {
      title: "CONCEPTION PRODUCTION, INSTALLATION DES ENSEIGNES ET SUPPORTS DE VISIBILITE",
      icon: <Megaphone className="h-5 w-5" />,
      color: "from-indigo-600 to-purple-600",
      gradientFrom: "#4f46e5",
      gradientTo: "#9333ea"
    },
    {
      title: "ENSEIGNES SIGNALETIQUES LUMINEUSES ET NON-LUMINEUSES",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "from-purple-600 to-pink-600",
      gradientFrom: "#9333ea",
      gradientTo: "#ec4899"
    },
    {
      title: "LETTRAGES 3D LUMINEUX ET NON-LUMINEUX",
      icon: <Layers className="h-5 w-5" />,
      color: "from-pink-600 to-red-600",
      gradientFrom: "#ec4899",
      gradientTo: "#dc2626"
    },
    {
      title: "IMPRESSION GRAND FORMAT (Bâche, Vinyle, One Way,...)",
      icon: <Printer className="h-5 w-5" />,
      color: "from-red-600 to-orange-600",
      gradientFrom: "#dc2626",
      gradientTo: "#ea580c"
    },
    {
      title: "DECOUPE AU LASER DES SUPPORTS CREATIFS (Plexi, Alucobonde, bois,...)",
      icon: <Scissors className="h-5 w-5" />,
      color: "from-orange-600 to-yellow-600",
      gradientFrom: "#ea580c",
      gradientTo: "#ca8a04"
    },
    {
      title: "AFFICHAGE PUBLICITAIRE",
      icon: <PanelTop className="h-5 w-5" />,
      color: "from-yellow-600 to-blue-600",
      gradientFrom: "#ca8a04",
      gradientTo: "#3b82f6"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white" id="about_us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm font-medium" revealAnimation={true}>
            Qui Sommes-Nous
          </Badge>
          <TextReveal 
            text="Votre Partenaire en Communication Visuelle"
            className="text-4xl font-bold tracking-tight mb-4"
            animationType="gradient"
            gradientFrom="#3b82f6"
            gradientTo="#8b5cf6"
            duration={0.8}
            delay={0.2}
            as="h2"
          />
          <TextReveal 
            text="MKT Advance est une agence de communication globale spécialisée dans la conception et la production de solutions visuelles innovantes pour renforcer votre image de marque."
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            animationType="slide-up"
            duration={0.6}
            delay={0.4}
            as="p"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.div 
                      className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border-l-4 hover:border-l-8 transition-all duration-300"
                      style={{ borderLeftColor: `rgb(${index % 2 ? '79, 70, 229' : '37, 99, 235'})` }}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex items-start">
                        <div className={`flex items-center justify-center rounded-full p-3 mr-4 bg-gradient-to-r ${service.color} text-white`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <TextReveal 
                            text={service.title}
                            className="font-semibold"
                            animationType="gradient"
                            gradientFrom={service.gradientFrom}
                            gradientTo={service.gradientTo}
                            duration={0.5}
                            delay={0.1 + index * 0.05}
                            as="p"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Slide direction="right" triggerOnce>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden relative group"
                >
                  <motion.div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 transition duration-1000 group-hover:opacity-50"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/images/Nous (2) (1).png"
                      alt="Madame Mireille Kaimby Tshiyoyo"
                      height={500}
                      width={500}
                      className="w-full object-cover transition-all duration-300"
                      quality={100}
                      unoptimized
                    />
                    {/* <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <TextReveal 
                        text="Madame Mireille Kaimby Tshiyoyo"
                        className="text-white text-xl font-bold"
                        animationType="slide-up"
                        duration={0.5}
                        delay={0.7}
                        as="h3"
                      />
                      <TextReveal 
                        text="Fondatrice & Directrice"
                        className="text-white/80 text-sm"
                        animationType="fade"
                        duration={0.5}
                        delay={0.9}
                        as="p"
                      />
                    </motion.div> */}
                  </div>
                </motion.div>
              </Slide>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
