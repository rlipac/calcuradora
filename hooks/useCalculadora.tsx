import React, { useState, useRef } from 'react'


enum Operadores {
    sumar, restar, dividir, multiplicar
}


export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>() // valores provienen de enum


    const calcuReset = () => {
        setNumero('0')
    }
    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // El método startsWith() indica si una cadena de texto comienza con los caracteres de una 
            //cadena de texto concreta, devolviendo true o false según corresponda.
            //Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // evaluar si hay otro cero y otro punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                // evaluar si es diferente de 0  y no tiene punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            } else if (numeroTexto == '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }
    }
    const positionNegativo = () => {
        if (numero.includes('-')) { // si tiene un signo negativo
            setNumero(numero.replace('-', ''));// reempaplacalo por el negativo y concatena con un cadena vacia
        } else {
            setNumero('-' + numero)
        }
    }

    const botonDel = () => {
        // const numeroMenosUnCaracter = numero.substring(0, numero.length - 1);
        // if( numero.startsWith('-') ){
        //     if(numero.length > 2){
        //         setNumero(numeroMenosUnCaracter)  
        //     }else{
        //         setNumero('0');
        //     }
        // }
        // if( !numero.startsWith('-') ){
        //     if( numero.length > 1 ){
        //         setNumero(numeroMenosUnCaracter)
        //     }else{
        //         setNumero('0');
        //     }
        // }

        // ? // otra manera -> la del profesor
        let negativo = '';
        let numeroTemporal = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemporal = numero.substr(1);
        }
        if (numeroTemporal.length > 1) {
            setNumero(negativo + numeroTemporal.slice(0, -1));

        } else {
            setNumero('0');
        }


    }

    const cambiarNumeroAnterior = () => {
        if (numero.endsWith('.')) { //? si numero termina en .
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnSumar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }
    const btnRestar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const calcular = () => {
        const nun1 = Number(numero);
        const nun2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                return setNumero(` ${nun1 + nun2} `); // recibe un string

                break;
            case Operadores.restar:
                return setNumero(` ${nun2 - nun1} `); // recibe un string

                break;
            case Operadores.multiplicar:
                return setNumero(` ${nun1 * nun2} `); // recibe un string

                break;
            case Operadores.dividir:
                if (nun1 !== 0 && nun2 !== 0) {
                    return setNumero(` ${nun2 / nun1} `); // recibe un string
                }
                setNumero('0');



                break;

            default:
                break;
        }
        setNumero('0')

        setNumeroAnterior('0');
    }

    // retornamos todos las variables o funciones requeridad en otros componentes
    return {
        numeroAnterior,
        setNumeroAnterior,
        numero,
        setNumero,
        armarNumero,
        calcuReset,
        positionNegativo,
        botonDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}



