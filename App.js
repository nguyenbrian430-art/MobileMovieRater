import React from "react";

import { Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import MovieList from "./components/list";
import Detail from "./components/detail";
import Edit from "./components/edit";

const Stack=createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="MovieList">
        <Stack.Screen name="MovieList" component={MovieList} options={{headerStyle:{backgroundColor:"orange",}}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerStyle:{backgroundColor:"orange",}}}/>
        <Stack.Screen name="Edit" component={Edit} options={{headerStyle:{backgroundColor:"orange",}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
