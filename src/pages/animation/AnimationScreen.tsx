import { Animated, FlatList, StyleSheet, View } from 'react-native'
import React, { useRef } from 'react'
import { color, constant } from '@utils'

const AnimationScreen = () => {

    const headerAnimation = useRef(new Animated.Value(0)).current

    headerAnimation.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100]
    });

    return (
        <View>
            <Animated.View>
                <View style={styles.header} />
            </Animated.View>
            <FlatList
                data={new Array(50).fill(0)}
                contentContainerStyle={styles.flatlist}
                renderItem={({ item }) => <View style={styles.card} />}
            />
        </View >
    )
}

export default AnimationScreen

const styles = StyleSheet.create({
    header: {
        height: 250,
        backgroundColor: color.default
    },
    card: {
        height: 100,
        backgroundColor: "#c7c9cc",
        marginBottom: 10
    },
    flatlist: {
        paddingHorizontal: constant.container,
        paddingVertical: 15
    }
})