import { router, useFocusEffect } from "expo-router"
import {
	Button,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native"
import { useTitle } from "@/src/store/TitleContext"
import { Header } from "@/src/components/header"

export default function TabDashboard() {
	const { setTitle } = useTitle()

	useFocusEffect(() => {
		setTitle("Dashboard")
	})

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<View style={styles.body}>
				<Text>Tela Home</Text>
				<Button
					title="Ir para a tela de contato"
					onPress={() => router.push("/contact")}
				/>
			</View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
	},
	body: {
		flex: 1,
		width: "100%",
	},
})
