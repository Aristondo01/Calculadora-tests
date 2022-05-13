import Calculadora from '../components/Calculadora.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('Dada una operacion', () => {
    it('22+3', async () =>{
        render(<Calculadora/>)
        const element = screen.getByText(/2/)
        const sum = screen.getByText('+')
        const multiply = screen.getByText('x')
        const element2 = screen.getByText(/3/)
        const equals = screen.getByText('=')
        userEvent.click(element)
        userEvent.click(element)
        userEvent.click(sum)
        userEvent.click(element2)
        userEvent.click(equals)
        expect(await screen.findByText(/25/)).toBeInTheDocument()
    })
})


describe('Dada una operacion', () => {
    it('22x3', async () =>{
        render(<Calculadora/>)
        const element = screen.getByText(/2/)
        const sum = screen.getByText('+')
        const multiply = screen.getByText('x')
        const element2 = screen.getByText(/3/)
        const equals = screen.getByText('=')

        userEvent.click(element)
        userEvent.click(element)
        userEvent.click(multiply)
        userEvent.click(element2)
        userEvent.click(equals)
        expect(await screen.findByText(/66/)).toBeInTheDocument()
    })
})