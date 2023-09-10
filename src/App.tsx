import { useState, FormEvent } from 'react'
import LogoImg from './assets/logo.png'
import './App.css'

// Calculo:  alcool / gasolina
// Se o resultador for menor que 0.7 compensa usar alcool

interface InfoProps {
    title: string;
    gasolina: string | number;
    alcool: string | number;
}

function App() {
    const [gasolinaInput, setGasolinaInput] = useState(5.83)
    const [alcoolInput, setAlcoolInput] = useState(3.93)
    const [info, setInfo] = useState();

    function calcular(event: FormEvent) {
        event.preventDefault();

        let calculo = (alcoolInput / gasolinaInput)

        if (calculo <= 0.7) {
            setInfo({
                title: 'Compensa usar álcool!',
                gasolina: gasolinaInput,
                alcool: alcoolInput
            })
        } else {
            setInfo({
                title: 'Compensa usar gasolina!',
                gasolina: gasolinaInput,
                alcool: alcoolInput
            })
        }
    }

    return (
        <div>
            <main className='container'>

                <img
                    src={LogoImg}
                    alt='LogoCalc'
                />
                <h1 className='title'>Qual a melhor opção?</h1>

                <form className='form' onSubmit={calcular}>
                    <label>Gasolina (preço por litro):</label>
                    <input
                        className='input'
                        type='number'
                        placeholder='5,87'
                        min='1'
                        step='0.01'
                        required
                        value={gasolinaInput}
                        onChange={(e) => setGasolinaInput(Number(e.target.value))}
                    />

                    <label>Álcool (preço por litro):</label>
                    <input
                        className='input'
                        type='number'
                        placeholder='3,93'
                        min='1'
                        step='0.01'
                        required
                        value={alcoolInput}
                        onChange={(e) => setAlcoolInput(Number(e.target.value))}
                    />

                    <input className="button" type='submit' value="Calcular" />

                </form>

                {info && Object.keys(info).length > 0 && (
                    <section className='result'>
                        <h2 className='result-title'>{info.title}</h2>
                        <span>Álcool R${info.alcool}</span>
                        <span>Gasolina R${info.gasolina}</span>
                    </section>
                )}

            </main>
        </div>
    )
}

export default App
