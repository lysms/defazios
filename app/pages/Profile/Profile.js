import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './Profile.style'

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../components/HomeButton/HomeButton';


// To do: Add the function to recceive the input value and authentication on the value input

const Profile = ({ history }) => {
    return (
        <View style={styles.container} blurRadius={1}>

            {/* Name  ->   Current Order + waiting time  ->  Order history(in one weeks) */}
            {/* At the top => will be able to view the overall menus  (can be direct to the menus page.) */}

            <HomeButton h={history} />
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>USER PROFILE</Text>
            </View>

            <View>
            </View>
            {/* 
                info to display:
                    first name
                    last name
                    email
                    phone number
            */}
            <View style={styles.Profile}>
                <Text style={styles.ProfileInfoText}>
                    First Name{" "}: Joe {"\n"}
                    Last Name{"  "}: Doe {"\n"}
                    Email{""}: jd@gmail.com{"\n"}
                    Phone# : 518-xxx-xxxx
                </Text>
            </View>
            {/* <View style={styles.TimeContainer}>
                <StatusBar style='light-content' />
                <TouchableOpacity onPress={() => null} style={styles.button}> */}
            {/* The time will become dynamic when the database is ready */}
            {/* <Text style={styles.buttonText}>60 mins</Text>
                </TouchableOpacity>
            </View> */}




            {/* 
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>15 Large Cheese Pizza, 2 sodas, 4 bags of buffalo chicken wings</Text>
            </View> */}




            {/* <View style={styles.currentOrder}>
                <Text style={styles.currentOrderText}>
                    Order History
                </Text>
            </View> */}

            {/* This will do the scrollview list of the order */}


            {/* <ScrollView style={styles.orderHistory}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView> */}

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.editBtn}>
                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/')}>
                        <Text style={styles.textcreate}>Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.menucontainer}>
                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/shoppingCart')}>
                        <Text style={styles.textcreate}>Browse Menus</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View style={styles.container3}></View>

        </View>


    );
};

export default Profile;

