import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add contacts'
                >
                </TextInput>
                <MaterialIcons name="add" size={32} style={styles.icon} />

            </View>
            <View style={styles.imageContainer}>
                <Image source={require('@/assets/images/contact.png')} style={styles.image} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        marginHorizontal: 20,
        elevation: 8,
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 15,
        fontSize: 18,
        backgroundColor: 'white',
    },
    icon: {
        position: 'absolute',
        right: '18',
    },
    imageContainer:{
        flex:1,
        marginTop:'30%',
        alignItems: 'center',
    },
});