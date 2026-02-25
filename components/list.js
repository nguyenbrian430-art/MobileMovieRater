import React, {useState, useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';


export default function MovieList(props) {

    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/movies/", {
            method: "GET",
            headers: {
                "Authorization": `Token 9b2715743b984db9f4b6ae67f0efdfab9b0a453e`
            }
        })
        .then( res => res.json())
        .then( jsonRes => setMovies(jsonRes))
        .catch( error => console.log(error));

    }, []);

    const movieclicked = (movie) => {
        props.navigation.navigate("Detail", {movie:movie})
    }

  return (
    <View style={styles.container}>
        <Image source={require("../assets/MR_logo.png")}
        style={{width:"100%", height: 135, paddingTop:30}}
        resizeMode="contain"/>

        <FlatList 
            data={movies}
            renderItem={({item}) =>(
                <TouchableOpacity onPress={()=> movieclicked(item)}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item,index) => index.toString()}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"black",
    backgroundColor: '#282C35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex:1,
    padding: 10,
    height: 60,
    backgroundColor: "#282C35",
    borderWidth:5,
    marginTop:5,
    
  },
  itemText: {
    color:"#fff",
    fontSize:24,
  },

});
