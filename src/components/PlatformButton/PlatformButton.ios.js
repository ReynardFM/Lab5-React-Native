import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IOSButton = ({ title, onPress, variant = 'primary', disabled = false, darkMode = false }) => {
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
            <Text style={[styles.text, getTextStyle()]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    primaryDark: {
        backgroundColor: '#0056B3',
    },
    secondaryDark: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    disabled: {
        backgroundColor: '#f2f2f7',
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
    },
    primaryText: {
        color: '#ffffff',
    },
    secondaryText: {
        color: '#007AFF',
    },
    secondaryTextDark: {
        color: '#007AFF',
    },
});

export default IOSButton;