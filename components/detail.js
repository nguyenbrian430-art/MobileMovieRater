import React, {useState, useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export default function Detail({navigation,route}) {

    const {params}= useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
          title: params.movie.title,
          headerRight: () => (<Button title="edit" color="white" onPress={()=> navigation.navigate("Edit", {movie:params.movie})}/>),
          headerStyle:{backgroundColor:"orange",},
          headerTintColor: "white",
        });
      }, [navigation, params.movie.title]);

  return (
    <View style={styles.container}>
        <View style={styles.starContainer}>
            <FontAwesomeIcon style={params.movie.avg_rating>0 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={params.movie.avg_rating>1 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={params.movie.avg_rating>2 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={params.movie.avg_rating>3 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={params.movie.avg_rating>4 ? styles.orange : styles.white} icon={faStar}/>
            <Text style={styles.white}>({params.movie.no_of_ratings})</Text>
        </View>
        <Text style={styles.description}>Description: {params.movie.description}</Text>

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
  starContainer:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  },
  orange:{
    color:"orange",
  },
  white:{
    color:"white"
  },
  description:{
    fontSize:20,
    color:"white",
    padding:10,
  },

    

});
