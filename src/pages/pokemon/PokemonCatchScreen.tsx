import { Image, ImageBackground, StatusBar, StyleSheet, View, Linking, TouchableOpacity } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { color, constant, helper, theme } from '@utils'
import GifImage from '@lowkey/react-native-gif';
import { PageProps, PokemonDetailStateProps, useNavigationProps } from '@types';
import { Icon, Text } from '@ui-kitten/components';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'src/redux/reducer';
import { Loading } from '@components';
import { showMessage } from 'react-native-flash-message';
import { removePokemon, savePokemon } from 'src/redux/actions/pokemonSaveAction';

const PokemonCatchScreen: FC<PageProps<'PokemonCatch'>> = ({ route }) => {
    const [isSecondaryImage, setIsSecondaryImage] = useState(false);
    const navigation = useNavigation<useNavigationProps>()

    const firstUrl = `https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${route.params.number}.gif`;
    const secondaryUrl = `https://projectpokemon.org/images/normal-sprite/${route.params.name.toLowerCase()}.gif`

    useEffect(() => {
        const checkUrl = async () => {
            try {
                const req = await axios.get(firstUrl);
            } catch (error) {
                setIsSecondaryImage(true)
            }
        }
        checkUrl()
    }, [])

    const pokemonDetailState: PokemonDetailStateProps = useSelector((state: State) => state.pokemonDetail);

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const onCatchPokemon = () => {
        setIsLoading(true)
        setTimeout(() => {
            const pokemonHP = pokemonDetailState.data.hp;
            const playerPower = Math.floor(Math.random() * pokemonHP) + 50;

            if (playerPower > pokemonHP) {
                dispatch(savePokemon({
                    name: pokemonDetailState.data.name,
                    num: pokemonDetailState.data.num,
                    image: isSecondaryImage ? secondaryUrl : firstUrl,
                    type: []
                }))
                showMessage({
                    message: `Wooohoo... You Catch ${pokemonDetailState.data.name}!`,
                    type: "success",
                    icon: "success",
                    color: color.white,
                    backgroundColor: color.grass
                })
            } else {
                showMessage({
                    message: `Whoops ${pokemonDetailState.data.name} Run!!`,
                    type: "danger",
                    icon: "danger",
                    color: color.white,
                    backgroundColor: color.danger
                })
                dispatch(removePokemon(pokemonDetailState.data.num))
            }
            setIsLoading(false)
        }, 1000);
    }

    return (
        <>
            <StatusBar barStyle={"dark-content"} translucent backgroundColor={"transparent"} />
            <ImageBackground source={require("../../assets/img/go.jpg")} style={styles.container}>
                {isLoading && <View style={styles.loading}>
                    <Loading style={styles.textLoading} />
                </View>}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-outline' fill={color.white} style={styles.action} />
                    </TouchableOpacity>
                    <View style={styles.bar}>
                        <View style={styles.barContainer}>
                            <View style={styles.barHeader}>
                                <Text status={"control"} style={theme.fontSemiBold}>HP</Text>
                            </View>
                            <Text category={"h5"} style={styles.hpTitle}>{pokemonDetailState.data.hp}</Text>
                        </View>
                    </View>
                </View>
                <View style={[theme.flex1, theme.toCenter]}>
                    <GifImage
                        source={{ uri: isSecondaryImage ? secondaryUrl : firstUrl }}
                        style={[styles.img, isSecondaryImage && styles.imgSecondary]}
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={styles.touchableBall} onPress={onCatchPokemon}>
                        <Image source={require("../../assets/img/poke-game.png")} style={styles.ball} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}

export default PokemonCatchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        marginTop: -120,
        height: 170,
        width: 170,
    },
    imgSecondary: {
        height: 200,
        width: 200,
    },
    bar: {
        height: 50,
        backgroundColor: color.gray,
        borderRadius: 50,
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignSelf: "flex-start",
        marginLeft: 10
    },
    barHeader: {
        backgroundColor: color.bug,
        alignSelf: "flex-start",
        height: 40,
        width: 40,
        ...theme.toCenter,
        borderRadius: 50
    },
    barContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    hpTitle: {
        marginLeft: 10,
        paddingRight: 10,
        color: color.bug
    },
    ball: {
        height: 100,
        width: 100,
    },
    touchableBall: {
        position: "absolute",
        bottom: 100,
    },
    header: {
        ...theme.flexBetween,
        position: "absolute",
        right: constant.container,
        left: constant.container,
        top: 40
    },
    action: {
        height: 30,
        width: 30
    },
    loading: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 999999,
        backgroundColor: helper.hexToRgb("#000000", 0.5)
    },
    textLoading: {
        color: "white",
        ...theme.fontSemiBold
    }
})