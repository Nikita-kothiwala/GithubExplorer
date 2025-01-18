
import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');
const scale = (size) => PixelRatio.roundToNearestPixel((deviceWidth / 375) * size);

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(10),
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: scale(10),
        marginTop: scale(15),
        height: scale(34),
        alignItems: "center",
    },
    text: {
        color: "#000308",
        fontSize: scale(20),
        fontWeight: "600",
        lineHeight: scale(28),
    },
    input: {
        padding: scale(10),
        borderWidth: 1,
        borderRadius: scale(5),
        marginBottom: scale(10),
    },
    themeIcon: {
        alignSelf: "center",
        alignItems: "center",
    },
    circle: {
        width: scale(50),
        height: scale(50),
        backgroundColor: "gray",
        borderRadius: scale(25),
    },
    searchbar: {
        flexDirection: "row",
    },
    searchinput: {
        fontSize: scale(15),
        marginLeft: scale(8),
        color: "#85878C",
    },
    search: {
        width: deviceWidth * 0.94,
        height: scale(47),
        borderRadius: scale(45),
        backgroundColor: "#FFF",
        flexDirection: "row",
        top: scale(20),
        paddingHorizontal: scale(10),
        alignItems: "center",
        shadowColor: "#8a8c92",
        elevation: 11,
        marginBottom: scale(20),
    },
    searchImage: {
        marginLeft: scale(6),
        width: scale(22),
        height: scale(22),
    },
    toggle: {
        position: "absolute",
        bottom: scale(10),
        right: scale(10),
        height: scale(65),
        width: scale(65),
        borderRadius: scale(43),
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
    toggle1: {
        backgroundColor: "#FFF",
        height: scale(45),
        width: scale(45),
        borderRadius: scale(43),
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
    },
    list: {
        marginTop: scale(20),
        padding: scale(2),
        elevation: 11,
    },
    errorMessage:{
        fontSize: scale(14),
        fontWeight: "500",
        lineHeight: scale(24), 
        top:scale(20)
    }
});

export default HomeScreenStyles;
