import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Icon, Text } from '@ui-kitten/components'
import { color, constant, helper, theme } from '@utils'
import { useNavigation } from '@react-navigation/native'
import { useNavigationProps } from '@types'


export interface DetailHeaderProps {
    title: string,
    actionIcon?: string,
    actionOnPress?: () => void
}
const DetailHeader: FC<DetailHeaderProps> = ({ title, actionIcon, actionOnPress }) => {
    const navigation = useNavigation<useNavigationProps>();
    return (
        <>
            <StatusBar translucent backgroundColor={"transparent"} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back-outline' fill={color.white} style={styles.icon} />
                    </TouchableOpacity>
                    <Text status={"control"} category="h6" style={styles.title}>{title}</Text>
                    {actionIcon ? <TouchableOpacity onPress={actionOnPress}>
                        <Icon name={actionIcon} fill={color.white} style={styles.icon} />
                    </TouchableOpacity> : <View style={styles.icon} />}
                </View>
            </View>
        </>
    )
}

export default DetailHeader

const styles = StyleSheet.create({
    header: {
        paddingTop: 24,
        paddingBottom: 16,
        paddingHorizontal: constant.container,
        ...theme.flexBetween,
    },
    title: {
        textAlign: "center",
        ...theme.fontBold,
    },
    icon: {
        height: 28,
        width: 28
    },
    container: {
        paddingTop: 25,
        color: color.primary,
        backgroundColor: color.primary,

    }
})