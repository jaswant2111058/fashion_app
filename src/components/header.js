import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Pressable } from 'react-native';
import { useData } from '../hooks/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome6';


export default function Hearder({ navigation }) {

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.TextHeader}>
                    <Icon name="menu" size={30} color="black" />
                </Text>
                <Text style={styles.TextHeader}>
                    <Icon1 color="black" name="user-astronaut" size={30} />
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:15,
        paddingVertical:8
    },
    TextHeader:{
        fontSize:20,
        fontWeight:"700",
        width:40,
        height:40,
        backgroundColor:"#DFE4EC",
        textAlign:"center",
        paddingTop:4,
        borderRadius:20
    }



});
