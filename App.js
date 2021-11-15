import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/home";
import Hospital from "./screens/hospital";

const HomeStack = createStackNavigator();
const HospitalStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeStackScreen =({navigation})=>{
//   <HomeStack.Navigator>
//     <HomeStack.Screen name ="Home" component={Home}/>
//   </HomeStack.Navigator>

// }
// const HospitalStackScreen =({navigation})=>{
//   <HospitalStack.Navigator>
//     <HospitalStack.Screen name ="Hospital" component={Hospital}/>
//   </HospitalStack.Navigator>
// }
// const StackNavigator= ()=>(
//   <Stack.Navigator>
//     <Stack.Screen name ="Home" component = {Home}/>
//     <Stack.Screen name ="Hospital" component ={Hospital}/>
//   </Stack.Navigator>
// )
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Hospital" component={Hospital} />
  </Drawer.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
