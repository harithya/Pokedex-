import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color, theme } from '@utils'

const FooterLoading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator color={color.primary} size="large" />
        </View>
    )
}

export default FooterLoading

const styles = StyleSheet.create({
    loading: {
        ...theme.toCenter,
        paddingBottom: 20
    }
})