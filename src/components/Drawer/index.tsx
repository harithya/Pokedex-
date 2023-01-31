import { Linking, View } from 'react-native'
import React, { FC } from 'react'
import Menu from '../Menu'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProps } from '@types'
import { SheetManager } from 'react-native-actions-sheet'

const Drawer: FC = () => {
    const navigation = useNavigation<useNavigationProps>()

    const handleNavigation = (callBack?: void) => {
        SheetManager.hide("drawerId");
        callBack
    }
    return (
        <View>
            <Menu title='About' icon='info-outline' onPress={() => handleNavigation(navigation.navigate("About"))} />
            <Menu title='Source Code' icon='code-outline' onPress={() => Linking.openURL("https://github.com/harithya/Pokedex-")} />
        </View>
    )
}

export default Drawer

