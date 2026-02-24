import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function Detail() {

    const {name,params}= useRoute();

  return (
    <View>
        <Text>Details about {params.movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"black",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:60,
  },
  item: {
    flex:1,
    padding: 10,
    height: 50,
    backgroundColor: "#282C35"
  },
  itemText: {
    color:"#fff",
    fontSize:24,
  },

    /test
    

});
