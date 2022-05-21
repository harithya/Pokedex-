import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { FC, useRef } from 'react'
import { color } from '@utils'
import MainHeader from '../Header/MainHeader'
import Loading from '../Loading'
import Drawer from '../Drawer'

export interface LayoutProps {
    isLoading?: boolean
}
const MainLayout: FC<LayoutProps> = ({ children, isLoading }) => {
    return (
        <>
            <StatusBar backgroundColor={color.primary} />
            <View style={styles.container}>
                <MainHeader />
                {isLoading ? <Loading /> : children}
            </View>
        </>
    )
}

export default MainLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
})