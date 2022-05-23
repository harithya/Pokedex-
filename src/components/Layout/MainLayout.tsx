import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { FC, useRef } from 'react'
import { color } from '@utils'
import MainHeader from '../Header/MainHeader'
import Loading from '../Loading'
import Drawer from '../Drawer'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

export interface LayoutProps {
    isLoading?: boolean
}
const MainLayout: FC<LayoutProps> = ({ children, isLoading }) => {
    const handleMenuOpen = () => SheetManager.show("drawerId");
    return (
        <>
            <StatusBar backgroundColor={color.primary} />
            <View style={styles.container}>
                <MainHeader onMenuPress={handleMenuOpen} />
                {isLoading ? <Loading /> : children}
                <ActionSheet gestureEnabled id='drawerId'>
                    <Drawer />
                </ActionSheet>
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