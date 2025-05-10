import { Stack } from "expo-router"
import { TitleProvider } from "@/src/contexts/TitleContext"
export default function Layout() {
	return (
		<TitleProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" options={{ title: "Welcome" }} />
				<Stack.Screen
					name="(drawer)"
					options={{ title: "navigation" }}
				/>
			</Stack>
		</TitleProvider>
	)
}
