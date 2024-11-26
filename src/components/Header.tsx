export default function Header(){
    return(
        <header className="container mx-auto py-4 flex justify-between">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-gr to-pink-gr bg-clip-text text-fill-transparent">&lt;GIO&frasl;&gt;</h1>
            <nav>
                <a href="#sobre">Sobre</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contato">Contato</a>
                <a href="#area-do-aluno">Area do Aluno</a>
            </nav>
        </header>
    )
}