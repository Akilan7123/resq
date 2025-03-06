import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';


export default function SigninScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, styles.commonDesign]}
                    maxLength={10}
                    placeholder='Enter mobile number'
                    placeholderTextColor='rgba(255,255,255,0.3)'
                />
                <Pressable
                    style={[styles.buttonOtp, styles.commonDesign]}
                    onPress={() => router.push('otpPage')}
                >
                    <Text style={styles.buttonText}>Send OTP</Text>
                </Pressable>
                <View style={styles.seperator}>
                    <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                    <View style={styles.line} />
                </View>
                <Pressable
                    style={[styles.buttonOtp, styles.commonDesign, styles.buttonGoogle]}
                    onPress={()=>router.push('/Home')}
                >
                    <FontAwesome name="google" size={24} style={styles.googleIcon} />
                    <Text style={styles.textGoogle}>-  Sign in with Google</Text>
                </Pressable>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Don't have an account ?
                        <Link href='/signup' >
                            <Text style={styles.footerLink}>Sign Up</Text>
                        </Link>
                    </Text>
                </View>
            </View>
            <StatusBar style={{ color: 'rgb(255, 107, 107)' }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 107, 107)',

    },
    title: {
        fontSize: 32,
        fontWeight: 800,
        color: 'white',
        marginBottom: 25,
        marginTop: '25%',
        fontStyle: 'italic',
    },
    container: {
        width: '100%',
        position: 'static',
    },
    commonDesign: {
        padding: 10,
        marginHorizontal: '10%',
        borderRadius: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 20,
        fontSize: 20,
    },
    buttonOtp: {
        backgroundColor: 'white',
        shadowOffset: { width: 2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'rgb(255, 107, 107)',
    },
    seperator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.7)',
    },
    buttonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleIcon: {
        color: 'rgb(255, 107, 107)',
    },
    textGoogle: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 600,
        color: 'rgb(255, 107, 107)',
        marginLeft: 10,
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },
    footerText: {
        color: 'white',
        fontSize: 16
    },
    footerLink: {
        textDecorationLine: 'underline',
        paddingLeft: 10,
    }
});