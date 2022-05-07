import { View, Text, Button, FlatList, TextInput, Pressable, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMusicToList } from "./listSlice";
import { addMusicToDetails } from "./detailSlice";
import { useNavigation } from "@react-navigation/native";


const Search = () => {
  
    const navigation = useNavigation();
    const baseUrl = "https://itunes.apple.com/search?media=music&entity=musicTrack&limit=25";
    const [result, setRes] = useState({artist : {resultCount : 0, results : [{"artistName" : null, "trackName":null, "trackId":null, "artistViewUrl" : null, "primaryGenreName" : null}]}, music : {resultCount : 0, results : [{"artistName" : null, "trackName":null, "trackId":null, "artistViewUrl" : null, "primaryGenreName" : null}]}});
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const addClicked = (item) => {
      dispatch(addMusicToList({title: item.trackName, artist: item.artistName, type: item.primaryGenreName, link:item.artistViewUrl, id: item.trackId}));
    };

    const toDetails = (item) => {
      dispatch(addMusicToDetails(item));
    };

    const research = async () => {
      let searchByArtist = await (await fetch(baseUrl + "&attribute=artistTerm&term=" + search)).json();
      let searchByMusic = await (await fetch(baseUrl + "&attribute=songTerm&term=" + search)).json();
      setRes({"artist" : searchByArtist, "music" : searchByMusic});
    }

    return (
      <ScrollView style={{ flexDirection: "column" }}>
      <TextInput
        onSubmitEditing={research}
        onChangeText={setSearch}
        style={{background:"#fff", width : "100%", margin : "1rem"}}
        value ={search}
        placeholder="Recherchez directement ou une musique ou faites une recherche par artiste"/>
      <Button onPress={research} title="Rechercher"></Button>
      <Text style={{fontSize : "1.4rem"}}> Recherche par artiste </Text>
      <FlatList
       data={result.artist.results}
       renderItem={({item})=> (
         <View>
         <Pressable style={{ backgroundColor: "white", padding : "1rem", borderBottom : "1px dotted black"}} onPress={() => 
         (addClicked(item),
                navigation.navigate({
                    name :"Liste"
          }))}>
          <Text style={{  marginRight : "1rem", fontSize : "1.2rem" }}>Artiste : {item.artistName}</Text>
          <Text style={{  marginRight : "1rem" }}>Musique : {item.trackName}</Text>
          <Text style={{  marginRight : "1rem" }}>Genre : {item.primaryGenreName}</Text>
          </Pressable>
           <Button title="Plus de détails" onPress={() =>
           (toDetails(item), 
            navigation.navigate({
                name :"Detail"
          }))}></Button>
          </View>
       )} 
       keyExtractor={({item})=> item}
       >

      </FlatList>
      <Text style={{  marginTop : "1rem", fontSize : "1.4rem"}}> Recherche par musique </Text>
      <FlatList
      data={result.music.results}
      renderItem={({item})=> (
        <View  style={{ backgroundColor: "white", padding : "1rem", borderBottom : "1px dotted black"}}>
        <Pressable onPress={() =>
          (addClicked(item),
          navigation.navigate({
              name :"Liste"
          }))}>
            <Text style={{  marginRight : "1rem", fontSize : "1.2rem"}}>Musique : {item.trackName}</Text>
            <Text style={{  marginRight : "1rem" }}>Artiste : {item.artistName}</Text>
            <Text style={{  marginRight : "1rem" }}>Genre : {item.primaryGenreName}</Text>
          </Pressable>
          <Button title="Plus de détails" onPress={() => 
          (toDetails(item),
          navigation.navigate({
              name :"Detail"
          }))}></Button>
          </View>
      )} 
      keyExtractor={({item})=> item}
      >
      </FlatList>
      </ScrollView>
    );
  };

export default Search;