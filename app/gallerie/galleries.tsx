"use client"

import { useMemo, useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export type GalleryItem = {
  src: string
  caption: string
  alt?: string
  isSelected: false
  width: number
  height: number
  customOverlay?: React.ReactNode
}

const GalleriesComponent = ({ items }: { items: GalleryItem[] }) => {
  const [index, setIndex] = useState(-1)

  const currentImage = useMemo(() => items[index], [index, items])
  const nextIndex = useMemo(() => (index + 1) % items.length, [index, items])
  const nextImage = useMemo(
    () => items[nextIndex] || currentImage,
    [items, currentImage, nextIndex],
  )
  const prevIndex = useMemo(
    () => (index + items.length - 1) % items.length,
    [index, items],
  )
  const prevImage = useMemo(
    () => items[prevIndex] || currentImage,
    [items, currentImage, prevIndex],
  )

  const handleClick = (index: number) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div className="min-h-screen px-[5%] py-[10%]">
      <h1 className="text-3xl font-bold">Gallerie</h1>
      <h3 className="text-md w-1/2">
        Bienvenue dans notre galerie, un espace où chaque image raconte une
        histoire.
      </h3>
      <div className="flex flex-wrap">
        {items.map((item, i) => (
          <button
            key={i}
            className="w-1/4 p-2 group overflow-hidden relative h-fit"
            onClick={() => handleClick(i)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="object-contain group-hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[300%] group-hover:translate-y-0">
              <p className="text-white text-lg text-left p-5 font-bold">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}

export default GalleriesComponent
