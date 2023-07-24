import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type podcastT = {
    id: string,
    artist: string,
    review: string,
    [img: string]: string | StaticImport,
    soundlink: string
}
