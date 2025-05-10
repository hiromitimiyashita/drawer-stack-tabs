import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { DrawerSceneWrapper } from "@/src/components/drawer-scene-wrapper"
import { Header } from "@/src/components/header"
import { useTitle } from "@/src/store/TitleContext"
import { useFocusEffect } from "expo-router"

export default function ScreenSetttings() {
	const { setTitle } = useTitle()
	useFocusEffect(() => {
		setTitle("Configurações")
	})

	return (
		<DrawerSceneWrapper>
			<SafeAreaView style={styles.container}>
				<Header />
				<View style={styles.body}>
					<Text>Tela de configurações</Text>
				</View>
			</SafeAreaView>
		</DrawerSceneWrapper>
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
