import { client } from "@/sanity/lib/client"

export type MktInfo = {
  _id: string
  phone: string
  email: string
  address: string
  city: string
  coor: { lat?: number; long?: number }
  fb?: string
  insta?: string
  linkedin?: string
}

export const getInfo = async (): Promise<MktInfo> => {
  const query = `*[_type == "info" && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0] {
      _id,
      phone,
      email,
      address,
      city,
      coor,
      fb,
      insta,
      linkedin,
    }`

  const info = await client.fetch(query, undefined, {
    next: { revalidate: 60 * 60 },
  })

  return { ...info, coor: { lat: info?.coor?.[0], long: info?.coor?.[1] } }
}
