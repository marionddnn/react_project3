import { View, Pressable} from "react-native";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {
    const [rate, setRate] = useState(0);

        return (
           
        [...Array(5)].map((el, i) => (
            
                <Pressable 
                    style={{}} 
                    onPress={() => {
                        setRate(i+1);
                        console.log(i+1);
                }}>
                    {rate > i ? <FaStar/> : <FaRegStar/> }
                    
                </Pressable>
        ))

    );

};

export default Rating;