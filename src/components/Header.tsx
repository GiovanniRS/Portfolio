import { PiGearSix } from "react-icons/pi";

export default function Header(){
    return(
        <header className="w-full bg-white dark:bg-neutral-950 shadow-md dark:shadow-neutral-900 absolute">
            <div className="container mx-auto py-4 flex justify-between items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-gr to-pink-gr bg-clip-text text-fill-transparent">&lt;GIO&frasl;&gt;</h1>
                <nav className="flex items-center">
                    <a href="#sobre" className="px-4">Sobre</a>
                    <a href="#portfolio" className="px-4">Portfolio</a>
                    <a href="#contato" className="px-4">Contato</a>
                    <a href="#area-do-aluno" className="px-4">Area do Aluno</a>
                    <button><PiGearSix className="text-xl" /></button>
                </nav>
            </div>
        </header>
    )
}