import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, ImageBackground, Alert } from 'react-native';
import Loader from '../components/loader';
import { useData } from '../hooks/hooks';
import BottomNav from '../components/bottomNav';
import Hearder from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../components/search';
import { SelectList } from 'react-native-dropdown-select-list'
import gymwearImage from '../../assets/images/jeans.jpg';



export default function Discover({ navigation }) {
    const { isLoading, setNav, data, save, setSave } = useData()

    useEffect(() => {
        setNav(2)
    }, [])
    const [selected, setSelected] = useState("");
    const data1 = [
        { key: '1', value: 'S' },
        { key: '2', value: 'M' },
        { key: '3', value: 'L' },
        { key: '4', value: 'x-L' },
        { key: '5', value: 'XX-L' },
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

    const Save = (item )=>{

        for(let i=0;i<save.length;i++){
            if(save[i].id == item.id) {
                const remove = save.filter((e)=>{

                    if(e.id!==item.id){
                        return e
                    }

                })
               setSave(remove)
               setSave(remove)
                return;
            }
        }
        setSave([...save,item])
    }

    const isSaved = (id) =>{
        
        for(let i=0;i<save.length;i++){
            if(save[i].id == id) return true
        }
        return false

    }

    return (
        <>
            {isLoading ? (<Loader />) : null}
            <View style={styles.discoverWrapper}>
                <View style={styles.discoverMain}>
                    <Hearder />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Search />
                        <View style={styles.filter}>
                            <View style={styles.filterInner}>
                                <SelectList
                                    style={styles.filterList}
                                    setSelected={(val) => setSelected(val)}
                                    data={data1}
                                    save="value"
                                    placeholder='Size'
                                    color="black"
                                    inputStyles={{ color: "black" }}
                                    dropdownTextStyles={{ color: "black" }}
                                    boxStyles={{ backgroundColor: "#fff", borderWidth: 0, elevation: 5 }}

                                />
                            </View>
                            <View style={styles.filterInner}>
                                <SelectList
                                    style={styles.filterList}
                                    setSelected={(val) => setSelected(val)}
                                    data={data2}
                                    save="value"
                                    placeholder='Color'
                                    color="black"
                                    inputStyles={{ color: "black" }}
                                    dropdownTextStyles={{ color: "black" }}
                                    boxStyles={{ backgroundColor: "#fff", borderWidth: 0, elevation: 5 }}
                                />
                            </View>
                            <View style={styles.filterInner}>
                                <SelectList
                                    style={styles.filterList}
                                    setSelected={(val) => setSelected(val)}
                                    data={data3}
                                    save="value"
                                    placeholder='Season'
                                    color="black"
                                    inputStyles={{ color: "black" }}
                                    dropdownTextStyles={{ color: "black" }}
                                    boxStyles={{ backgroundColor: "#fff", borderWidth: 0, elevation: 5 }}
                                />
                            </View>
                        </View>
                        <View style={styles.resultList}>
                            {
                                data.map((item, index) => {

                                    return (
                                        <View style={styles.resultWrapper} key ={item.id}>

                                            <View >
                                                <Image
                                                    style={styles.ItemImage}
                                                    source={item.img}
                                                />
                                            </View>
                                            <Text style={styles.ItemName}>
                                                {item.name}
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
                                                    <Icon name={isSaved(item.id)?"heart":"cards-heart-outline"} size={30} color="black" 
                                                    onPress={
                                                        ()=>{ Save(item) }
                                                        }/>
                                                </View>
                                            </View>
                                        </View>
                                    )

                                })
                            }
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

        width: 165,
        height: 280,
        borderColor: "gray",
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10,
        elevation: 10

    },

    ItemImage: {
        width: 140,
        height: 120,
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
        paddingHorizontal: 5
    },
    filter: {
        flexDirection: 'row',
        justifyContent: "space-between",

        paddingHorizontal: 15,

    },
    filterInner: {
        width: 100,

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
        color: "black"
    },
    ItemName: {
        marginTop: 5,
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
        fontSize: 16,
        fontWeight: "700"
    },
    ItemDiscount: {
        color: "black",
        fontSize: 12
    },
    ItemBottom: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    viewDetailWrapper: {
        marginTop: 5,
        backgroundColor: "black",
        width: 100,
        borderRadius: 12
    },
    viewDetail: {
        marginTop: 2,
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center"
    }
});
