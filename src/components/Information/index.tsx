import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Text } from '@ui-kitten/components'
import { theme } from '@utils'

interface Props {
    title: string,
    value: string
}
const Information: FC<Props> = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text >{title}</Text>
                <Text style={styles.dot}> : </Text>
            </View>
            <Text style={theme.flex1}>{value}</Text>
        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    head: {
        width: 100,
        ...theme.flexBetween,
        marginRight: 10,
        marginBottom: 5,
    },
    container: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    dot: {
        textAlign: "right",
        // paddingRight: 10
    }
})