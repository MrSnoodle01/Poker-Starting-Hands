import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveHand = async (hand: string, date: string) => {
    const key = `hands-${date}`;
    const stored = await AsyncStorage.getItem(key);
    const hands = stored ? JSON.parse(stored) : [];
    hands.push(hand);
    await AsyncStorage.setItem(key, JSON.stringify(hands));
};

export const loadHands = async (date: string) => {
    const key = `hands-${date}`;
    const stored = await AsyncStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
};

export const getHandFrequencies = async (date: string) => {
    const hands = await loadHands(date);
    const freq: Record<string, number> = {};
    hands.forEach((hand: string) => {
        freq[hand] = (freq[hand] ?? 0) + 1;
    });
    return freq;
};
