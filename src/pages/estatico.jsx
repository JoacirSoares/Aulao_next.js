import Layout from '../components/Layout'

export const getStaticProps = async () => {
    const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json()

    return {
        revalidate: 10, // 10 segundos
        props: {
            valor: dados.valor
        }
    }
}

const Estatico = props => {

    return (
        <Layout titulo="Conteúdo Estático">
            <div>
                <h1>Conteúdo Estático</h1>
                <h2>Último valor = {props.valor}</h2>
            </div>
        </Layout>
    )
}

export default Estatico