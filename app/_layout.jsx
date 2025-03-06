
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OpeningScreen" options={{ title: "Open" }} />
      <Stack.Screen name="signin" options={{ title: "Signin"}} />
      <Stack.Screen name="signup" options={{ title: "Signup"}} />
      <Stack.Screen name="otpPage" options={{ title: "OTP"}} />
      <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
      <Stack.Screen name='+not-found' options={{ title: 'Oops! not found' }} />
    </Stack>
      
  );
}
