import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Edit() {

    const {params}= useRoute();

  return (
    <View style={styles.container}>
        <Text style={styles.description}>Edit {params.movie.title}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"black",
    backgroundColor: '#282C35',
    padding: 10,
  },
  description:{
    fontSize:20,
    color:"white",
    padding:10,
  },
  


    

});
