'use client'
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

const ValuesImage = () => {
  return (
    <div className="w-[50%] max-md:w-full">
      <Fade direction="left" triggerOnce>
        <Image
          src="/assets/images/values.jpg"
          alt="Les valeurs de MKTAdvance"
          width={3508}
          height={2480}
        />
      </Fade>
    </div>
  )
}

export default ValuesImage
