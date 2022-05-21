import { DrawerLayoutAndroid, Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { color, theme } from '@utils'
import Menu from '../Menu'


const Drawer: FC = ({ children, }) => {
    return (
        <View style={theme.flex1}>
            <View style={styles.head}>
                <Image source={require("../../assets/img/logo.png")} style={styles.logo} />
            </View>

            <View>
                <Menu
                    title='Home'
                    icon='compass-outline'
                    onPress={() => { }}
                />
                <Menu
                    title='Information'
                    icon='info-outline'
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 70,
        width: 200,
        resizeMode: "contain"
    },
    head: {
        ...theme.toCenter,
        paddingVertical: 20
    }
})