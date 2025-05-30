import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  onClear: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onSubmitEditing,
  onClear,
}: Props) {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color="#999" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a place"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Ionicons name="close" size={18} color="#999" onPress={onClear} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
});
