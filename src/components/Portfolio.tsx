import Project from "./Project";
import picture from "../assets/project.png"

export default function Portfolio() {
    return(
        <section id="portfolio" className="py-14">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center">Portfolio</h2>
                <div className="h-1 w-2/3 mx-auto mt-8 bg-gradient-to-r from-violet-gr to-pink-gr rounded-full " />
                <div className="flex justify-between flex-wrap">
                    <Project img={picture} alt="descricao da imagem" title="Project Tile goes here" description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stacks={["Java", "Spring Boot"]} preview="link" code="ink" />
                    <Project img={picture} alt="descricao da imagem" title="Project Tile goes here" description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stacks={["Java", "Spring Boot"]}/>
                    <Project img={picture} alt="descricao da imagem" title="Project Tile goes here" description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stacks={["Java", "Spring Boot"]} preview="link"/>
                    <Project img={picture} alt="descricao da imagem" title="Project Tile goes here" description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" stacks={["Java", "Spring Boot"]} code="ink"/>
                </div>
            </div>
        </section>
    )
}