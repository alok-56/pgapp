import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wishlist from "../Screens/Wishlist";
import Roomnav from "./Roomnav";
import Profilenav from "./Profilenav";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Homenav from "./Homenav";

const Tab = createBottomTabNavigator()

const Bottomtab = () => {
    return (
        <Tab.Navigator initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "aqua",
                tabBarLabelStyle: {
                    marginBottom: 10,
                    fontSize: 13,
                    fontWeight: "bold"
                },
                tabBarStyle: {
                    height: 80,
                    position: "absolute",
                    bottom: 5,
                    left: 10,
                    width: "95%",
                    borderTopEndRadius: 45,
                    borderTopStartRadius: 45,
                    flexDirection: "row",
                    justifyContent: "center",
                   
                }
            }}

        >
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Icon style={{
                            color: focused ? "aqua" : "black"
                        }} name="home" size={34} color="aqua" />
                    )
                }
            }} name="Home" component={Homenav} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Icon style={{
                            color: focused ? "aqua" : "black"
                        }} name="room" size={34} color="black" />
                    )
                }
            }} name="Room" component={Roomnav} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Icon style={{
                            color: focused ? "aqua" : "black"
                        }} name="message" size={34} />
                    )
                }
            }} name="Complain" component={Wishlist} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Icon style={{
                            color: focused ? "aqua" : "black"
                        }} name="person" size={34} color="black" />
                    )
                }
            }} name="profile" component={Profilenav} />
        </Tab.Navigator>


    )
}

export default Bottomtab;