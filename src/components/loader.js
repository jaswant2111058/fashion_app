import { StyleSheet, View, Image } from 'react-native';

export default function Loader() {

    return (
        <>
            <View style={styles.Loader}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/loading.gif')}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
       width:80,
       height:80,
      
    },
    Loader: {
       position:"absolute",   
       zIndex:3,
       top:"50%",
       left:"40%"
    }


});
