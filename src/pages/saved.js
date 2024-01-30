import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, ImageBackground } from 'react-native';
import Loader from '../components/loader';
import { useData } from '../hooks/hooks';
import BottomNav from '../components/bottomNav';
import Hearder from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/search';

export default function Saved({ navigation }) {
    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: 'Mobiles' },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers' },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]
    const { isLoading, setNav } = useData()
    useEffect(() => {
        setNav(3)
    }, [])

    return (
        <>

            <View style={styles.savedWrapper}>
                <View style={styles.savedMain}>
                    <Hearder />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Search />
                        <View style={styles.resultList}>
                            <View style={styles.resultWrapper}>

                                <View>
                                    <Image
                                        style={styles.ItemImage}
                                        source={require('../../assets/images/bottoms.jpg')}
                                    />
                                </View>
                                <Text style={styles.ItemName}>
                                    Bootms
                                </Text>
                                <Text style={styles.ItemDiscription}>
                                    Lorem Ipsum Retro Reble
                                </Text>
                                <View style={styles.ItemPriceWrapper}>

                                    <Text style={styles.ItemPrice}>
                                        $ 58.00 +
                                    </Text>
                                    <Text style={styles.ItemDiscount}>
                                        35 % OFF
                                    </Text>
                                </View>
                            
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="heart" size={30} color="black" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.resultWrapper}>

                                <View>
                                    <Image
                                        style={styles.ItemImage}
                                        source={require('../../assets/images/sweatShirt.jpg')}
                                    />
                                </View>
                                <Text style={styles.ItemName}>
                                    Sweat Shirt
                                </Text>
                                <Text style={styles.ItemDiscription}>
                                    Lorem Ipsum Retro Reble
                                </Text>
                                <View style={styles.ItemPriceWrapper}>

                                    <Text style={styles.ItemPrice}>
                                        $ 58.00 +
                                    </Text>
                                    <Text style={styles.ItemDiscount}>
                                        35 % OFF
                                    </Text>
                                </View>
                           
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="heart" size={30} color="black" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.resultWrapper}>

                                <View>
                                    <Image
                                        style={styles.ItemImage}
                                        source={require('../../assets/images/jeans.jpg')}
                                    />
                                </View>
                                <Text style={styles.ItemName}>
                                    Jeans
                                </Text>
                                <Text style={styles.ItemDiscription}>
                                    Lorem Ipsum Retro Reble
                                </Text>
                                <View style={styles.ItemPriceWrapper}>

                                    <Text style={styles.ItemPrice}>
                                        $ 58.00 +
                                    </Text>
                                    <Text style={styles.ItemDiscount}>
                                        35 % OFF
                                    </Text>
                                </View>
                      
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="heart" size={30} color="black" />
                                    </View>
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

    savedWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        backgroundColor: "#FFF"

    },
    savedMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    resultWrapper: {

        width: 210,
        height: 315,
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10,
        elevation:10,

    },

    ItemImage: {
        width: 180,
        height: 150,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        borderRadius: 20,
    },
    resultList: {
        flexDirection: 'row',
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 15,
        marginTop: 10,
    },
    filter: {
        flexDirection: 'row',
        justifyContent: "center",
        gap: 5,
    },
    addNewsaved: {
        backgroundColor: "black",
        width: 50,
        borderRadius: 100
    },
    addNewsavedWrapper: {
        position: "absolute",
        right: 0,
        bottom: 70,
        padding: 20
    },
    filterOptions: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    filterOptionsText: {

        color: "black",
        fontSize: 14,
        fontWeight: "600"

    },
    filterList: {
        width: 200,
        height: 300,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    ItemName: {
        marginTop: 10,
        color: "black",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center"
    },
    ItemDiscription: {
        color: "gray",
        textAlign: "center"
    },
    ItemPriceWrapper: {

        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        alignItems: "center",
        marginBottom: 5,

    },
    ItemPrice: {
        color: "black",
        fontSize: 20,
        fontWeight: "700"
    },
    ItemBottom: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    viewDetailWrapper: {
        backgroundColor: "black",
        width: 150,
        borderRadius: 12
    },
    viewDetail: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    }
});
