import HandSelector from "../components/HandSelector";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"

export default function HomeScreen() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [selectedHand, setSelectedHand] = useState<string | null>(null);

    const onChange = (event: DateTimePickerEvent, date?: Date) => {
        setShowPicker(false);

        if (event.type === 'set' && date) {
            setSelectedDate(date);
        }
    }

    const handleSubmitHand = () => {
        if (!selectedHand) return;

        console.log("Submitting", selectedHand, selectedDate);

        setSelectedHand(null);
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.gridArea}>
                <HandSelector
                    selectedHand={selectedHand}
                    onSelectHand={setSelectedHand}
                />
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.bottomButtons} onPress={() => setShowPicker(true)}>
                    <Text style={styles.buttonText}>{selectedDate.toDateString()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButtons}>
                    <Text style={styles.buttonText}>View Stats for selected day</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bottomButtons}
                    disabled={!selectedHand}
                    onPress={handleSubmitHand}
                >
                    <Text style={styles.buttonText}>Submit Selected Hand</Text>
                </TouchableOpacity>
            </View>
            {showPicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display='default'
                    onChange={onChange}
                />
            )}
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