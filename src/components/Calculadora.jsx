import { useState, useEffect, useCallback } from 'react'
import './Calculadora.css'
import Boton from './Boton.jsx'
import Pantalla from './Pantalla.jsx'

const Calculadora = () => {
    const [pantallaview, setPantalla] = useState('')
    const [operacion, setOperacion] = useState(['', '', '', false])

    const Calcular = () => {
        if (operacion[3] && operacion[0] !== '' && operacion[2] !== '') {
            if (operacion[1] === '-') {
                const respuesta = parseFloat(operacion[0], 10) - parseFloat(operacion[2], 10)
                if (respuesta > 999999999) {
                    setPantalla('Error')
                } else {
                    setPantalla(respuesta.toString())
                }
                if (operacion[4] !== '=') {
                    setOperacion([respuesta.toString(), operacion[4], '', false])
                } else {
                    setOperacion([respuesta.toString(), '', '', false])
                }
            }

            if (operacion[1] === '+') {
                const respuesta = parseFloat(operacion[0], 10) + parseFloat(operacion[2], 10)
                if (respuesta > 999999999) {
                    setPantalla('Error')
                } else {
                    setPantalla(respuesta.toString())
                }
                if (operacion[4] !== '=') {
                    setOperacion([respuesta.toString(), operacion[4], '', false])
                } else {
                    setOperacion([respuesta.toString(), '', '', false])
                }
            }

            if (operacion[1] === 'x') {
                const respuesta = parseFloat(operacion[0], 10) * parseFloat(operacion[2], 10)
                if (respuesta > 999999999) {
                    setPantalla('Error')
                } else {
                    setPantalla(respuesta.toString())
                }
                if (operacion[4] !== '=') {
                    setOperacion([respuesta.toString(), operacion[4], '', false])
                } else {
                    setOperacion([respuesta.toString(), '', '', false])
                }
            }

            if (operacion[1] === '%') {
                const respuesta = parseFloat(operacion[0], 10) % parseFloat(operacion[2], 10)
                if (respuesta > 999999999) {
                    setPantalla('Error')
                } else {
                    setPantalla(respuesta.toString(), '')
                }
                if (operacion[4] !== '=') {
                    setOperacion([respuesta.toString(), operacion[4], '', false])
                } else {
                    setOperacion([respuesta.toString(), '', '', false])
                }
            }

            if (operacion[1] === '/') {
                const respuesta = parseFloat(operacion[0], 10) / parseFloat(operacion[2], 10)
                if (respuesta > 0.00000009 && respuesta > 999999999) {
                    setPantalla('Error')
                } else {
                    setPantalla(respuesta.toString().substring(0, 9))
                }
                if (operacion[4] !== '=') {
                    setOperacion([respuesta.toString().substring(0, 9), operacion[4], '', false])
                } else {
                    setOperacion([respuesta.toString().substring(0, 9), '', '', false])
                }
            }
        }
    }

    useEffect(() => {
        Calcular()
    }, [pantallaview])

    const agregarNum = useCallback((num) => {
        if ('0123456789'.includes(num)) {
            if (operacion[1] === '' && `${operacion[0]}`.length < 9) {
                setOperacion([operacion[0] + num, '', '', false])
                setPantalla(operacion[0] + num)
            } else if (operacion[1] !== '' && `${operacion[2]}`.length < 9) {
                setOperacion([operacion[0], operacion[1], operacion[2] + num, false])
                setPantalla(operacion[2] + num)
            }
        } else if (num === '.' && !pantallaview.includes('.')) {
            setPantalla(pantallaview + num)
            if (operacion[1] === '') {
                setOperacion([operacion[0] + num, '', '', false])
            } else {
                setOperacion([operacion[0], operacion[1], operacion[2] + num, false])
            }
        } else if ('x+-%/'.includes(num) && operacion[1] === '') {
            setOperacion([operacion[0], num, operacion[2], false, '#'])
        } else if ('x+-%=/'.includes(num) && operacion[1] !== '') {
            setOperacion([operacion[0], operacion[1], operacion[2], true, num])
            setPantalla('')
        } else if (num === 'C') {
            setPantalla('')
            if (operacion[1] === '') {
                setOperacion(['', '', '', false])
            } else {
                setOperacion([operacion[0], operacion[1], '', false])
            }
        } else if (num === 'CE') {
            setOperacion(['', '', '', false])
            setPantalla('')
        } else if (num === '+/-' && `${pantallaview}`.length < 8) {
            if (operacion[2] === '') {
                setOperacion([-1 * parseFloat(operacion[0], 10), operacion[1], '', false, num])
                setPantalla((-1 * parseFloat(operacion[0], 10)).toString())
            } else {
                setOperacion([operacion[0], operacion[1], `-${operacion[1]}`, false, num])
                setPantalla((-1 * parseFloat(operacion[2], 10)).toString())
            }
        }
    }, [operacion])

    return (
        <div className="cuerpo">
            <Pantalla pantallaview={pantallaview} />
            <Boton agregarNum={agregarNum} />
        </div>
    )
}
export default Calculadora
