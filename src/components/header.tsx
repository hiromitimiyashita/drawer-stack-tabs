import { Image, StyleSheet, Text, View } from "react-native"
import { useTitle } from "../store/TitleContext"
import { DrawerToggleButton } from "@react-navigation/drawer"

export function Header() {
	const { title } = useTitle()

	return (
		<View style={styles.container}>
			<View style={styles.boxLogo}>
				<Image
					source={require("@/src/assets/images/logo.png")}
					style={styles.logo}
				/>
			</View>

			<View style={styles.boxTitle}>
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.boxToogleButton}>
				<DrawerToggleButton />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
	},
	boxLogo: {},
	logo: {
		width: 30,
		height: 30,
		borderRadius: 12,
	},
	boxToogleButton: {},
	boxTitle: {},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
})
