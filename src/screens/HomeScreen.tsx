import React from "react";
import HandSelector from "../components/HandSelector";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.gridArea}>
                <HandSelector />
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.bottomButtons}>
                    <Text style={styles.buttonText}>Select Day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButtons}>
                    <Text style={styles.buttonText}>View Stats for selected day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButtons}>
                    <Text style={styles.buttonText}>Submit Selected Hand</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    gridArea: {
        flex: 1,
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        padding: 10,
        gap: 8,
    },
    bottomButtons: {
        flex: 1,
        height: 52,
        backgroundColor: '#2e86ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'White',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
})