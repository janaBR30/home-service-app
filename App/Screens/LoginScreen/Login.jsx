import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Color from '../../Utils/Color'

export default function Login() {
   
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={require('../../../assets/logo.png')} 
        style={styles.loginImage}/>

        <View style={styles.subContainer}>
            <Text style={{fontSize:27, color: Color.WHITE, textAlign: 'center'}} >
                Vamos encontrar Profesionales para sus servicios!
                </Text>

                <TouchableOpacity style={styles.button} onPress={()=>console.log("Button Click")}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize:18, color: Color.PRIMARY }}>Login</Text>
                 </TouchableOpacity>
        </View>
      </View>
      
    )
  
}

const styles = StyleSheet.create({
loginImage: {
    width: 420,
    height:300,
    marginTop:120,

}, 
subContainer:{
    width: 420,
    backgroundColor: Color.PRIMARY, 
    height: '60%',
    marginTop: -20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding: 20
},
button: {
  padding: 15,
  backgroundColor: Color.WHITE,
  borderRadius: 99,
  marginTop: 40,
}
})
