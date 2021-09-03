import Navegador from '../components/Navegador'
import styles from '../styles/Navegador.module.css'

export default function Inicio() {
  return (
    <div className={styles.navIndex}>
      <Navegador destino="/estiloso" nomeLink="Estiloso" cor="black"/>
      <Navegador destino="/exemplo" nomeLink="Exemplo" cor="#9400d3"/>
      <Navegador destino="/jsx" nomeLink="Jsx" cor="crimson"/>
      <Navegador destino="/navegacao" nomeLink="Navegação #01" cor="#a07a4a"/>
      <Navegador destino="/cliente/sp/123" nomeLink="Navegação #02" cor="green"/>
      <Navegador destino="/estado" nomeLink="Componente com Estado" cor="blue"/>
      <Navegador destino="/integracao_1" nomeLink="Integração com API #01" cor="#a45b71"/>
      <Navegador destino="/estatico" nomeLink="Estatico" cor="#42a9a9"/>
    </div>
  )
}

// Para resolver os problemas do proprio "npx create-next-app nomeDoArquivo" acesse 
// https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel

// E depois faça:

// 1° Exclua a pasta node_modules 
// 2° Dê um npm i react-scripts 
// 3° Dê um npm i
// 4° Dê um npm run dev
// 5° Em outro console coloque npm run build
// 6° Pare o npm run dev
// 7° Dê um npm start