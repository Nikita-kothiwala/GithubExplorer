// import { StyleSheet, Dimensions } from "react-native";
// const { height, width } = Dimensions.get('window')
// const FavouriteScreenStyles = StyleSheet.create({

//     container: {
//         padding: 20,
// flex:1
//     },
//     emptyText: {
//         fontSize: 16,
//         textAlign: 'center',
//         marginTop: 20,
//         color: "#000",
//         fontWeight: "500"
//     },
//     item: {
//         padding: 10,
//         borderBottomColor: '#ddd',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         backgroundColor: "#FFF",
//         height: 55,
//         borderRadius: 15,
//         alignItems: "center",
//         elevation:1,
//         marginTop:9
//     },
//     title: {
//         fontSize: 16,
//         color: "#000",
//         fontWeight: "500",
//         lineHeight: 24
//     },
//     remove: {
//         color: 'red',
//         fontSize: 14,
//     },
//     header: {
//         flexDirection: "row",
//         height: height * 0.09,
//         alignItems: "center",
//         justifyContent: "center",
//         position: 'relative',

//     },
//     text: {
//         color: "#000308",
//         fontSize: width * 0.06,
//         fontWeight: "500",
//         lineHeight: 28,
//         left: "41%",
//         textAlign: "center",
//         position: 'absolute',
//         transform: [{ translateX: -width * 0.18 }],
//     },
//     back: {
//         position: 'absolute',
//         backgroundColor: "#FFFFFF",
//         borderRadius: width * 0.08,
//         padding: 5,
//         gap: 10,
//         height: width * 0.1,
//         width: width * 0.1,
//         left: width * 0.002,
//         alignItems: "center",
//         justifyContent: "center",
//     },

// })

// export default FavouriteScreenStyles

import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const scale = (size) => PixelRatio.roundToNearestPixel((deviceWidth / 375) * size);

const FavouriteScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: scale(20),
    },
    emptyText: {
        fontSize: scale(16),
        textAlign: "center",
        marginTop: scale(20),
        color: "#000",
        fontWeight: "500",
    },
    item: {
        padding: scale(10),
        backgroundColor: "#FFF",
        height: scale(55),
        borderRadius: scale(15),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: scale(9),
        elevation: 1,
    },
    title: {
        fontSize: scale(16),
        color: "#000",
        fontWeight: "500",
    },
    remove: {
        color: "red",
        fontSize: scale(14),
    },
    header: {
        flexDirection: "row",
        height: deviceHeight * 0.09,
        alignItems: "center",
        justifyContent: "space-between",
    },
    back: {
        position: "absolute",
        backgroundColor: "#FFF",
        borderRadius: deviceWidth * 0.08,
        height: deviceWidth * 0.1,
        width: deviceWidth * 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
                color: "#000308",
                 fontSize: deviceWidth * 0.06,
                fontWeight: "500",
                 lineHeight: 28,
                 left: "41%",
                textAlign: "center",
            position: 'absolute',
             transform: [{ translateX: -deviceWidth * 0.18 }],
            },
});

export default FavouriteScreenStyles;
