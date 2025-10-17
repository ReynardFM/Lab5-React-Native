import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AndroidButton = ({ title, onPress, variant = 'primary', disabled = false, darkMode = false }) => {
    const getVariantStyle = () => {
        if (disabled) return styles.disabled;
        if (darkMode) {
            switch (variant) {
                case 'primary':
                    return styles.primaryDark;
                case 'secondary':
                    return styles.secondaryDark;
                default:
                    return styles.primaryDark;
            }
        } else {
            switch (variant) {
                case 'primary':
                    return styles.primary;
                case 'secondary':
                    return styles.secondary;
                default:
                    return styles.primary;
            }
        }
    };

    const getTextStyle = () => {
        if (darkMode) {
            return variant === 'secondary' ? styles.secondaryTextDark : styles.primaryText;
        } else {
            return variant === 'secondary' ? styles.secondaryText : styles.primaryText;
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, getVariantStyle()]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}>
            <Text style={[styles.text, getTextStyle()]}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 4,
        alignItems: 'center',
        elevation: 2,
    },
    primary: {
        backgroundColor: '#2196F3',
    },
    secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#2196F3',
        elevation: 0,
    },
    primaryDark: {
        backgroundColor: '#1976D2',
    },
    secondaryDark: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#64B5F6',
        elevation: 0,
    },
    disabled: {
        backgroundColor: '#e0e0e0',
        elevation: 0,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1.25,
    },
    primaryText: {
        color: '#ffffff',
    },
    secondaryText: {
        color: '#2196F3',
    },
    secondaryTextDark: {
        color: '#64B5F6',
    },
});

export default AndroidButton;