import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, ImageBackground } from 'react-native';
import Loader from '../components/loader';
import { useData } from '../hooks/hooks';
import BottomNav from '../components/bottomNav';
import Hearder from '../components/header';
import Icon from 'react-native-vector-icons/Octicons';

export default function Home({ navigation }) {
    const { isLoading, setNav } = useData()
    useEffect(() => {
        setNav(0)
    }, [])
    return (
        <>
            {isLoading ? (<Loader />) : null}
            <View style={styles.homeWrapper}>
                <View style={styles.homeMain}>
                    <Hearder />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ImageBackground
                            source={require('../../assets/images/dp9.png')}
                            style={styles.coverImage}
                        >
                            <View style={styles.dpImageWrapper}>
                                <Image
                                    style={styles.dpImage}
                                    source={require('../../assets/images/dp0.png')}
                                />
                            </View>
                            <View style={styles.userName}>
                                <Text style={styles.userNameText}>
                                    Jassi
                                </Text>
                                <Text style={styles.userIdText}>
                                   App Developer
                                </Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.followWrapper}>
                            <View style={styles.follow}>
                                <Text style={styles.followNoText}>
                                    1.2K
                                </Text>
                                <Text style={styles.followText}>
                                    Followers
                                </Text>
                            </View>
                            <View style={styles.follow}>
                                <Text style={styles.followNoText}>
                                    584
                                </Text>
                                <Text style={styles.followText}>
                                    Followings
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.closetText}>
                            My Closets
                        </Text>
                        <View style={styles.closetWrapper}>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/kurta.png')}
                                />

                                <Text style={styles.closetName}>
                                    Kurta
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/jeans2.jpg')}
                                />

                                <Text style={styles.closetName}>
                                    Jeans
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/shoes.png')}
                                />

                                <Text style={styles.closetName}>
                                    Shoes
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/shirticon.jpg')}
                                />

                                <Text style={styles.closetName}>
                                    T shirt
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/hoodyicon.png')}
                                />
                                <Text style={styles.closetName}>
                                    Hoody
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/gown.jpg')}
                                />

                                <Text style={styles.closetName}>
                                    Gown
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/formalshirt.png')}
                                />

                                <Text style={styles.closetName}>
                                    Formal Shirt
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/coat.jpg')}
                                />

                                <Text style={styles.closetName}>
                                    Coat 
                                </Text>
                            </View>
                            <View style={styles.closet}>
                                <Image
                                    style={styles.closetImage}
                                    source={require('../../assets/images/heelicon.jpg')}
                                />

                                <Text style={styles.closetName}>
                                    Heel
                                </Text>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={styles.addNewGroupWrapper}>
                        <View style={styles.addNewGroup}>
                            <Icon name="plus" color="black" size={50} />
                        </View>
                    </View>
                    <BottomNav navigation={navigation} />
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({

    homeWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        backgroundColor: "#FFF"

    },
    homeMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    coverImageWrapper: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    coverImage: {
        width: "100%",
        height: 195,
        opacity: 0.8,
        paddingVertical: 10
    },
    dpImageWrapper: {

        flexDirection: "row",
        justifyContent: "center",


    },
    dpImage: {
        width: 125,
        height: 125,
        borderRadius: 150,
        overflow: "hidden",
        zIndex: 3,
        borderColor: "#fff",
        borderWidth: 5
    },
    userNameText: {
        textAlign: 'center',
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    },
    userIdText: {
        textAlign: 'center',
        fontSize: 18,
        color: "black",
        fontWeight: "500",
        
    },
    followWrapper: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
    },
    follow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    followNoText: {
        fontSize: 16,
        color: "black",
        fontWeight: "700"
    },
    followText: {

        color: "gray",
        fontSize: 16,

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
        width: 140,
        height: 220,
        borderRadius: 20,
        backgroundColor: "#fff",
        elevation:10,
    },
    closetImage: {

        width: 120,
        height: 180,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        borderRadius: 20,
    },
    closetName: {
        marginTop: 5,
        color: "black",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    addCloset: {
        paddingTop: 40,
        width: 150,
        height: 210,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
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
    addNewGroup: {
        backgroundColor: "#DFE4EC",
        width: 50,
        borderRadius: 100,
        flexDirection:"row",
        justifyContent:"center"
    },
    addNewGroupWrapper: {
        position: "absolute",
        left:"40%",
        bottom: 60,
        padding: 20
    },
});
