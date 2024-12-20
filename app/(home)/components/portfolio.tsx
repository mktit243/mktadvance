"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import Image from "next/image"
import { MouseEventHandler, useMemo, useState } from "react"
import { Zoom } from "react-awesome-reveal"
import { CustomImage, PortfolioCategory } from "../utils/projects"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

// Updated function to support RGBA
const rgbaDataURL = (r: number, g: number, b: number, a: number) => {
  const alpha = Math.round(a * 255) // Convert alpha to a value between 0-255
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, alpha, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

const Porfolio = ({
  portfolios,
  categories,
}: {
  portfolios: CustomImage[]
  categories: PortfolioCategory[]
}) => {
  const [currentCategory, setCurrentCategory] =
    useState<PortfolioCategory | null>(categories[6])

  const projects = useMemo(() => {
    if (currentCategory === null) {
      const uniqueCategories = new Set<string>()
      return portfolios.reduce<CustomImage[]>((acc, portfolio) => {
        const categoryId = portfolio.category[0]?._ref // Assuming there's at least one category
        if (!uniqueCategories.has(categoryId)) {
          const category = categories.find((c) => c._id === categoryId)
          uniqueCategories.add(categoryId)
          acc.push({
            ...portfolio,
            customOverlay: (
              <div className="custom-overlay__caption">
                <h4 className="text-lg font-semibold underline">
                  {category?.name}
                </h4>
                <div>{portfolio.caption}</div>
              </div>
            ),
          })
        }
        return acc
      }, [])
    }
    return portfolios
      .filter((p) =>
        currentCategory === null
          ? true
          : p.category?.map((c) => c._ref).includes(currentCategory._id),
      )
      .map((t) => ({
        ...t,
        customOverlay: (
          <div className="custom-overlay__caption">
            <div>{t.caption}</div>
          </div>
        ),
      }))
  }, [currentCategory, portfolios])

  const [item, setItem] = useState<CustomImage | null>(null)

  const handleClick = (index: number, item: CustomImage) => {
    if (currentCategory === null) {
      const category = categories.find((c) => c._id === item.category[0]._ref)
      if (category) setCurrentCategory(category)
      setItem(item)
    } else {
      setItem(item)
    }
  }
  const handleClose: MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    event.stopPropagation()
    // @ts-expect-error: Should expect tagName
    if (event.target.tagName == "DIV") {
      setItem(null)
    }
  }

  return (
    <section className="mt-6">
      <div className="flex justify-center gap-6 max-md:px-[5%] flex-wrap">
        {categories.map((category) => (
          <Button
            key={category._id}
            className={cn(
              currentCategory === category && "bg-red-500 text-white",
              "transition-all ease-linear duration-100 uppercase",
            )}
            variant="outline"
            onClick={() => setCurrentCategory(category)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="my-5">
        {projects.length === 0 && (
          <div>
            <Image
              src="/assets/images/Empty street-bro.svg"
              alt="Vide"
              width={300}
              height={300}
              className="mx-auto"
              unoptimized
            />
            <p className="text-center text-lg mt-3">
              Désolé, aucune photo n&apos;a été trouvé pour la catégorie
              sélectionnée.
            </p>
          </div>
        )}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          <PhotoProvider>
            {projects.map((project, index) => (
              <div
                key={`${index}__${currentCategory?._id}`}
                className="w-full h-full relative cursor-pointer group"
              >
                <div>
                  {currentCategory ? (
                    <PhotoView src={project.image}>
                      <img src={project.image} alt="" />
                    </PhotoView>
                  ) : (
                    <img src={project.image} alt="" onClick={() => handleClick(index, project)} />
                  )}
                </div>

                <div
                  className={cn(
                    "absolute w-full hidden group-hover:block group-hover:scale-105 transition-all ease-linear duration-300",
                  )}
                >
                  {project.customOverlay}
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </section>
  )
}

export default Porfolio
