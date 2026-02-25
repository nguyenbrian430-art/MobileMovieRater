import React, {useState, useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



export default function Detail({navigation}) {

    const {params}= useRoute();
    const [ highlight,setHighlight]=useState(0);

    const rateClicked = () => {
      console.log(highlight);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          title: params.movie.title,
          headerRight: () => (<Button title="Edit" color="white" onPress={()=> navigation.navigate("Edit", {movie:params.movie})}/>),
          headerLeft: ()=>(<Button title="Back" color="white" onPress={()=> navigation.navigate("MovieList", {movie:params.movie})}/>),
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

      <View style={styles.line}/>
      <Text style={styles.description}>Rate it!!!</Text>

      <View style={styles.starContainer}>
        <Pressable onPress={() => setHighlight(1)}>
          <FontAwesomeIcon style={highlight>0 ? styles.purple : styles.grey} icon={faStar} size={48}/>
        </Pressable>
        <Pressable onPress={() => setHighlight(2)}>
          <FontAwesomeIcon style={highlight>1 ? styles.purple : styles.grey} icon={faStar} size={48}/>
        </Pressable>
        <Pressable onPress={() => setHighlight(3)}>
          <FontAwesomeIcon style={highlight>2 ? styles.purple : styles.grey} icon={faStar} size={48}/>
        </Pressable>
        <Pressable onPress={() => setHighlight(4)}>
          <FontAwesomeIcon style={highlight>3 ? styles.purple : styles.grey} icon={faStar} size={48}/>
        </Pressable>
        <Pressable onPress={() => setHighlight(5)}>
          <FontAwesomeIcon style={highlight>4 ? styles.purple : styles.grey} icon={faStar} size={48}/>
        </Pressable>
          
      </View>
      <Button title="Rate" onPress={() => rateClicked()}/>

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
  purple:{
    color:"purple"
  },
  grey:{
    color:"grey"
  },
  description:{
    fontSize:20,
    color:"white",
    padding:10,
  },
  line: {
    height: 2, // for a horizontal line, set a small height
    width: '100%', // make it span the full width
    backgroundColor: 'white', // choose your line color
    marginVertical: 10, // add some vertical spacing if needed
  },

    

});
