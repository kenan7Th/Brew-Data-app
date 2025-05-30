import React, { useRef, useState } from "react";
import { View, Keyboard } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SearchBar from "../components/SearchBar";
import IconButton from "../components/IconButton";
import { styles } from "../styles/mapStyles";

const INITIAL_REGION: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState(INITIAL_REGION);

  const handleSearch = () => {
    Keyboard.dismiss();
    if (searchQuery.toLowerCase().includes("san francisco")) {
      const newRegion = {
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setRegion(newRegion);
      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsUserLocation
        showsMyLocationButton
      />

      <View style={[styles.searchContainer, { top: insets.top + 10 }]}>
        <View style={{ flex: 1 }}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            onClear={() => setSearchQuery("")}
          />
        </View>

        <View style={{ flexDirection: "row", marginLeft: 10, gap: 8 }}>
          <IconButton
            icon="map"
            onPress={() => console.log("Map pressed")}
            backgroundColor="#FFFFFF"
            iconColor="#000000"
            size={40}
          />
          <IconButton
            icon="filter"
            onPress={() => console.log("Plane pressed")}
            backgroundColor="#FFFFFF"
            iconColor="#000000"
            size={40}
          />
        </View>
      </View>

      <View style={styles.centerFabWrapper}>
        <IconButton icon="add" onPress={() => console.log("Plus pressed")} />
      </View>

      <View style={styles.fabGroupContainer}>
        <IconButton
          icon="paper-plane"
          onPress={() => console.log("Custom icon pressed")}
          size={50}
          backgroundColor="#656E64"
        />
      </View>
    </View>
  );
}
