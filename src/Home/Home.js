import { Dimensions, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, ImageBackground, TouchableHighlight, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import {encode, decode} from 'html-entities';
const {width, height} = Dimensions.get('window')

const Home = ({navigation, route}) => {
    const [Data, setData] = useState()
    const [Loader, setLoader] = useState(false)
    const [BackgroundPage, setBackgroundPage] = useState("1")


    useEffect(() =>{
      var config = {
        method: 'get',
        url: 'https://www.livenewstoday.app/wp-json/wp/v2/posts',
        headers: { }
      };
      axios(config)
      .then((response) => {
        setLoader(true)
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      
    },[])


    

const Demo = (data) =>{
  const News = data.data 
  return(
    <View style={{borderWidth:0.2, marginTop:5, justifyContent:'center',alignItems:'center', width}}>
    <View style={{width:width-40 , justifyContent:'center', alignItems:'center', display:'flex'}}>  
      <TouchableWithoutFeedback onPress={() => navigation.navigate("News", News)}>
            <Text style={{fontFamily:'Poppins-Bold', padding:10}}> {decode(News.title.rendered)} </Text>    
      </TouchableWithoutFeedback>
      </View>
      </View>
    )}
  return (
    <View style={styles.Main}>
      {Loader ? 
          <View style={{marginBottom:20}}>
            <FlatList
                      initialNumToRender={8}
                      windowSize={4}
                      data={Data}
                      keyExtractor={({id}, index) => index}
                      renderItem={({ item }) => {
                      return <Demo data={item} />;
                      }}/> 
          </View>            
                      : 
                    
                        <ActivityIndicator size="large"colors={[ '#142850','#01addb' ]}/>
      }
       
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Main:{
        height, 
        width, 
        backgroundColor:'white', 
        justifyContent:'center', 
        alignItems:'center'
    },
})