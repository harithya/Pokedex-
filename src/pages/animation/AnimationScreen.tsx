import { Animated, FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { color, helper } from '@utils'

const AnimationScreen = () => {

    const scrollY = useRef(new Animated.Value(0)).current

    const scrollInterpolate = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollY.setValue(e.nativeEvent.contentOffset.y - 100);
    }
    return (
        <View style={styles.container}>
            <Animated.View style={{
                opacity: scrollInterpolate
            }}>
                <View style={styles.header} />
            </Animated.View>
            <FlatList
                data={new Array(100).fill(0)}
                contentContainerStyle={styles.contentContainer}
                renderItem={({ item }) => <View style={styles.card} />}
                keyExtractor={(item, index) => index.toString()}
                onScroll={onScroll}
            />
        </View>
    )
}

export default AnimationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: 120,
        backgroundColor: helper.hexToRgb("#f54242", 0.5),
        marginBottom: 10
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    header: {
        backgroundColor: color.primary,
        height: 100
    }
})