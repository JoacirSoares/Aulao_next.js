import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>Jsx é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: "Joacir", idade: 18})}
            </p>
        </Layout>
    )
}