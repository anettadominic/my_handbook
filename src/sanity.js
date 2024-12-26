// import { createClient, groq } from 'next-sanity'

import { createClient } from "@sanity/client" 
import createImageUrlBuilder from '@sanity/image-url'


// const projectId = process.env.SANITY_PROJECT_ID 
// const dataset = process.env.SANITY_DATASET 
// const apiVersion = process.env.SANITY_API_VERSION 
 
const client = {
    projectId:'v8ll9v8l',
    dataset:'production',
    apiVersion:'2022-03-07', // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
}


export const sanityClient = createClient(client)


export const urlFor = (source) => createImageUrlBuilder(client).image(source)

