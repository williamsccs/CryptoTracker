import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FavoriteEmptyState from './FavoritesEmptyState';
import Colors from 'cryptoTracker/src/res/colors';
import CoinsItem from 'cryptoTracker/src/components/coins/CoinsItem';

class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  state = {

    favorites:[],
  
  }

  getFavorites = async () =>{
    try {

      const allKeys = await Storage.instance.getAllKeys();

      const keys = allKeys.filter((key) => key.includes('favorite-'));

      const favs = await Storage.instance.multiGet(keys);

      const favorites = favs.map((fav) => JSON.parse(fav[1]));

      console.log('Favorites: ',favs);

      console.log('allKeys: ',allKeys)

      this.setState({favorites});
      
    } catch (error) {
      console.log('get Favorites Error: ',error)
    }
  }

  handlePress(coin){

    this.props.navigation.navigate('CoinDetail', { coin });
  }
  componentDidMount(){
    //this.getFavorites();

    this.props.navigation.addListener('focus', this.getFavorites);
  }

  componentWillUnmount(){
    this.props.navigation.removeListener('focus', thsi.getFavorites);
  }

  render() {

    const { favorites } = this.state;

    return (
      <View style={styles.container}>

       { favorites.length == 0 ?
        <FavoritesEmptyState />
        : null
       }

       { favorites.length > 0 ?
        <FlatList
          data={favorites}
          renderItem={({ item }) =>
            <CoinsItem
              item={item}
              onPress={() => this.handlePress(item)}
            />
          }
        />
        : null
       }

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.charade,
        flex:1
    },
});

export default FavoritesScreen;

//https://github.com/alesanabria/curso-react-native-cryptoTracker/blob/master/src/components/favorites/FavoritesScreen.js
// averiguar porque no cargan los favoritos