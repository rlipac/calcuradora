import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black'
        
    },
    caluladoraContainer:{
        flex:1,
       
        justifyContent:'flex-end',
        paddingHorizontal:10,
    },
    resultado:{
        color:'white',
        fontSize:70,
        textAlign:'right',
        marginBottom:10
    },
    resultadoPreview:{
        opacity:0.5,
        // color:'rgba(255,255,255,0.5',
        fontSize:30,
        textAlign:'right'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:18,
        // backgroundColor:'red',
        // paddingHorizontal:10

    },
    boton:{
        width:80,
        height:80,
        backgroundColor:'#57554e',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    textBoton:{
        color:'white',
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold'
    }
})

