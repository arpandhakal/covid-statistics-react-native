import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Appbar, Card } from "react-native-paper";
import CardView from "../shared/card";
import { useNavigation } from "@react-navigation/native";
import TextTicker from "react-native-text-ticker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const hospitalURL = "https://corona.askbhunte.com/api/v1/hospitals";
export default function Hospital() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(hospitalURL)
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  return (
    // <FlatList
    //   data={data}
    //   keyExtractor={({ id }, index) => id}
    //   renderItem={({ item }) => {
    //     <Text>
    //       {item.name}, {item.contact_person}{" "}
    //     </Text>;
    //   }}
    // ></FlatList>
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<View style={{ height: 200 }} />}
      renderItem={({ item, index }) => {
        return (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card style={styles.card}>
              <TextTicker
                style={[styles.namecode]}
                duration={4000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}
              >
                {item.name}
              </TextTicker>
              <View style={{ padding: 13 }} />
              <Text style={styles.namecode}>
                Phone :{" "}
                {item.phone == null || item.phone == ""
                  ? "phone number not available"
                  : item.phone}
              </Text>
              <View style={{ padding: 13 }} />
              <Text style={styles.namecode}>
                noOfbeds :
                {item.capacity.beds == null || item.capacity.beds == ""
                  ? " information not available"
                  : item.capacity.beds}
              </Text>
            </Card>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  card: {
    backgroundColor: "#F5E5DA",
    width: wp("92%"),
    height: hp("20%"),
    marginLeft: 15,
    margin: 2,
  },
  price: {
    fontFamily: "Lato-Regular",
    color: "#191919",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 65,
    position: "absolute",
    marginLeft: 266,
    width: 150,
  },
  namecode: {
    fontFamily: "Lato-Regular",
    color: "#191919",
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 0,
  },
  Rectangle7: {
    alignContent: "center",
    alignItems: "center",
    width: 170,
    height: 50,
    marginLeft: 120,
    marginTop: 120,
    backgroundColor: "#F5E5DA",
    borderRadius: 20,
  },
  text1: {
    fontFamily: "Lato-Regular",
    color: "#191919",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  errCont: {
    alignItems: "center",
    width: wp("85%"),
    marginTop: "30%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  errText: {
    fontFamily: "Lato-Regular",
    color: "#FF0000",
    fontSize: 16,
    lineHeight: 24,
  },
});
