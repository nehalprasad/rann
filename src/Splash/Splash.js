import { 
        Dimensions, 
        ImageBackground, 
        StyleSheet, 
        Text, 
        View 
        } from 'react-native'
import React from 'react'
import MainLogo from '../Images/MainLogo.png'
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window')

const Splash = () => {
  return (
    <View style={styles.Main}>
        <ImageBackground
            source={MainLogo}
            style={styles.Background}
            />
        <View style={{marginTop:'10%'}}>
        <Progress.Bar 
                    indeterminateAnimationDuration={2000}
                    indeterminate={true}
                    width={width-50} 
                    animated={true}
                    color={'#01addb'}
                    unfilledColor={"white"}
                    borderWidth={0.2}
                    borderColor={"#eeeeee"}
                    height={4}
                    />    
        </View>    
    </View>
  )
}

export default Splash
const styles = StyleSheet.create({
    Main:{
            height, 
            width, 
            backgroundColor:'white', 
            justifyContent:'center', 
            alignItems:'center'
        },
    Background:{
                height:height/5, 
                width:width-50
            }
})