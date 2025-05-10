import { router } from "expo-router"
import {
	Button,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
} from "react-native"

export default function StackWelcome() {
	const handleStart = () => {
		// vai para outra tela e não volta para essa aqui, é como fosse a
		// tela de boas vindas.
		router.replace("/(drawer)/(tabs)")
	}
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../assets/logo.png")}
				style={styles.logo}
				resizeMode="cover"
			/>
			<Text style={styles.h1}>Seja Bem vindo!</Text>
			<Text style={styles.h2}>O melhor App para finança pessoal.</Text>
			<Button title="Começar" onPress={handleStart} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 200,
		height: 200,
		marginBottom: 10,
	},
	h1: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 10,
	},
	h2: {
		fontSize: 16,
		marginBottom: 10,
	},
})
