import Footer from "@/app/(home)/components/footer"
import WhatsappBubble from "@/app/(home)/components/whatsapp_bubble"
import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import { Metadata } from "next"
import Image from "next/image"
import { TypedObject } from "sanity"

type CodeBlock = {
  value: {
    language: string
    code: string
  }
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = await getServiceBySlug(slug)

  return {
    title: service?.title ?? "MKTAdvance",
    openGraph: {
      images: [service?.icon ?? ""],
    },
  }
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const service = await getServiceBySlug(slug)

  const components = {
    types: {
      code: ({ value }: CodeBlock) => (
        <pre data-language={value.language}>
          <code>{value.code}</code>
        </pre>
      ),
    },
  }

  return (
    <main>
      <MainHeader>
        <h1 className="text-center text-white text-4xl font-bold">
          {service?.title}
        </h1>
      </MainHeader>
      <div className="p-[5%]">
        <h2 className="text-3xl font-bold">{service?.title}</h2>
        <blockquote className="my-4 italic border-s-4 p-4 border-red-300 bg-gray-50 leading-relaxed">
          {service?.description}
        </blockquote>
        <div className="my-6 px-[5%] flex items-center justify-center">
          {Boolean(service?.image) && (
            <Image
              src={urlFor(service!.image!).url()}
              alt={service!.title}
              width={1240}
              height={900}
              className="w-[80dvw] max-h-[60dvh] object-contain"
            />
          )}
        </div>
        <div className="my-6 px-[5%] flex flex-col items-start justify-center">
          <PortableText
            value={service?.content as TypedObject[]}
            components={components}
          />
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
