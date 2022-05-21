import { Animated, StyleSheet, View } from 'react-native'
import React, { FC, useRef, useEffect } from 'react'
import { Text } from '@ui-kitten/components'
import { color, constant, theme } from '@utils'

interface Props {
    colorTheme: string,
    title: string,
    value: number
}
const Statistic: FC<Props> = ({ colorTheme, title, value }) => {

    const widthAnimation = useRef(new Animated.Value(0)).current
    const widthInterpolate = widthAnimation.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1]
    })

    useEffect(() => {

        const scaleX = Animated.timing(widthAnimation, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
        })
        scaleX.reset();
        scaleX.start();
    }, [value])



    return (
        <View style={styles.stat}>
            <View style={styles.titleContainer}>
                <Text numberOfLines={1} category={"p2"} style={[styles.title, { color: colorTheme }]}>{title}</Text>
            </View>
            <View style={styles.body}>
                <Text category={"p2"} style={styles.value}>{value}</Text>
                <View style={theme.flex1}>
                    <View style={styles.slider}>
                        <Animated.View style={[styles.sliderValue, {
                            width: `${(value - 40) < 0 ? 0 : ((value - 40) > 100 ? 100 : value - 40)}%`,
                            backgroundColor: colorTheme,
                            transform: [{
                                scaleX: widthInterpolate
                            }]
                        }]} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Statistic

const styles = StyleSheet.create({
    stat: {
        ...theme.flexStart
    },
    titleContainer: {
        width: 100,
        borderRightWidth: 2,
        paddingVertical: 8,
        marginRight: constant.container,
        borderRightColor: color.backgroundInput
    },
    slider: {
        height: 10,
        width: "100%",
        borderRadius: 150,
        backgroundColor: color.backgroundInput,
    },
    body: {
        ...theme.flexStart,
        flex: 1,
    },
    value: {
        width: 40,
    },
    sliderValue: {
        height: 10,
        borderRadius: 150,
    },
    title: {
        ...theme.fontMedium,
        paddingRight: 10,
    }
})