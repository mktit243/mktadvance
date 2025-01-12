import Footer from "@/app/(home)/components/footer"
import WhatsappBubble from "@/app/(home)/components/whatsapp_bubble"
import { getServiceBySlug } from "@/app/(home)/utils/service"
import MainHeader from "@/components/shared/header/main_header"
import { urlFor } from "@/sanity/lib/image"
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react"
import { Metadata } from "next"
import Image from "next/image"
import { TypedObject } from "sanity"
import { toHTML } from "@portabletext/to-html"
import { cn, extractTextFromPortableTextBlock, slugify } from "@/lib/utils"
import Link from "next/link"
import { LinkIcon } from "lucide-react"

type CodeBlock = {
  children: string
}

type HeaderBlock = {
  level: number
  color?: string
  text: string
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
    block: {
      h1: ({
        children,
        value,
      }: {
        children: React.ReactNode
        value: HeaderBlock
      }) => (
        <h1
          id={slugify(value.text)}
          className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-8 mb-4",
            value.color && `text-${value.color}`,
          )}
        >
          {children}
          <Link
            href={`#${slugify(value.text)}`}
            className="opacity-0 hover:opacity-100 ml-2"
          >
            <LinkIcon className="inline w-5 h-5" />
          </Link>
        </h1>
      ),
      h2: ({
        children,
        value,
      }: {
        children: React.ReactNode
        value: HeaderBlock
      }) => (
        <h2
          id={slugify(value.text)}
          className={cn(
            "scroll-m-20 text-3xl font-semibold tracking-tight mt-8 mb-4",
            value.color && `text-${value.color}`,
          )}
        >
          {children}
          <Link
            href={`#${slugify(value.text)}`}
            className="opacity-0 hover:opacity-100 ml-2"
          >
            <LinkIcon className="inline w-5 h-5" />
          </Link>
        </h2>
      ),
      h3: ({
        children,
        value,
      }: {
        children: React.ReactNode
        value: HeaderBlock
      }) => (
        <h3
          id={slugify(value.text)}
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-4",
            value.color && `text-${value.color}`,
          )}
        >
          {children}
          <Link
            href={`#${slugify(value.text)}`}
            className="opacity-0 hover:opacity-100 ml-2"
          >
            <LinkIcon className="inline w-5 h-5" />
          </Link>
        </h3>
      ),
      normal: ({ children }: PortableTextComponentProps<any>) => (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: PortableTextComponentProps<any>) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
      ),
      number: ({ children }: PortableTextComponentProps<any>) => (
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
      ),
    },
    types: {
      image: ({ value }: any) => (
        <div className="relative w-full h-[300px] my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => (
        <strong className="font-semibold">{children}</strong>
      ),
      em: ({ children }: any) => <em className="italic">{children}</em>,
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
        <blockquote className="my-4 italic border-s-4 p-4 border-red-300 bg-gray-50 leading-relaxed font-semibold text-xl">
          {service?.description}
        </blockquote>
        <div className="my-6 px-[15%]">
          {Boolean(service?.image) && (
            <Image
              src={urlFor(service!.image!).url()}
              alt={service!.title}
              width={1240}
              height={900}
            className="max-w-[20dvw] h-max object-contain float-left mr-6 mb-6"
            />
          )}
          <div className="my-6 px-[5%] flex flex-col items-start justify-center text-lg">
            <PortableText
              value={service?.content as TypedObject[]}
              components={components as unknown as any}
            />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsappBubble />
    </main>
  )
}

export default Page
