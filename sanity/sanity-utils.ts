import { createClient, groq } from "next-sanity";

export async function getProjects(){
    const client = createClient({
        projectId: '8x2djiv4',
        dataset: 'production',
        apiVersion: "2023-05-17",
    });

    return client.fetch(
        groq`*[_type=='project']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )


}