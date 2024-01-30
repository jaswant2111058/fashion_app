import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { useData } from '../hooks/hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';


export default function BottomNav({ navigation }) {

    const {nav, setNav} = useData()

    return (
        <>
            <View style={styles.NavWrapper}>
                <View style={styles.NavMain}>
                    <View style={nav == 0 ? styles.setlectNavBtn : styles.navBtn}>
                        <View style={styles.navBtnInner}>
                            <Pressable onPress={() => { setNav(0); navigation.navigate('Home') }}>
                                <Icon name='hanger' size={30} color={"black"} />
                                <Text style={styles.buttonName}>
                                    Closet
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={nav ==1 ? styles.setlectNavBtn : styles.navBtn}>
                        <View style={styles.navBtnInner}>
                            <Pressable onPress={() => { setNav(1); navigation.navigate('Group') }}>
                                <Icon name='account-group' size={30} color={"black"} style={{ marginLeft: 3 }} />

                                <Text style={styles.buttonName}>
                                    Groups
                                </Text>
                            </Pressable>
                        </View>

                    </View>
                    <View style={nav == 2 ? styles.setlectNavBtn : styles.navBtn}>
                        <View style={styles.navBtnInner}>
                            <Pressable onPress={() => { setNav(2); navigation.navigate('Discover') }}>
                                <Icon name='shopping-search' size={30} color={"black"} style={{ marginLeft:6 }} />
                                <Text style={styles.buttonName}>
                                    Discover
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={nav == 3 ? styles.setlectNavBtn : styles.navBtn}>
                        <View style={styles.navBtnInner}>
                            <Pressable onPress={() => { setNav(3); navigation.navigate('Saved') }}>
                                <Icon name='heart-circle-outline' size={30} color={"black"}  />
                                <Text style={styles.buttonName}>
                                    Saved
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={nav === 4 ? styles.setlectNavBtn : styles.navBtn}>
                        <View style={styles.navBtnInner}>
                            <Pressable onPress={() => {setNav(4); navigation.navigate('Chat') }}>
                                <Icon name='chat-processing-outline' size={30} color={"black"} />
                                <Text style={styles.buttonName}>
                                    Chat
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View >
        </>
    );
}

const styles = StyleSheet.create({
    NavWrapper: {
        
    },
    NavMain: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 10,
        backgroundColor: '#fff',
        height: 70,
        paddingHorizontal:10,
        borderRadius: 20,
    },
    buttonName: {
        fontSize:11,
        color: "black",
        fontWeight: "700",
    },
    navBtn: {
        width: 50,
        borderRadius:15,
        paddingVertical: 3,
        backgroundColor:"#fff",
        elevation:10,
    },
    navBtnInner: {
        marginLeft: "auto",
        marginRight: "auto",
        
    },
    setlectNavBtn: {
        width: 50,
        borderRadius:15,
        paddingVertical: 3,
        backgroundColor:"#DFE4EC",
        elevation:10,
    }
});
