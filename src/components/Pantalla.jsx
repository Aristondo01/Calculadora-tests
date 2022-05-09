import './Pantalla.css'
import PropTypes from 'prop-types'

const Pantalla = ({ pantallaview }) => (
    <div className="vidrio">
        <div className="texto-vidrio">{pantallaview}</div>
    </div>
)

Pantalla.propTypes = { pantallaview: PropTypes.string.isRequired }
export default Pantalla
