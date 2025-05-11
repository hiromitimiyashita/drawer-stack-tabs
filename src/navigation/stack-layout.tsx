import { Stack } from "expo-router"

export default function StackLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ title: "Welcome" }} />
			<Stack.Screen name="(drawer)" options={{ title: "navigation" }} />
		</Stack>
	)
}
