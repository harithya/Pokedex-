import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DetailLayout } from '@components'
import { color, constant, theme } from '@utils'
import { Text } from '@ui-kitten/components'

const AboutScreen = () => {
    return (
        <DetailLayout title='About'>
            <View style={styles.container}>
                <Text style={styles.text}>The Pokédex is app gives information about all Pokémon in the world that are contained in its database.</Text>
                <View style={theme.flexStart}>
                    <Text style={styles.text}>Follow my profile </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://harithya.vercel.app")}>
                        <Text style={styles.link}>harithya.vercel.app</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DetailLayout>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        padding: constant.container
    },
    text: {
        lineHeight: 23
    },
    link: {
        color: color.primary,
        ...theme.fontMedium
    }
})