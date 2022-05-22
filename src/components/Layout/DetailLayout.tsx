import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import DetailHeader, { DetailHeaderProps } from '../Header/DetailHeader'
import { color, theme } from '@utils'

type Props = DetailHeaderProps

const DetailLayout: FC<Props> = ({ children, title, actionIcon, actionOnPress }) => {
    return (
        <View style={styles.container}>
            <DetailHeader
                title={title}
                actionIcon={actionIcon}
                actionOnPress={actionOnPress}
            />
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