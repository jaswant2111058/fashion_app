import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, ImageBackground } from 'react-native';
import Loader from '../components/loader';
import { useData } from '../hooks/hooks';
import BottomNav from '../components/bottomNav';
import Hearder from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/search';

export default function Chat({ navigation }) {
    const { isLoading, setNav } = useData()
    useEffect(()=>{
        setNav(4)
    },[])

    return (
        <>
            {isLoading ? (<Loader />) : null}
            <View style={styles.chatWrapper}>
                <View style={styles.chatMain}>
                    <Hearder />
                    <Search />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.chatChatList}>
                        <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp0.png')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            School Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp1.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            College Indeed
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp2.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            Tusion Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp3.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            Loacl Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp4.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            Delhi Toure
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp5.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            School Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp6.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            School Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp7.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            School Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp8.jpg')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            School Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 15 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.chatChatWrapper}>
                                <View style={styles.chatChats}>
                                    <View>
                                        <Image
                                            style={styles.dpImage}
                                            source={require('../../assets/images/dp9.png')}
                                        />
                                    </View>
                                    <View style={styles.chatName}>
                                        <Text style={styles.chatNameText}>
                                            School Friends
                                        </Text>
                                        <Text style={{ color: "gray" }}>
                                            When We are Meeting Again
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: "gray", marginTop: 5 }}>
                                        02:00 AM
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <BottomNav navigation={navigation} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    chatWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        backgroundColor: "#FFF"

    },
    chatMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    chatChatWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: "gray"
    },
    chatChats: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    dpImageWrapper: {
        flexDirection: "row",
        justifyContent: "center",
    },
    dpImage: {
        width: 80,
        height: 80,
        borderRadius: 150,
        overflow: "hidden",
        borderColor: "#fff",
        borderWidth: 5
    },
    chatNameText: {
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    },
    chatChatList: {
        marginTop: 10,
        paddingHorizontal: 15,
    },
    follow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    addNewchat: {

        backgroundColor: "black",
        width: 50,
        borderRadius: 100
    },
    addNewchatWrapper: {
        position:"absolute",
        right:0,
        bottom:70,
        padding:20
    },
    closetText: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
        color: "black",
        fontSize: 18,
        fontWeight: "700"
    },
    closetWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 15,
        marginTop: 10,

    },
    closet: {
        width: 200,
        height: 300,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    closetImage: {

        width: 180,
        height: 250,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        borderRadius: 20,
    },
    closetName: {
        marginTop: 10,
        color: "black",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    addCloset: {
        paddingTop: 80,
        width: 200,
        height: 300,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
        flexWrap: "wrap",
        alignItems: "center",

    },
    AddNew: {
        marginTop: 10,
        color: "black",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    },
    NavMain: {

        flexDirection: 'row',
        gap: 125,
    }
});
