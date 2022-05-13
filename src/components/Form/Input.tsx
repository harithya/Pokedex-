import { StyleProp, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC, memo } from 'react'
import { color, theme } from '@utils'
import { Icon, InputProps, Text } from '@ui-kitten/components'

interface Props extends InputProps {
    label?: string,
    placeholder?: string,
    leftIcon?: string,
    rightIcon?: string,
    style?: StyleProp<ViewStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    textArea?: boolean,
    numberOfLines?: number,
    disabled?: boolean,
    righIconOnPress?: () => void,
    error?: string
}
const Input: FC<Props> = (props) => {
    return (
        <View style={[theme.input, props.containerStyle]}>
            {(props.label) && <Text category={'label'} style={styles.label}>{props.label}</Text>}
            <View style={[styles.formInput, props.error ? styles.error : {}, props.style]}>
                <View style={styles.content}>
                    {props.leftIcon &&
                        <Icon fill={color.font} name={props.leftIcon} style={[styles.icon, styles.iconLeft]} />}
                    <TextInput
                        {...props}
                        style={[styles.input, props.textArea && styles.textArea]}
                        placeholder={props.placeholder}
                        multiline={props.textArea}
                        editable={!props.disabled}
                        value={props.value}
                        selectionColor={color.primary}
                        onChangeText={props.onChangeText}
                        numberOfLines={(props.textArea) ? (props.numberOfLines ?? 4) : 1}
                    />
                </View>
                {props.rightIcon &&
                    <TouchableOpacity onPress={props.righIconOnPress}>
                        <Icon fill={color.font} name={props.rightIcon} style={styles.icon} />
                    </TouchableOpacity>}

                {props.error && <Icon fill={color.danger} name={"alert-circle-outline"} style={styles.icon} />}
            </View>
            {props.error &&
                <Text status={"danger"} style={[theme.marginTop5, theme.fontMedium]} category="label">{props.error}</Text>}
        </View>
    )
}

export default memo(Input)

const styles = StyleSheet.create({
    formInput: {
        borderWidth: 1,
        borderColor: color.backgroundInput,
        backgroundColor: color.backgroundInput,
        paddingHorizontal: 13,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 3,
    },
    label: {
        marginBottom: 5,
        ...theme.fontMedium
    },
    input: {
        ...theme.fontRegular,
        flex: 1,
    },
    icon: {
        height: 20,
        width: 20,
    },
    iconLeft: {
        marginRight: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 1,
    },
    textArea: {
        textAlignVertical: "top",
    },
    error: {
        borderColor: color.danger,
    }
})