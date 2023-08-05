import { View, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";

function AnswerButtonCompenent(props) {
    console.log(props);
    const [selectedColor, setSelectedColor] = useState('');

 

    color = props.color;
    return (
        <View style={styles.abcdContainer}>
            <Pressable
                style={({ pressed }) => pressed && styles.pressedItem}
                android_ripple={{ color: '#dad8d8fd', borderless: true }}
                onPress={props.secilmisItem.bind(this, props.index)}
            >

                <Text style={styles.cevapTextStyle}>
                    {props.children}
                </Text>
            </Pressable>
        </View>
    );
}

export default AnswerButtonCompenent;

const styles = StyleSheet.create({

    abcdContainer: {
        backgroundColor: 'grey',
        marginVertical: '1%',
        borderRadius: 20,
    },
    cevapTextStyle: {
        paddingVertical: '5%',
        paddingStart: '5%',

    },
    pressedItem: {
        opacity: 0.5,
    }

});