import "./styles/theme.css"
import "./styles/global.css"
import { CardAtivo } from "./components/cardAtivo.tsx"

export function App(){
  return(
    <div className="container">

      <h1>💰 Meu Portfólio 2026</h1>

      <div className="grid">

        <CardAtivo titulo="Bitcoin (BTC) 🚀">
          <p>Preço: R$ 350.000,00</p>
          <span style={{color:"var(--alta)"}}>+5.2% hoje</span>
        </CardAtivo>

        <CardAtivo titulo="Fundo Imobiliário (HGLG11) 🏢">
          <p>Dividendo: R$ 1,10</p>
          <span style={{color:"var(--alta)"}}>Rendimento estável</span>
        </CardAtivo>

        <CardAtivo titulo="Empresa X (VALE3) 📉">
          <p>Preço: R$ 65,20</p>
          <span style={{color:"var(--baixa)"}}>-1.8% hoje</span>
        </CardAtivo>

      </div>
    </div>
  )
}

