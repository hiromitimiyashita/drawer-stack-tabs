import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { useTitle } from "@/src/store/TitleContext"
import { useFocusEffect } from "expo-router"
import { Header } from "@/src/components/header"

export default function Tab1() {
	const { setTitle } = useTitle()
	useFocusEffect(() => {
		setTitle("Tab 1")
	})
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<View style={styles.body}>
				<Text>Tela 1</Text>
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
