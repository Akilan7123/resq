import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>

            <Tabs.Screen
                name='Home'
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) => (
                        (focused)?
                            <MaterialIcons name="home" size={28} color='rgb(255, 107, 107)' /> :
                            <MaterialIcons name="home" size={28} color='rgb(231, 231, 231)' /> 
                    ),
                    tabBarActiveTintColor:'rgb(255, 107, 107)'
                }}
            />
            <Tabs.Screen name='Location'
                options={{
                    title: 'Location',
                    headerShown:true,
                    tabBarIcon: ({focused}) => (
                        (focused)?
                            <MaterialIcons name="location-on" size={28} color='rgb(255, 107, 107)'/> :
                            <MaterialIcons name="location-on" size={28} color='rgb(231, 231, 231)' /> 
                    ),
                    tabBarActiveTintColor:'rgb(255, 107, 107)',
                }} 
            />
            <Tabs.Screen name='Contacts'
                options={{
                    title: 'Contacts',
                    headerShown:true,
                    tabBarIcon: ({focused}) => (
                        (focused)?
                            <MaterialIcons name="contacts" size={28} color='rgb(255, 107, 107)'/> :
                            <MaterialIcons name="contacts" size={28} color='rgb(231, 231, 231)' /> 
                    ),
                    tabBarActiveTintColor:'rgb(255, 107, 107)',
                }} />
            <Tabs.Screen name='Profile'

                options={{
                    title: 'Profile',
                    headerShown:true,
                    tabBarIcon: ({focused}) => (
                        (focused)?
                            <MaterialIcons name="person" size={28} color='rgb(255, 107, 107)'/> :
                            <MaterialIcons name="person" size={28} color='rgb(231, 231, 231)' /> 
                    ),
                    tabBarActiveTintColor:'rgb(255, 107, 107)',
                }} />


        </Tabs>

    );
}