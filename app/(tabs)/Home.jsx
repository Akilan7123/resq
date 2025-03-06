import { View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>ResQ</Text>
                <MaterialIcons name="view-list" size={32} />
            </View>
           
            <View style={styles.content}>
                <Text style={styles.subTitle1}>Are you in Emergency?</Text>
                <Text style={styles.subTitle2}>Long Press the SOS button, your location will be shared with your emergency contacts.</Text>
            </View>

            <View style={styles.sosContainer}>
                <Animatable.View animation='pulse' iterationCount='infinite' easing='ease-in-out' >
                    <TouchableOpacity
                        style={styles.buttonSOS}
                        onLongPress={() => alert("ALERT SENT!!!")}
                    >
                        <Text style={styles.textSOS}>SOS</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

            <View style={styles.timerContent}>
                <Text style={styles.timerDescription}>Activate the Safety Timer in a risky area.Automatically trigger the SOS alert when you doesn't confirm safety.</Text>

            </View>

            <View style={styles.buttonTimer}>

                    <Text style={styles.timerText}>Timer - ( 10 mins )</Text>
                    <MaterialIcons name="arrow-right" size={32} style={styles.arrow} />

            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingTop: '3%',
    },
    title: {
        fontSize: 22,
        color: 'rgb(255, 107, 107)',
        fontWeight: 'bold',
        // fontStyle: 'italic',
    },
    content: {
        marginTop: '10%',
        marginHorizontal: 10,
        padding: 10,
    },
    subTitle1: {
        fontSize: 28,
        width: 200,
        marginBottom: 10,
    },
    subTitle2: {
        width: 250,
        fontSize: 16,
        fontStyle: 'italic',
    },
    sosContainer: {
        alignItems: 'center',
        borderWidth: 1,
        minHeight: 270,
        marginHorizontal: 15,
        marginBottom:15,
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 0, 0,0.1)',
        borderColor: 'white',
    },
    buttonSOS: {
        width: 150,
        height: 150,
        borderWidth: 15,
        borderRadius: 75,
        justifyContent: 'center',
        backgroundColor: 'rgb(219, 74, 74)',
        borderColor: 'rgb(255, 174, 174)',
        elevation: 7,
    },
    textSOS: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonTimer: {
        // flex:1,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:25,
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'rgb(255, 174, 174)',
        elevation: 5,
    },
    timerContent:{
        marginHorizontal: 20,
        marginBottom:10,
        alignItems:'flex-end',
    },
    timerDescription:{
        fontSize:15,
        maxWidth:270,
        fontStyle:'italic',
        textAlign:'center',
    },
    timerText: {
        fontSize: 18,
        fontWeight: 500,
    },
    arrow: {
        position: 'absolute',
        top: 20,
        right:10,
    }
});