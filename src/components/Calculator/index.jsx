import React, { useState } from 'react';

import './style.css'

import Button from '../Buttons'
import Display from '../Display'

export default function Calculator() {
    const [displayNumber, setDisplayNumber] = useState('');
    let [resultado, setResultado] = useState([]);
    function Calculadora(v){

        if(v === 'AC'){ 
            setDisplayNumber('')
            setResultado([])
        }
        else if(v === '='){
            setDisplayNumber(resultado[0] * resultado[2])
        }
        else{
            setDisplayNumber(displayNumber + v)
            resultado.push(v)
        }
    }

    return (
        <div className="calculator">
            <p>{resultado}</p>
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

