import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { color, theme } from '@utils'
import { Text } from '@ui-kitten/components'

interface Props {
    color: string,
    title: string,
    style?: StyleProp<ViewStyle>
}
const Badge: FC<Props> = ({ color, title, style }) => {
    return (
        <View style={[styles.badge, { backgroundColor: color }, style]}>
            <Text category={"p2"} status="control" style={theme.fontMedium}>{title}</Text>
        </View>
    )
}

export default Badge

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50
    }
})