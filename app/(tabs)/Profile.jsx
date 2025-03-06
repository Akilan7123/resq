import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import profileDetails from '@/components/profileDetails';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {

    const renderItem = ({ item }) => (
        <>
            <View style={[styles.container]}>
                <MaterialIcons name={item.icon} style={styles.icon} size={30} />
                <Text style={styles.text}>{item.name}</Text>

            </View>
            <View style={styles.line} />
        </>

    );

    return (
        <SafeAreaView style={styles.list}>
            <FlatList
                renderItem={renderItem}
                data={profileDetails}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        marginHorizontal: 20,
    },
    container: {
        flexDirection: 'row',
        marginTop:15,
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    }
});