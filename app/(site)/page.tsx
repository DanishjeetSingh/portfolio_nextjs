import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {

  const projects = await getProjects()

  return (
    <div>
      <h1 className="text-7xl font-semibold">Hi I&apos;m <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Danish</span>!</h1>

      <p className="mt-3 text-xl text-gray-300">
        Full Stack Web Developer and Research Assistant at OSoMe@IU
      </p>

      <h2 className="mt-24 font-bold text-gray-200 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
          key={project._id} 
          href={`/projects/${project.slug}`}
          className="border-2 border-slate-700 rounded-lg  bg-slate-900 bg-opacity-50 hover:scale-105 hover:border-blue-800 hover:bg-opacity-80 transition">
            {project.image &&(
              <Image
                src={project.image}
                alt={project.alt}
                width={750}
                height={300}
                className="object-cover p-1 rounded-t-md border-gray-600 bg-gray-900 bg-opacity-50 border-b-2
                hover:border-red-600 hover:bg-gray-800 hover:bg-opacity-75 transition"
              />
            )}
            <div className=" aligm-middle font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent p-2">
              {project.name}
            </div>
            
          </Link>
        ))}
      </div>
      
    </div>
  )
}
