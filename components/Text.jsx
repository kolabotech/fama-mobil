import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Text = ({ children, type = 'default', style, ...props }) => {
    // Chargement de la police Quicksand
    const [loaded] = useFonts({
        Quicksand: require("../assets/fonts/Quicksand-Regular.ttf"),
    });

    // Sélectionner le style en fonction du type
    const getTypeStyle = () => {
        switch (type) {
            case 'titre':
                return styles.title;
            case 'sous-titre':
                return styles.subtitle;
            case 'description':
                return styles.description;
            case 'default':
            default:
                return styles.default;
        }
    };

    if (!loaded) {
        return null;
    }

    return (
        <RNText style={[getTypeStyle(), style]} {...props}>
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Quicksand',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontFamily: 'Quicksand',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#555',
    },
    default: {
        fontFamily: 'Quicksand',
        fontSize: 16,
        color: '#666',
    },
    description: {
        fontFamily: 'Quicksand',
        fontSize: 14,
        color: '#888',
        fontStyle: 'italic',
    },
});

export default Text;