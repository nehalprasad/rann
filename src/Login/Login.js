import { Dimensions, StyleSheet, Text, TextInput,Button, View, Image,TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {GoogleSignin,} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window')


const Login = () => {
    const navigation = useNavigation();
    GoogleSignin.configure({
        webClientId: '1096006915408-odrtejkpkvi94jj2j6cf6ilbj07nkeru.apps.googleusercontent.com',
      });

    async function onGoogleButtonPress() {
        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
          
            // Create as Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // console.log(googleCredential)
            try {
                const jsonValue  = JSON.stringify(googleCredential.token)
                await AsyncStorage.setItem('Token', jsonValue )
                // console.log(jsonValue)
              } catch (e) {
              }
            
            auth().signInWithCredential(googleCredential);
            return navigation.navigate("Home")
        } catch (error) {
            console.log(error)
            Alert.alert("Sign In Failed By User")
        }
      }

  return (
        <View style={styles.Main}>
            {/* <View>
                <TextInput
                        style={styles.Input}
                        placeholder='Email or Mobile Number'
                        />
                <TextInput
                        placeholder='Password'
                        style={styles.Input}
                        />        
            </View> */}

{/* <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    /> */}

                <TouchableWithoutFeedback onPress={onGoogleButtonPress}>
                <LinearGradient 
                                colors={[ '#142850','#01addb' ]} 
                                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                style={styles.LinearGradient}>
                        <Image source={require('../Images/google.png')}
                                style={{height:40, width:40, }}
                                />
                        <Text style={styles.Login}>Sign In with Google</Text>
                </LinearGradient> 
                </TouchableWithoutFeedback> 
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    Main:{
        height, 
        width, 
        backgroundColor:'white', 
        justifyContent:'center', 
        alignItems:'center'
    },
    Login:{
        color:'#fff', 
        borderRadius:25, 
        textAlign:'center',
        fontSize:14,
        padding:12,
        letterSpacing:2,
        fontFamily:'Poppins-Black',
        },
    LinearGradient:{
        marginTop:'20%', 
        width:width/1.1, 
        alignSelf:'center',
        borderRadius:25,
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
      },
    Input:{
            borderWidth:0.2, 
            width:width-50,
            fontSize:14,
            marginTop:5,
            fontFamily:'Poppins-Regular',
            color:'black',
            borderRadius:5,
            paddingLeft:20
    }
})