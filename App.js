import { View, Text } from 'react-native'
import React,{useState, useEffect} from 'react'
import Splash from './src/Splash/Splash'
import Login from './src/Login/Login'
import { createStackNavigator } from '@react-navigation/stack';
import News from './src/News/News'
import Home from './src/Home/Home'  
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
   
const App = () => {
  const [Token, setToken] = useState('')
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('Token')
        const Token = JSON.parse(jsonValue)
        setToken(Token)
        setLoading(false)
      } catch(e) {
        // error reading value
        console.log(e)
      }
    }
    getData()
  }, [])
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
          {Loading ? (
            <Stack.Screen name="Splash" component={Splash} 
                options={{
                  headerShown:false
                }}
            />
          ) :  (
            <>
              <Stack.Screen name="Login" component={Login} 
                  options={{
                    headerShown:false
                  }}
                  />
              <Stack.Screen name="Home" component={Home} 
                  options={{
                    headerShown:false
                  }}
                  />
              <Stack.Screen name="News" component={News} 
                  options={{
                    headerShown:false
                  }}
                  />
              </>
          )}
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App
