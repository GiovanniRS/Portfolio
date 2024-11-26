import { PiLinkedinLogo, PiGithubLogo, PiInstagramLogo } from "react-icons/pi";

export default function Hero() {
    return(
        <section className="h-screen container mx-auto flex flex-col justify-center">
            <p className="text-4xl font-bold leading-snug">Olá! Eu sou o <br />Giovanni Rodrigues, <br />Desenvolvedor <span className="bg-gradient-to-r from-violet-gr to-pink-gr bg-clip-text text-fill-transparent">FullStack</span> <br />e <span className="bg-gradient-to-r from-violet-gr to-pink-gr bg-clip-text text-fill-transparent">Professor</span></p>
            <div className="flex gap-5">
                <a href="https://br.linkedin.com/in/giovannirodrigues" target="_blank"><PiLinkedinLogo className="text-4xl" /></a>
                <a href="https://github.com/giovannirs" target="_blank"><PiGithubLogo className="text-4xl" /></a>
                <a href="" target="_blank"><PiInstagramLogo className="text-4xl" /></a>
            </div>
        </section>
    )
}