import { View, Text, Button, FlatList, TextInput, ScrollView } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { listSelector, deleteMusic } from "./listSlice";

const List = () => {
    const list = useSelector(listSelector);
    const dispatch = useDispatch();
    //$r.props.store.getState();

    const removeMusic = (item) => {
      dispatch(deleteMusic(item));
    };

    return (
      <ScrollView>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <View>
          <Text style={{  marginRight : "1rem", fontSize : "1.2rem" }}>Artiste : {item.artist}</Text>
          <Text style={{  marginRight : "1rem" }}>Musique : {item.title}</Text>
          <Text style={{  marginRight : "1rem" }}>Genre : {item.type}</Text>
          <Text style={{  marginRight : "1rem" }}>Plus de musiques de cet artiste : {item.link}</Text>
          <View  style={{ flexDirection: "row" }}>
              <Rating/>
          </View>
          <Button title="Supprimer" onPress={() => removeMusic(item)}></Button>
        </View>
        }
      />
     </ScrollView>
    );
  };

export default List;