import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import DetailHeader from '../Header/DetailHeader'
import { color, theme } from '@utils'

const DetailLayout: FC = ({ children }) => {
    return (
        <View style={styles.container}>
            <DetailHeader title='My Pokemon' />
            <View style={theme.flex1}>
                {children}
            </View>
        </View>
    )
}

export default DetailLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    }
})