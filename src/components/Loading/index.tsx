import { Animated, Easing, Image, StyleProp, StyleSheet, TextStyle, View } from 'react-native'
import React, { FC, useEffect, useRef } from 'react'
import { color, theme } from '@utils'
import { Text } from '@ui-kitten/components'

interface Props {
    style?: StyleProp<TextStyle>,
    background?: string,
}
const Loading: FC<Props> = ({ style, background }) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(Animated.timing(spinValue, {
            toValue: 360,
            duration: 2000,
            useNativeDriver: true,
            easing: Easing.bounce,
        })).start()
    }, [])

    return (
        <View style={[styles.container, { backgroundColor: background ?? "transparent" }]}>
            <Animated.Image
                source={require("../../assets/img/poke-game.png")}
                style={[styles.image, {
                    transform: [{
                        rotate: spinValue.interpolate({
                            inputRange: [0, 360],
                            outputRange: ["0deg", "360deg"]
                        })
                    }]
                }]}
            />
            <Text style={[theme.marginTop10, style]} appearance="hint">Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        ...theme.flex1,
        ...theme.toCenter
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: "contain"
    }
})