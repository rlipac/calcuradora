import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//hooks
import { useCalculadora } from '../../hooks/useCalculadora';

// stylos globales
import { styles } from '../theme/appTheme';
// component
import BotonCalcu from '../components/BotonCalcu';



const CalculadoraScreen = () => {


   const { // ? recibimos las funciones
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
   } = useCalculadora();

    return (
        <View
            style={styles.caluladoraContainer}
        >{
                (
                    numeroAnterior !== '0' && <Text style={styles.resultadoPreview}>{numeroAnterior}</Text>

                )
            }

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>


            {/* fila de botones */}
            <View style={styles.fila}>

                <BotonCalcu valor='C' color='#9B9B9B' accion={calcuReset} />
                <BotonCalcu valor='+/-' color='#9B9B9B' accion={positionNegativo} />
                <BotonCalcu valor='Del' color='#9B9B9B' accion={botonDel} />
                <BotonCalcu valor='/' color='#FF9427' accion={btnDividir} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>

                <BotonCalcu valor='7' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='8' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='9' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='x' color='#FF9427' accion={btnMultiplicar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>

                <BotonCalcu valor='4' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='5' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='6' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='-' color='#FF9427' accion={btnRestar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>

                <BotonCalcu valor='1' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='2' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='3' color='#9B9B9B' accion={armarNumero} />
                <BotonCalcu valor='+' color='#FF9427' accion={btnSumar} />

            </View>

            {/* fila de botones */}
            <View style={styles.fila}>

                <BotonCalcu valor='0' color='#9B9B9B' accion={armarNumero} ancho={180} />
                <BotonCalcu valor='.' color='#9B9B9B' accion={armarNumero} />

                <BotonCalcu valor='=' color='#FF9427' accion={ calcular } />

            </View>



        </View>
    )
}



export default CalculadoraScreen

