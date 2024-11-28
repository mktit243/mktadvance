import MainHeader from "@/components/shared/header/main_header"
import Footer from "../(home)/components/footer"
import WhatsappBubble from "../(home)/components/whatsapp_bubble"
import { getPhotos, getProjects } from "../(home)/utils/projects"
import GalleriesComponent, { GalleryItem } from "./galleries"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MktAdvance - Gallérie",
}

const Page = async () => {
  const projects = await getProjects()
  const photos = await getPhotos()
  const items1: GalleryItem[] = projects.map((project) => ({
    src: project.image,
    caption: project.caption,
    isSelected: false,
    width: project.width,
    height: project.height,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>{project.caption}</div>
      </div>
    ),
  }))

  const items2: GalleryItem[] = photos.map((photo) => ({
    src: photo.image,
    caption: photo.caption,
    isSelected: false,
    width: photo.width,
    height: photo.height,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>{photo.caption}</div>
      </div>
    ),
  }))

  const items = [...items1, ...items2]

  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">Gallerie</h1>
      </MainHeader>
      <GalleriesComponent items={items} />
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
