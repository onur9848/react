import { View, StyleSheet, Text, Pressable } from "react-native";
import AnswerButtonCompenent from "./AnswerButtonCompenent";
import { useState } from "react";
import axios from "axios";

import Categories from "../entity/categories";

const url = 'http://192.168.187.165:8080/api/category/getall';

var i;
function QuestionCompenent(props) {
    var i = 0;

    var A, B, C, D;

    const answerColor = '#00ff00';
    let screen = (
        <>
            <View style={styles.soruContainer}>
                <Text>{props.soru[i]}  i: {i}</Text>
            </View>
            <View style={styles.cevapContainer}>

                <AnswerButtonCompenent
                    secilmisItem={onClick}
                    index={0}
                    color={answerColor}
                    cevap={false}
                >
                    A) {A}
                </AnswerButtonCompenent>
                <AnswerButtonCompenent
                    secilmisItem={onClick}
                    index={1}
                    color={answerColor}
                    cevap={true}
                >
                    B) {B}
                </AnswerButtonCompenent>
                <AnswerButtonCompenent
                    secilmisItem={onClick}
                    index={2}
                    color={answerColor}
                    cevap={false}
                >
                    C) {C}
                </AnswerButtonCompenent>
                <AnswerButtonCompenent
                    secilmisItem={onClick}
                    index={3}
                    color={answerColor}
                    cevap={false}
                >
                    D) {D}
                </AnswerButtonCompenent>

            </View>
        </>
    )
    var pres = false;
    function onClick(index) {
        if (props.cevapIndex === index) {
            console.log("Doğru Cevap");
            props.answer = true;
        }
        else {
            console.log("Yanlış Cevap");
        }
    
        console.log(i)
        pres = true;
          axios.get(url).then((response)=>{
        }).catch((error)=>
            {console.log(error)});

    }



    return (
        <View style={styles.container} >
            {screen}
        </View>
    )

}

export default QuestionCompenent;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#990e0e',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        width: '90%',
        height: '95%',
        borderRadius: 30,
    },
    soruContainer: {
        backgroundColor: '#ce8989',
        paddingVertical: '10%',
        paddingHorizontal: '2%',
        marginHorizontal: '5%',
        borderRadius: 10,
    },
    cevapContainer: {
        backgroundColor: '#ce8989',
        paddingVertical: '10%',
        paddingHorizontal: '2%',
        marginHorizontal: '5%',
        borderRadius: 10,
    },
    abcdContainer: {
        backgroundColor: '#c5c1f3',
        marginVertical: '1%',
        borderRadius: 20,
    },
    cevapTextStyle: {
        paddingVertical: '2%',
        paddingStart: '5%',

    },
    pressedItem: {
        opacity: 0.5,
    }

})
