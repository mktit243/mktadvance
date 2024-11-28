import Footer from "@/app/(home)/components/footer"
import WhatsappBubble from "@/app/(home)/components/whatsapp_bubble"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { TypedObject } from "sanity"
import { getArticleBySlug } from "./actions/get_article"
import MainHeader from "@/components/shared/header/main_header"
import { Metadata } from "next"

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
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title ?? "MKTAdvance",
    openGraph: {
      images: [article?.image ?? ""],
    },
  }
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const article = await getArticleBySlug(slug)

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
          {article?.title}
        </h1>
      </MainHeader>
      <div className="p-[5%]">
        <h2 className="text-3xl font-bold">{article?.title}</h2>
        <blockquote className="my-4 italic border-s-4 p-4 border-red-300 bg-gray-50 leading-relaxed">
          {article?.description}
        </blockquote>
        <div className="my-6 px-[5%] flex items-center justify-center">
          {Boolean(article?.image) && (
            <Image
              src={urlFor(article!.image!).url()}
              alt={article!.title}
              width={1240}
              height={900}
              className="w-[80dvw] max-h-[300px] object-contain"
            />
          )}
        </div>
        <div className="my-6 px-[5%] flex flex-col items-start justify-center">
          <PortableText
            value={article?.content as TypedObject[]}
            components={components}
          />
        </div>
        <div className="mt-8 mb-6 flex items-center">
          {Boolean(article?.author.avatar) && (
            <Image
              src={urlFor(article!.author.avatar!).url()}
              alt={article?.author.name ?? ""}
              width={60}
              height={60}
              className="h-[40px] w-[40px] object-cover rounded-full"
            />
          )}
          <div className="flex flex-col ml-2">
            <h2 className="text-lg font-bold">{article?.author.name}</h2>
            <p className="text-gray-400">{article?.author.role}</p>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
