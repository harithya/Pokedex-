import { Dimensions, StyleSheet } from "react-native";
import color from "./color";
import constant from "./constant";
import font from "./font";

const theme = StyleSheet.create({
    toCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: constant.container,
    },
    content: {
        paddingHorizontal: constant.container,
        paddingVertical: constant.container,
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexCenterHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    boxShadow: {
        shadowColor: color.shadow,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.41,
        elevation: 14,
    },
    marginTop10: {
        marginTop: 10
    },
    marginTop5: {
        marginTop: 5
    },
    marginBottom10: {
        marginBottom: 10
    },
    marginBottom5: {
        marginBottom: 5
    },
    marginRight10: {
        marginRight: 10
    },
    marginRight5: {
        marginRight: 5
    },
    marginLeft10: {
        marginLeft: 10
    },
    marginLeft5: {
        marginLeft: 5
    },
    flex1: {
        flex: 1
    },
    input: {
        marginBottom: 18,
    },
    toBottom: {
        position: 'absolute',
        right: constant.container,
        left: constant.container,
        bottom: constant.container
    },
    fontRegular: {
        fontFamily: font.regular
    },
    fontSemiBold: {
        fontFamily: font.semiBold,
    },
    fontBold: {
        fontFamily: font.bold
    },
    fontMedium: {
        fontFamily: font.medium
    },
    fontLight: {
        fontFamily: font.light
    },
    footer: {
        position: 'absolute',
        right: constant.container,
        left: constant.container,
        bottom: constant.container
    },
    borderRadiusNone: {
        borderRadius: 0
    },
    marginBottom0: {
        marginBottom: 0
    },
    textArea: {
        minHeight: 60,
        textAlignVertical: 'top'
    },
    relative: {
        position: 'relative'
    },
    textCenter: {
        textAlign: 'center'
    },
    textWhite: {
        color: color.white
    },
    icon: {
        height: 24,
        width: 24,
    },
    lineHeight20: {
        lineHeight: 20
    },
    loadingContainer: {
        flex: 1,
        marginTop: -100,
        justifyContent: "center",
        alignItems: "center"
    },
    flatlist: {
        height: Dimensions.get("window").height
    },
    section: {
        marginBottom: constant.container
    }
})

export default theme;