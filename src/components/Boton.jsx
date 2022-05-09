import './Boton.css'
import PropTypes from 'prop-types'

const teclas = ['7', '8', '9', 'x', '4', '5', '6', '+', '1', '2', '3', '-', '0', '%', '.', '=']

const Boton = ({ agregarNum }) => (
    <div>
        <div className="borrar">
            <button key="Ce" type="button" className="Boton-gris-grande" onClick={() => { agregarNum('CE') }}>
                <div className="texto">CE</div>
            </button>
            <button key="C" type="button" className="Boton-gris-grande" onClick={() => { agregarNum('C') }}>
                <div className="texto">C</div>
            </button>
        </div>
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
