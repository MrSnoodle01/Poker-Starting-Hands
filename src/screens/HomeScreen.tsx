import React from "react";
import HandSelector from "../components/HandSelector";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.gridArea}>
                <HandSelector />
            </View>
            <TouchableOpacity style={styles.bottomButtons}>
                <Text style={styles.buttonText}>View Stats for selected day</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
    },
    gridArea: {
        flex: 1,
    },
    bottomButtons: {
        padding: 18,
        backgroundColor: "#2e86ff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "White",
        fontWeight: "bold",
        fontSize: 16,
    },
})