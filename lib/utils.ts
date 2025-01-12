import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { PortableTextBlock } from "@portabletext/react"
import type { PortableTextSpan } from "sanity"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugify = (text: string) => {
  if (!text) {
    // generate random text
    const randomText = Math.random().toString(36).slice(2)
    return randomText
  }
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
}

export const extractTextFromPortableTextBlock = (
  block: PortableTextBlock,
): string => {
  return block.children
    .filter(
      (child): child is PortableTextSpan =>
        typeof child === "object" && "_type" in child && "text" in child,
    )
    .map((child) => child.text)
    .join("")
}
