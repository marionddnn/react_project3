import { View, Text, Button, FlatList, TextInput, ScrollView, Image} from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { detailSelector } from "./detailSlice";

const Detail = () => {
    const details = useSelector(detailSelector);
    $r.props.store.getState();

    const [data, setData] = useState({});

    const formatDetail = (item) => {
        return {
            artist : item.artistName,
            pictCD : item.artworkUrl100,
            nbTrack : item.trackNumber,
            trackName : item.trackName,
            album : item.collectionName,
            type : item.primaryGenreName,
            albumUrl : item.collectionViewUrl
        }
    }

    useFocusEffect(() => {
        setData(formatDetail(details));
    });

    return (
    <ScrollView>
        <View style={{ flexDirection: "row", margin : "1rem" }}>
            <Image
                style={{ width: 300, height: 300, marginRight : "1rem" }}
                source={{
                uri: data.pictCD,
                }}
            />
            <View>
                <Text style={{ fontSize: "1.5rem", fontWeight: 700}} >{data.trackName}</Text>
                <Text style={{ fontSize: "1.3rem", fontWeight: 700}}>{data.artist}</Text>   
                <Text>Genre : {data.type}</Text>
                <Text>Track n°{data.nbTrack}</Text> 
                <Text>{data.album}</Text>
            </View>
        </View>
        
    </ScrollView>
    );
  };

export default Detail;