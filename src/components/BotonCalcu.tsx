import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

interface Props { // con la interface recibimos el valor que le pasamos al componente
    valor: string;// definimos el tipo de dato
    color?: string; // el ? para que el valor sea opcional
    ancho?: number;
    accion: ( numeroTexto:string ) => void; // ? valor opcional // numeroTexto es el valor que recibe l funcion como parametro //recibimos las funcion en los Props de calculadoraScreen

}

const BotonCalcu = ({ valor, color = '#9B9B9B', ancho = 80 , accion }: Props) => { // de todas maneras definimos el valor del color por defecto
    return (
        <TouchableOpacity style={{
            opacity:0.9
        }}
            onPress={()=> accion(valor)} // la funcion toma como parametro el valor de cada boton
        >
            <View style={{
                ...styles.boton,// se recibe la clase definida //se defines los valores como en una hoja de stylos
                backgroundColor: color, //definimos el color con la variable recibida de los Props
                width: ancho
            }}>
                <Text style={{
                    ...styles.textBoton,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}

                >{valor}</Text>
            </View>
        </TouchableOpacity>

    )
}

export const styles = StyleSheet.create({

    boton: {
        width: 80,
        height: 80,
        backgroundColor: '#57554e',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    textBoton: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default BotonCalcu