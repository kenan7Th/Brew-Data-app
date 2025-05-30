import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: "absolute",
    left: 20,
    right: 20, // Add this to prevent overflow on the right
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    zIndex: 10,
  },
  centerFabWrapper: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  fabGroupContainer: {
    position: "absolute",
    bottom: 40,
    right: 20,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    zIndex: 10,
  },
});
