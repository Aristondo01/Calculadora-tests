import './Boton.css'

const teclas = ['7', '8', '9', 'x', '4', '5', '6', '+', '1', '2', '3', '-', '0', '%', ',', '=']

const Boton = () => (
    <div className="contenedor">
        {
            teclas.map((tecla) => (
                (tecla !== '=')
                    ? (
                        <button type="button" className="Boton-gris">
                            <div className="texto">{tecla}</div>
                        </button>
                    )
                    : (
                        <button type="button" className="Boton-naranja">
                            <div className="texto">{tecla}</div>
                        </button>
                    )
            ))
        }
    </div>
)
export default Boton
