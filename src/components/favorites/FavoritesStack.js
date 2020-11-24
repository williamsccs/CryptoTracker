import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import FavoriteScreen from './FavoritesScreen';
import Colors from 'cryptoTracker/src/res/colors';

const Stack = createStackNavigator();

const FavoritesStack = ({
    params,
}) => (
    <Stack.Navigator
        screenOptions = {{
            headerStyle: {
                backgroundColor: Colors.blackPearl,
                shadowOpacity: 0,
                //shadowColor: Colors.blackPearl, //se usa esta o la linea anterior, es el mismo resultado
            },
            headerTintColor: Colors.white
        }}
    >
        <Stack.Screen 
            name='Favorites'
            component={FavoriteScreen}
        />
    </Stack.Navigator>
);

export default FavoritesStack;
