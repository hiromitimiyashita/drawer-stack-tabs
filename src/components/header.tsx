// Componente Header: exibe o logo, o título da tela e o botão para abrir o Drawer
// Utiliza contexto para obter o título, garantindo que cada tela mostre o título correto

import { Image, StyleSheet, Text, View } from "react-native" // Importa componentes básicos do React Native
import { useTitle } from "../store/TitleContext" // Importa contexto para acessar o título da tela
import { DrawerToggleButton } from "@react-navigation/drawer" // Importa botão para abrir/fechar o Drawer

export function Header() {
	// Obtém o título atual usando o contexto de título
	const { title } = useTitle()

	// Renderiza o componente Header
	return (
		<View style={styles.container}>
			{/* Logo do aplicativo à esquerda */}
			<View style={styles.boxLogo}>
				<Image
					source={require("@/src/assets/images/logo.png")} // Caminho relativo para o logo
					style={styles.logo}
				/>
			</View>

			{/* Título dinâmico da tela, centralizado */}
			<View style={styles.boxTitle}>
				<Text style={styles.title}>{title}</Text>
			</View>

			{/* Botão para abrir/fechar o Drawer, à direita */}
			<View style={styles.boxToogleButton}>
				<DrawerToggleButton />
			</View>
		</View>
	)
}

// Estilos do Header
const styles = StyleSheet.create({
	container: {
		width: "100%",           // Ocupa toda a largura disponível
		height: 60,              // Altura fixa
		flexDirection: "row",    // Itens em linha
		alignItems: "center",    // Centraliza verticalmente
		justifyContent: "space-between", // Espaço entre os itens
		paddingLeft: 15,         // Espaçamento à esquerda
		borderBottomWidth: 1,    // Linha na parte inferior
		borderBottomColor: "#ccc",      // Cor da linha
		boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)", // Sombra leve (web)
	},
	boxLogo: {
		// Espaço reservado para o logo
	},
	logo: {
		width: 30,
		height: 30,
		borderRadius: 12, // Deixa o logo arredondado
	},
	boxToogleButton: {
		// Espaço reservado para o botão do Drawer
	},
	boxTitle: {
		// Espaço reservado para o título
	},
	title: {
		fontSize: 18,     // Tamanho da fonte do título
		fontWeight: "bold", // Negrito
	},
})
