import { Dimensions, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window')

const News = ({navigation, route}) => {

  const Date = route.params

  const source = {
    html: `${Date.content.rendered}`
  };

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray'
    },
    div:{
      color:'black',
      fontSize:17,
      fontFamily:'Montserrat-Medium',
    },
    img:{
      height:300,
      width:200
    },
    a:{
      fontSize:16,
      color:'blue',
      fontFamily:'Poppins-SemiBold'
    },
  };

  return (
    <ScrollView>
      <View  style={styles.Main}>
        <View style={{width:width-40 , justifyContent:'center', alignItems:'center', display:'flex'}}>  
           <RenderHtml
                    contentWidth={width}
                    source={source ? source : ''}
                    tagsStyles={tagsStyles}
                    />
        </View>
      </View>
    </ScrollView>
  )
}
export default News
const styles = StyleSheet.create({
    Main:{
        width, 
        backgroundColor:'white', 
        justifyContent:'center', 
        alignItems:'center'
    },
})