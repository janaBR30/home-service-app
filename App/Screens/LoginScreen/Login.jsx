import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Color from '../../Utils/Color'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={require('../../../assets/logo.png')} 
        style={styles.loginImage}/>

        <View style={styles.subContainer}>
            <Text style={{fontSize:27, color: Color.WHITE, textAlign: 'center'}} >
                Vamos encontrar Profesionales para sus servicios!
                </Text>

                <TouchableOpacity style={styles.button} onPress={onPress}>
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
