import './Boton.css'
import PropTypes from 'prop-types'

const teclas = ['C', 'CE', '+/-', '/', '7', '8', '9', 'x', '4', '5', '6', '+', '1', '2', '3', '-', '0', '%', '.', '=']

const Boton = ({ agregarNum }) => (
    <div>
        <div className="contenedor">
            {
                teclas.map((tecla) => (
                    (tecla !== '=')
                        ? (
                            <button key={tecla} type="button" className="Boton-gris" onClick={() => { agregarNum(tecla) }}>
                                <div className="texto">{tecla}</div>
                            </button>
                        )
                        : (
                            <button key={tecla} type="button" className="Boton-naranja" onClick={() => { agregarNum(tecla) }}>
                                <div className="texto">{tecla}</div>
                            </button>
                        )
                ))
            }
        </div>
    </div>
)

Boton.propTypes = { agregarNum: PropTypes.func.isRequired }

export default Boton
