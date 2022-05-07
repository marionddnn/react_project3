import { View, Text, Button, FlatList, TextInput, ScrollView } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Rating from "./Rating";

const List = () => {
    const route = useRoute();
    const [myList, setList] = useState("{}");

    const addToMyList = () => {
      const {title, artist, link, type, id} = route.params;
      setList([...myList, {id: id, title: title, artist : artist, type: type, link: link}]);
      console.log(myList);
    };

    useFocusEffect(() => {
      if (!route.params) return;
      addToMyList();
      route.params = null;
    });

    return (
      <ScrollView>
        <FlatList
        data={myList}
        renderItem={({item})=> (
          <>
          <Text style={{  marginRight : "1rem", fontSize : "1.2rem" }}>Artiste : {item.artist}</Text>
          <Text style={{  marginRight : "1rem" }}>Musique : {item.title}</Text>
          <Text style={{  marginRight : "1rem" }}>Genre : {item.type}</Text>
          <Text style={{  marginRight : "1rem" }}>Plus de musiques de cet artiste : {item.link}</Text>
          <View  style={{ flexDirection: "row" }}>
              <Rating/>
          </View>
          </>
        )} 
        keyExtractor={({item})=> item}
        >
      </FlatList>
     </ScrollView>
    );
  };

export default List;