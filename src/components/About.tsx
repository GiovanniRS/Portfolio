import PictureMask from "./PictureMask";

export default function About() {
    return(
        <section className="py-14 bg-slate-50 dark:bg-neutral-900">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center">Sobre</h2>
                <div className="h-1 w-2/3 mx-auto mt-8 bg-gradient-to-r from-violet-gr to-pink-gr rounded-full " />
                <div className="flex items-center">
                    <figure className="w-1/3 flex justify-center items-end relative">
                        <PictureMask />
                    </figure>
                    <div className="w-2/3">
                        <p>Desenvolvedor Full Stack com mais de 6 anos de experiência em criar soluções escaláveis e eficientes. Especializado em <strong>Java (Spring Boot)</strong> e <strong>React (TypeScript)</strong>, com habilidades adicionais em <strong>Python</strong>, <strong>PHP</strong> e <strong>React Native.</strong></p>
                        <p className="mt-2">Atuei em projetos desafiadores, incluindo a criação de um ecossistema completo para gestão universitária, utilizando arquitetura de microserviços e mensageria <strong>(RabbitMQ)</strong>, o que resultou na otimização de processos e agilização da rotina de docentes.</p>
                        <p className="mt-2">Sou apaixonado por novas tecnologias e comprometido com o aprendizado contínuo, buscando sempre entregar resultados de alta qualidade. Acredito firmemente que o trabalho em equipe é fundamental para o sucesso de qualquer projeto.</p>
                        <div className="bg-gradient-to-r from-violet-gr to-pink-gr py-2.5 px-1 mt-6 max-w-fit">
                            <a href="" className="text-white py-2 px-10 hover:text-slate-800 hover:bg-white mr-1 ease-out duration-300">Saiba Mais</a>
                            <a href="" className="bg-white py-2 px-10 hover:text-white hover:bg-transparent ease-out duration-300">Baixar CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}