import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Edit({navigation}) {

    const {params}= useRoute();
    const [title,setTitle] = useState(params.movie.title);
    const [description,setDescription] = useState(params.movie.description);

    const saveMovie = () => {
        navigation.goBack();
    }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput 
            style={styles.input}
            placeholder="Title"
            onChangeText={text => setTitle(text)}
            value={title}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput 
            style={styles.input}
            placeholder="Description"
            onChangeText={text => setDescription(text)}
            value={description}
        />
        <Button onPress={() => saveMovie()} title="Save"/>
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
  label:{
    fontSize:24,
    color:"white",
    padding:10,
  },
  input:{
    fontSize:24,
    backgroundColor: "#fff",
    padding:10,
    margin:10,
  },
  


    

});
