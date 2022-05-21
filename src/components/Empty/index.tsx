import { StyleSheet, View } from 'react-native'
import React from 'react'
import { theme } from '@utils'
import { Text } from '@ui-kitten/components'

const Empty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.empty}>Pokemon empty {'\n'} go catch them all !! </Text>
        </View>
    )
}

export default Empty

const styles = StyleSheet.create({
    empty: {
        textAlign: "center",
        lineHeight: 25
    },
    container: {
        flex: 1,
        ...theme.toCenter
    }
})