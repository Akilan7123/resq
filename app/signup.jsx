import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";

export default function SigninScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, styles.commonDesign]}
                    maxLength={10}
                    placeholder='Enter Mobile Number'
                    placeholderTextColor='rgba(255, 107, 107,0.3)'
                />
                <Pressable
                    style={[styles.buttonOtp, styles.commonDesign]}
                    onPress={() => alert("OTP sent")}
                >
                    <Text style={styles.buttonText}>Send OTP</Text>
                </Pressable>
                <View style={styles.seperator}>
                    <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                    <View style={styles.line} />
                </View>
                <Pressable style={[styles.buttonOtp, styles.commonDesign, styles.buttonGoogle]}>
                    <FontAwesome name="google" size={24} style={styles.googleIcon} />
                    <Text style={styles.textGoogle}>-  Sign up with Google</Text>
                </Pressable>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Already have an account ? 
                        <Link href='/signin' >
                            <Text style={styles.footerLink}>Sign In</Text>
                        </Link>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    title: {
        fontSize: 32,
        fontWeight:800,
        color: 'rgb(255, 107, 107)',
        marginBottom: 25,
        marginTop: '25%',
        fontStyle:'italic',
    },
    container: {
        width: '100%',
        position:'static',
    },
    commonDesign: {
        padding: 10,
        marginHorizontal: '10%',
        borderRadius: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(255, 107, 107)',
        marginBottom: 20,
        fontSize: 20,
    },
    buttonOtp: {
        backgroundColor: 'rgb(255, 107, 107)',
        shadowOffset: { width: 2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
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
        backgroundColor: 'rgba(255, 107, 107,0.7)',
    },
    text: {
        marginHorizontal: 10,
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgba(255, 107, 107,0.7)',
    },
    buttonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleIcon: {
        color: 'white',
    },
    textGoogle: {
        fontSize: 20,
        fontStyle:'italic',
        fontWeight:600,
        color: 'white',
        marginLeft: 10,
    },
    footerContainer:{
        width:'100%',
        alignItems:'center',
        position:'absolute',
        bottom:10,
    },
    footerText:{
        color:'rgb(255, 107, 107)',
        fontSize:16
    },
    footerLink:{
        textDecorationLine:'underline',
        paddingLeft:10,
    }
});