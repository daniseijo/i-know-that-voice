import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trimParagraph(text: string, maxCharacters: number, ending = '...') {
  let trimmedStr = text.slice(0, maxCharacters)
  trimmedStr = trimmedStr.slice(0, trimmedStr.lastIndexOf(' '))

  if (trimmedStr.length < text.length) {
    trimmedStr += ending
  }

  return trimmedStr
}
