import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FavoriteEmptyState = ({
    params,
}) => (
    <View style={styles.container}>
        <Text
            style={styles.text}
        >
        No Tienes Ningun Favorito Ahora
            
        </Text>
    </View>
);

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontWeight:'bold',
        fontSize:18,
        alignSelf: 'center',
    },
});

export default FavoriteEmptyState;
