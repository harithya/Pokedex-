import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { theme } from '@utils'
import { Text } from '@ui-kitten/components'

const Loading = () => {
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
        <View style={styles.container}>
            <Animated.Image
                source={require("../../assets/img/loading.png")}
                style={[styles.image, {
                    transform: [{
                        rotate: spinValue.interpolate({
                            inputRange: [0, 360],
                            outputRange: ["0deg", "360deg"]
                        })
                    }]
                }]}
            />
            <Text style={theme.marginTop10} appearance="hint">Loading</Text>
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