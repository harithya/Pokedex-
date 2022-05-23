import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen, AnimationScreen, HomeScreen, PokemonCatchScreen, PokemonSaveScreen, PokemonShowScreen, SplashScreen } from '@pages';


const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PokemonShow" component={PokemonShowScreen} />
            <Stack.Screen name="PokemonCatch" component={PokemonCatchScreen} />
            <Stack.Screen name="PokemonSave" component={PokemonSaveScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}