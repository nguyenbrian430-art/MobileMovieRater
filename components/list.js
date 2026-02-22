import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function MovieList() {

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

  return (
    <View>
        <FlatList 
            data={movies}
            renderItem={({item}) =>(
                <View style={styles.item}>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
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

});
