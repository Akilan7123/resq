import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';

export default function OtpPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subTitle}>OTP has been sent to your mobile number. Please enter OTP</Text>

            <Pressable
                style={[styles.buttonVerify]}
                onPress={() => router.push('/Home')}
            >
                <Text style={styles.buttonText}>Verify</Text>
            </Pressable>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Didn't receive an OTP ?
                    <Link href='/signup' >
                        <Text style={styles.footerLink}>Resend</Text>
                    </Link>
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        marginTop: '30%',
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 17,
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 25,
    },
    buttonVerify: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        paddingHorizontal: 30,

    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },
    footerText: {
        fontSize: 16
    },
    footerLink: {
        textDecorationLine: 'underline',
        paddingLeft: 10,
    }
});