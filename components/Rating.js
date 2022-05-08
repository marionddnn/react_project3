import { View, Pressable} from "react-native";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addRating, ratingSelector } from "./ratingSlice";

const Rating = (props) => {
    const dispatch = useDispatch();
    const [rate, setRate] = useState({note : 0, id : props.id});
    const rating = useSelector(ratingSelector);

    const getRate = () => {
        rating.map(item => { rate.id == item.id ? setRate({...rate, note : item.note}) : null});
    };

    const addRatingList = () => {
        dispatch(addRating(rate));
    };

    useEffect(
        () => {addRatingList()}, [rate.note],
    );

    useEffect(
        ()=>{getRate()}, [],
    )

        return (
        <View style={{ flexDirection: "row" }}>
           
        {[...Array(5)].map((el, i) => (
            
                <Pressable
                    style={{}} 
                    onPress={() => {
                    setRate({...rate, note : i+1})
                }}>
                    {rate.note > i ? <FaStar/> : <FaRegStar/> }
                    
                </Pressable>
        ))}

        </View>

    );

};

export default Rating;