"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const HeroSectionCarousel = ({
  images,
}: {
  images: { image: string; caption: string }[]
}) => {
  return (
    <div className="h-screen z-[-2]">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="overflow-hidden"
      >
        <CarouselContent>
          {images.map((carousel, index) => (
            <CarouselItem key={index}>
              <Image
                src={carousel.image}
                alt={carousel.caption}
                width={860}
                height={1240}
                className="h-screen w-screen object-cover px-0 mx-0"
                unoptimized
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroSectionCarousel
