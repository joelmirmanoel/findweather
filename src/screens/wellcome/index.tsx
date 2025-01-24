import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function WellcomeScrreen() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Hello word</Text>
        </View>
    );
}