import foto from "../assets/foto.png"
import hexagono from "../assets/hexagono.svg"

export default function About() {
    return(
        <section className="min-h-screen py-14 bg-slate-50 dark:bg-neutral-900">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center">Sobre</h2>
                <div className="h-1 w-2/3 mx-auto mt-8 bg-gradient-to-r from-violet-gr to-pink-gr rounded-full " />
                <figure className="w-1/3 flex justify-center items-end relative">
                    <img src={foto} alt="" className="w-10/12" />
                    <img src={hexagono} alt="" className="absolute top-0 w-11/12" />
                </figure>
            </div>
        </section>
    )
}