import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Search() {
    const [field, setField] = useState()
    const [query, setQuery] = useState()

    return (
        <>
            <View style={styles.seachWrapper}>
                <View style={styles.space}>
                    <Text style={styles.SearchIcon}>
                        <Icon name="search" size={20} color={'gray'} />
                    </Text>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={(value) => { setQuery(value) }}
                        type='email'
                        value={query}
                        placeholder={`Search`}
                        placeholderTextColor={"gray"}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    space: {
        flexDirection: 'row',
        justifyContent: 'left',
        borderWidth: 1,
        borderRadius: 20,
        gap: 10,
        borderColor: 'black',
        marginBottom: 10,

    },
    searchInput: {

        width: 230,
    },
    SearchIcon: {
        marginTop: 10,
        marginLeft: 10
    },
    seachWrapper: {
        marginTop:10,
        paddingHorizontal: 15,
    }

});