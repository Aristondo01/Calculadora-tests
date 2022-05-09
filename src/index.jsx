import { createRoot } from 'react-dom/client'
import Calculadora from './components/Calculadora.jsx'
import './index.css'

const App = () => (

    <div className="indexs">
        <Calculadora />
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
