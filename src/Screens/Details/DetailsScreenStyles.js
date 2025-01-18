import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const scale = (size) => PixelRatio.roundToNearestPixel((deviceWidth / 375) * size);

const DetailsScreenStyles = StyleSheet.create({
  container: {
    padding: scale(20),
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: scale(100),
  },
  header: {
    justifyContent: "flex-end",
    width: scale(330),
    paddingRight: scale(8),
  },
  avatar: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    alignSelf: "center",
  },
  title: {
    fontSize: scale(22),
    fontWeight: "bold",
    marginTop: scale(10),
    textAlign: "center",
    color: "#000",
    lineHeight: scale(22),
  },
  titlecontributor: {
    fontSize: scale(18),
    fontWeight: "500",
    marginTop: scale(10),
    color: "#000",
    lineHeight: scale(22),
  },
  description: {
    fontSize: scale(16),
    marginVertical: scale(10),
    textAlign: "center",
    color: "#85878C",
    lineHeight: scale(20),
    letterSpacing: 0.25,
  },
  info: {
    fontSize: scale(14),
    marginVertical: scale(5),
    color: "#000",
    fontWeight: "500",
    lineHeight: scale(20),
    letterSpacing: 0.25,
  },
  star: {
    marginVertical: scale(7),
  },
  favoriteButton: {
    alignSelf: "flex-end",
  },
  items: {
    top: scale(30),
    paddingVertical: scale(15),
    paddingHorizontal: scale(20),
    borderRadius: scale(15),
    elevation: 1,
  },
  infocontainer: {
    flexDirection: "row",
    gap: scale(10),
    top: scale(15),
  },
  infovalue: {
    color: "#85878C",
    fontSize: scale(14),
    marginVertical: scale(5),
    fontWeight: "bold",
    lineHeight: scale(20),
    letterSpacing: 0.25,
  },
  contributorSection: {
    marginTop: scale(10),
  },
  contributorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(10),
  },
  contributorAvatar: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    marginRight: scale(10),
  },
  contributorName: {
    fontSize: scale(16),
    color: "#000",
  },
  noContributors: {
    marginTop: scale(10),
    textAlign: "center",
    color: "#85878C",
  },
});

export default DetailsScreenStyles;
