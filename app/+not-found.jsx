import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not found' }} />
            <View style={styles.container}>
                <Link href='/OpeningScreen' style={styles.link} >Go back To Home</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link:{
        textDecorationLine:'underline',
        fontSize:18,
    }
});