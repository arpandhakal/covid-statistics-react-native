import React ,{useState,useEffect} from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Appbar, Card, Button, Title, Paragraph } from "react-native-paper";

export default function CardView(props){
    return(
        <View style={styles.cardView}>
          <Card>
            <Card.Title title={props.title}/>
     
            <Card.Cover source={{ uri: props.imageUri }} />
            <Card.Actions>
              <Button style = {styles.btnStyle}>{props.dat}</Button>
            </Card.Actions>
          </Card>
          </View>
    )
}


const styles = StyleSheet.create({
    bottom: {
      backgroundColor: '#2c90a6',
      left: 0,
      right: 0,
      height:75,
    },
    btnStyle:{
      justifyContent:'center',
      textAlign:'center',
      alignContent:'center'
    },
    cardView:{
      padding:20,
      
    }
  });