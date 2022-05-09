import { useState, useRef, useEffect } from 'react'
import './Calculadora.css'
import Boton from './Boton.jsx'
import Pantalla from './Pantalla.jsx'

const Calculadora = () => {
    const [pantallaview, setPantalla] = useState('')
    const [operacion, setOperacion] = useState(['', '', ''])
    const tam = useRef([0, 0])

    const Calcular = () => {
        if (operacion[2] !== '') {
            console.log(operacion)
            if (operacion[1] === '-') {
                const respuesta = parseFloat(operacion[0], 10) - parseFloat(operacion[2], 10)
                setPantalla(respuesta, '')
                setOperacion(['', '', ''])
            }

            if (operacion[1] === '+') {
                const respuesta = parseFloat(operacion[0], 10) + parseFloat(operacion[2], 10)
                setPantalla(respuesta, '')
                setOperacion(['', '', ''])
            }

            if (operacion[1] === 'x') {
                const respuesta = parseFloat(operacion[0], 10) * parseFloat(operacion[2], 10)
                setPantalla(respuesta, '')
                setOperacion(['', '', ''])
            }

            if (operacion[1] === '%') {
                const respuesta = parseFloat(operacion[0], 10) % parseFloat(operacion[2], 10)
                setPantalla(respuesta, '')
                setOperacion(['', '', ''])
            }
        }
    }

    useEffect(() => {
        Calcular()
    }, [pantallaview])

    const agregarNum = ((num) => {
        if (tam.current[0] < 9 && '0123456789'.includes(num)) {
            setPantalla(pantallaview + num)
            tam.current[0] += 1
        } else if (num === '.' && tam.current[1] === 0) {
            setPantalla(pantallaview + num)
            tam.current[1] += 1
        } else if ('x+-%'.includes(num) && operacion[0] === '') {
            setOperacion([pantallaview, num, ''])
            setPantalla('')
            tam.current[0] = 0
            tam.current[1] = 0
        } else if (num === '=' && operacion[0] !== '') {
            setOperacion([operacion[0], operacion[1], pantallaview])
            setPantalla('')
            tam.current[0] = 0
            tam.current[1] = 0
        } else if (num === 'C') {
            setPantalla('')
        } else if (num === 'CE') {
            setOperacion(['', '', ''])
            setPantalla('')
        }
    })

    return (
        <div className="cuerpo">
            <Pantalla pantallaview={pantallaview} />
            <Boton agregarNum={agregarNum} />
        </div>
    )
}
export default Calculadora
