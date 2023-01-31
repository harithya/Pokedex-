import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { Text } from '@ui-kitten/components'
import { constant, theme } from '@utils'

interface Props {
    title: string,
    style?: StyleProp<ViewStyle>
}
const Section: FC<PropsWithChildren<Props>> = ({ children, title, style }) => {
    return (
        <View style={styles.section}>
            <View style={styles.header}>
                <Text category={"h6"} style={theme.fontSemiBold}>{title}</Text>
            </View>
            <View style={[styles.body, style]}>
                {children}
            </View>
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15
    },
    body: {
        marginTop: 10
    },
    section: {
        marginBottom: constant.container
    }
})