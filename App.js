import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { Provider } from "./src/context/BlogContext"
import CreateBlog from './src/screens/CreateBlog'
import Home from './src/screens/Home'
import ShowBlog from './src/screens/ShowBlog'
import EditBlog from './src/screens/EditBlog'
import React from "react";
import { TouchableOpacity } from 'react-native'
import { Feather, EvilIcons } from "@expo/vector-icons"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blog"}}>
        <Stack.Screen 
          name='Home'  
          component={Home} 
          //https://reactnavigation.org/docs/screen-options/
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          }) }
        />
        <Stack.Screen 
          name='Blog' 
          component={ShowBlog}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('Edit', {
                id: route.params.id
              }
              )}>
                <EvilIcons name="pencil" size={30} />
              </TouchableOpacity>
            ),
          }) }  
        />
        <Stack.Screen name="Create" component={CreateBlog} />
        <Stack.Screen 
          name="Edit" 
          component={EditBlog}
         
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return  <Provider>
    <App />
  </Provider> 
}