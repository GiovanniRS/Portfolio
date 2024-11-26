import { LuLinkedin, LuGithub, LuInstagram, LuChevronDown } from "react-icons/lu";

export default function Hero() {
    return(
        <section className="h-screen container mx-auto flex flex-col justify-center">
            <p className="text-4xl font-bold leading-snug">Olá! Eu sou o <br />Giovanni Rodrigues, <br />Desenvolvedor <span className="bg-gradient-to-r from-violet-gr to-pink-gr bg-clip-text text-fill-transparent">FullStack</span> <br />e <span className="bg-gradient-to-r from-violet-gr to-pink-gr bg-clip-text text-fill-transparent">Professor</span></p>
            <div className="flex gap-5 mt-4">
                <a href="https://br.linkedin.com/in/giovannirodrigues" target="_blank"><LuLinkedin className="text-3xl" /></a>
                <a href="https://github.com/giovannirs" target="_blank"><LuGithub className="text-3xl" /></a>
                <a href="https://www.instagram.com/gir0drigues/" target="_blank"><LuInstagram className="text-3xl" /></a>
            </div>
            <div className="flex justify-center">
                <LuChevronDown className="text-3xl absolute bottom-10 arrow-scroll" />
            </div>
        </section>
    )
}