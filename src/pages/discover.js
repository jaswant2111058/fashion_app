import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, ImageBackground } from 'react-native';
import Loader from '../components/loader';
import { useData } from '../hooks/hooks';
import BottomNav from '../components/bottomNav';
import Hearder from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/search';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Discover({ navigation }) {
    const { isLoading, setNav } = useData()

    useEffect(()=>{
        setNav(2)
    },[])
    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: 'small' },
        { key: '2', value: 'Medium' },
        { key: '3', value: 'Large' },
        { key: '4', value: 'Ex-Large' },
        { key: '5', value: 'XX-Large' },
    ]
    const data2 = [
        { key: '1', value: 'Blue' },
        { key: '2', value: 'Black' },
        { key: '3', value: 'Pink' },
        { key: '4', value: 'Red' },
        { key: '5', value: 'Lavender' },
        { key: '6', value: 'Baby Ping' },
        { key: '7', value: 'Phusia' },
    ]
    const data3 = [
        { key: '1', value: 'Winter' },
        { key: '2', value: 'Summer' },
        { key: '3', value: 'Rainy' },
        { key: '4', value: 'Spring' },
    ]

    return (
        <>
            {isLoading ? (<Loader />) : null}
            <View style={styles.discoverWrapper}>
                <View style={styles.discoverMain}>
                    <Hearder />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Search />
                        <View style={styles.filterOptions}>
                            <Text style={styles.filterOptionsText}>
                                Size
                            </Text>
                            <Text style={styles.filterOptionsText}>
                                Color
                            </Text>
                            <Text style={styles.filterOptionsText}>
                                Season
                            </Text>
                        </View>
                        <View style={styles.filter}>
                            <SelectList
                                style={styles.filterList}
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                save="value"

                            />
                            <SelectList
                                style={styles.filterList}
                                setSelected={(val) => setSelected(val)}
                                data={data2}
                                save="value"
                            />
                            <SelectList
                                style={styles.filterList}
                                setSelected={(val) => setSelected(val)}
                                data={data3}
                                save="value"
                            />
                        </View>
                        <View style={styles.resultList}>
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
                                {/* <View style={styles.ItemShipping}>

                                    <Text style={styles.ItemShippinhText}>
                                        Free Shipping
                                    </Text>

                                </View> */}
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="cards-heart-outline" size={30} color="black" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.resultWrapper}>

                                <View>
                                    <Image
                                        style={styles.ItemImage}
                                        source={require('../../assets/images/Hoody.jpg')}
                                    />
                                </View>
                                <Text style={styles.ItemName}>
                                    Hoody
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
                                {/* <View style={styles.ItemShipping}>

                                    <Text style={styles.ItemShippinhText}>
                                        Free Shipping
                                    </Text>

                                </View> */}
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="cards-heart-outline" size={30} color="black" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.resultWrapper}>

                                <View>
                                    <Image
                                        style={styles.ItemImage}
                                        source={require('../../assets/images/gymwear.jpg')}
                                    />
                                </View>
                                <Text style={styles.ItemName}>
                                    Gym Wear
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
                                {/* <View style={styles.ItemShipping}>

                                    <Text style={styles.ItemShippinhText}>
                                        Free Shipping
                                    </Text>

                                </View> */}
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="cards-heart-outline" size={30} color="black" />
                                    </View>
                                </View>
                            </View>
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
                                {/* <View style={styles.ItemShipping}>

                                    <Text style={styles.ItemShippinhText}>
                                        Free Shipping
                                    </Text>

                                </View> */}
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="cards-heart-outline" size={30} color="black" />
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
                                {/* <View style={styles.ItemShipping}>

                                    <Text style={styles.ItemShippinhText}>
                                        Free Shipping
                                    </Text>

                                </View> */}
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="cards-heart-outline" size={30} color="black" />
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
                                {/* <View style={styles.ItemShipping}>

                                    <Text style={styles.ItemShippinhText}>
                                        Free Shipping
                                    </Text>

                                </View> */}
                                <View style={styles.ItemBottom}>
                                    <View style={styles.viewDetailWrapper}>

                                        <Text style={styles.viewDetail}>
                                            View Details
                                        </Text>

                                    </View>
                                    <View>
                                        <Icon name="cards-heart-outline" size={30} color="black" />
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

    discoverWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        backgroundColor: "#FFF"

    },
    discoverMain: {
        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    resultWrapper: {

        width: 210,
        height: 315,
        borderColor: "gray",
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10,
        elevation:10

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
    addNewdiscover: {
        backgroundColor: "black",
        width: 50,
        borderRadius: 100
    },
    addNewdiscoverWrapper: {
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
        borderColor: "gray",

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
