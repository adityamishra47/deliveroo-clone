import { SanityClient } from '@sanity/client'
import { createClient } from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

// const client = SanityClient({
//     projectId: "t257d1zl",
//     dataSet: "production",
//     useCdn: true,
//     apiVersion: "2022-03-07"
// })

const client = createClient({
    projectId: "t257d1zl",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export async function fetchRestaurants() {
    const data = await client.fetch(
        `*[_type == 'featured'] {
            ...,
            restaurants[] -> {
              ...,
              category[] -> {
                ...,
              },
              dishes[] -> {
              ...,
              }
            }
        }`,
        {},
        {
            // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
            cache: 'force-cache',
            // next: {tags: ['pages']},
        },
    )
    console.log(data);
    return data
}

export default client;

