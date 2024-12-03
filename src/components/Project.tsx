import { LuLink, LuGithub } from "react-icons/lu";    

interface ProjectProps {
    img: string,
    alt: string,
    title: string,
    description: string,
    stacks: string[],
    preview?: string,
    code?: string
}

export default function Project({img, alt, title, description, stacks, preview, code}: ProjectProps) {
    return (
        <div className="shadow-xl dark:shadow-neutral-900 rounded-2xl w-[23%]">
            <img src={img} alt={alt} className="w-full h-72 rounded-t-2xl" />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-2">{description}</p>
                <div className="mt-2 flex gap-8">
                    {stacks.map(stack => <div><p>{stack}</p></div>)}
                </div>
                <div className="mt-2 gap-8 flex-1 items-end">
                    {preview &&
                        <a href={preview} className="flex items-center"><LuLink /><p className="ml-2">Ver Demonstação</p></a>
                    }
                    {code &&
                        <a href={code} className="flex items-center"><LuGithub /><p className="ml-2">Ver Código</p></a>
                    }
                </div>
            </div>
        </div>
    )
}