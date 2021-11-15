import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Appbar, Button, Title, Paragraph } from "react-native-paper";
import CardView from "../shared/card";

export default function Home() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("https://corona.askbhunte.com/api/v1/data/nepal")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => alert(error));
  }, []);
  let props = {
    title: "Total Tests",
    imageUri:
      "https://images.pexels.com/photos/3902883/pexels-photo-3902883.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    dat: data.tested_total,
  };
  let props2 = {
    title: "Total Positive Tests",
    imageUri:
      "https://myrepublica.nagariknetwork.com/uploads/media/COVID19_20200403142345.png",
    dat: data.tested_positive,
  };
  let props3 = {
    title: "Total Negative Tests",
    imageUri:
      "https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    dat: data.tested_negative,
  };
  let props4 = {
    title: "In Isolation",
    imageUri:
      "https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    dat: data.in_isolation,
  };
  let props5 = {
    title: "Recovered",
    imageUri:
      "https://images.pexels.com/photos/1117493/pexels-photo-1117493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    dat: data.recovered,
  };
  let props6 = {
    title: "Deaths",
    imageUri:
      "https://images.pexels.com/photos/1096925/pexels-photo-1096925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    dat: data.deaths,
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Appbar style={styles.bottom}>
                <Appbar.Action
                    icon='label'
                    onPress={() => navigation.toggleDrawer()}
                 />
            </Appbar> */}
        <CardView {...props} />
        <CardView {...props2} />
        <CardView {...props3} />
        <CardView {...props4} />
        <CardView {...props5} />
        <CardView {...props6} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#2c90a6",
    left: 0,
    right: 0,
    height: 75,
  },
  btnStyle: {
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
  },
  cardView: {
    padding: 20,
  },
});
