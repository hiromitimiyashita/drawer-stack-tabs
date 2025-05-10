import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { useTitle } from "@/src/store/TitleContext"
import { useFocusEffect } from "expo-router"
import { Header } from "@/src/components/header"

export default function Tab4() {
	// recarregando o titulo ao entrar na tela.
	const { setTitle } = useTitle()
	useFocusEffect(() => {
		setTitle("Tab 4")
	})

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<View style={styles.body}>
				<Text>Tela 4</Text>
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
