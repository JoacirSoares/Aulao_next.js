import Layout from "../../../components/Layout"
import { useRouter } from "next/router"

export default function ClienteProCodigo(props) {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}

// Navegação dinâmica
// Precisa que você coloque o arquivo ou pasta entre [] e faço o que está em cima e no pages/index.jsx