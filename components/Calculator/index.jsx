import React, { useState } from 'react';

import './style.css'

import Button from '../Buttons'
import Display from '../Display'

export default function Calculator() {
    const [displayNumber, setDisplayNumber] = useState('');
    let [resultado, setResultado] = useState();
    let [operador, setOperador] = useState();
    function Calculadora(v){

        if(v === 'AC'){ 
            setDisplayNumber('')
            setResultado('')
            setOperador('')
        }
        else if(v === '+'){
            setResultado(displayNumber)
            setOperador('soma')
            setDisplayNumber('')
        }
        else if(v === '-'){
            setResultado(displayNumber)
            setOperador('sub')
            setDisplayNumber('')
        }
        else if(v === '/'){
            setResultado(displayNumber)
            setOperador('div')
            setDisplayNumber('')
        }
        else if(v === '*'){
            setResultado(displayNumber)
            setOperador('mult')
            setDisplayNumber('')
        }
        else if(v === '='){

            if(operador === 'soma'){
                setDisplayNumber(Number(resultado) + Number(displayNumber))
            }
            else if(operador === 'sub'){
                setDisplayNumber(Number(resultado) - Number(displayNumber))
            }
            else if(operador === 'div'){
                setDisplayNumber(Number(resultado) / Number(displayNumber))
            }
            else if(operador === 'mult'){
                setDisplayNumber(Number(resultado) * Number(displayNumber))
            }
            setResultado('')
        }
        else{
            setDisplayNumber(displayNumber + v)
        }
    }

    return (
        <div className="calculator">
            
            <Display value={displayNumber} />
            <Button calcular={Calculadora} triple={'triple'} label="AC" />
            <Button calcular={Calculadora} label={'/'} />
            <Button calcular={Calculadora} label={'7'} />
            <Button calcular={Calculadora} label={'8'} />
            <Button calcular={Calculadora} label={'9'} />
            <Button calcular={Calculadora} label={"*"} />
            <Button calcular={Calculadora} label={'4'} />
            <Button calcular={Calculadora} label={'5'} />
            <Button calcular={Calculadora} label={'6'} />
            <Button calcular={Calculadora} label={"-"} />
            <Button calcular={Calculadora} label={'1'} />
            <Button calcular={Calculadora} label={'2'} />
            <Button calcular={Calculadora} label={'3'} />
            <Button calcular={Calculadora} label={'+'} />
            <Button calcular={Calculadora} double={'double'}label={0} />
            <Button calcular={Calculadora} label={'.'} />
            <Button calcular={Calculadora} label={'='} />
        </div>
    );
}

