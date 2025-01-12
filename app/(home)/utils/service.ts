import { client } from "@/sanity/lib/client"

export type Service = {
  _id: string
  title: string
  slug: { current: string }
  icon: string
  description: string
  content?: unknown
  image?: unknown
}

export const getServices = async (): Promise<Service[]> => {
  const query = `*[_type == "service"] | order(position asc) {
      _id,
      title,
      slug,
      icon,
      description
    }`

  const services = await client.fetch(query, undefined, {
    next: { revalidate: 60 * 60 },
  })

  return services
}

export const getServiceBySlug = async (
  slug: string,
): Promise<Service | null> => {
  const query = `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      icon,
      description,
      content,
      image,
    }`

  const service = await client.fetch(
    query,
    { slug },
    {
      next: { revalidate: 0 },
    },
  )

  return service || null // Return null if no service is found
}
