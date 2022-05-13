import { Animated, Easing, ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { color, constant, theme } from '@utils'
import { Button, Text } from '@ui-kitten/components'

const AnimationScreen = () => {
    // header opacity 0 to 1
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header]} />
            <Animated.ScrollView contentContainerStyle={styles.content}>
                {new Array(10).fill(0).map((_, index) => <View key={index} style={styles.box} />)}
            </Animated.ScrollView>
        </View>
    )
}

export default AnimationScreen

const styles = StyleSheet.create({
    container: {
        ...theme.flex1,
        backgroundColor: color.white
    },
    header: {
        height: 70,
        backgroundColor: color.fire
    },
    content: {
        paddingHorizontal: constant.container,
        paddingVertical: 20,
    },
    box: {
        height: 100,
        backgroundColor: color.bug,
        borderRadius: 10,
        marginBottom: 20
    }
})