// Importa a biblioteca de ícones FontAwesome para usar no menu.
import { FontAwesome } from "@expo/vector-icons"
// Importa o botão padrão para abrir e fechar o Drawer.
import { DrawerToggleButton } from "@react-navigation/drawer"
// Importa o componente de navegação Drawer do Expo Router.
import Drawer from "expo-router/drawer"
// Importa o hook personalizado para acessar o título da tela via contexto.
import { useTitle } from "../store/TitleContext"
// Importa o componente raiz para o sistema de gestos, necessário para o Drawer funcionar corretamente.
import { GestureHandlerRootView } from "react-native-gesture-handler"

/**
 * Componente de Layout do Drawer (Menu Lateral).
 *
 * Este componente configura a navegação do tipo gaveta, definindo as telas
 * que aparecerão no menu, seus ícones, títulos e o estilo geral do Drawer.
 */
export default function DrawerLayout() {
	// Obtém o título dinâmico da tela atual através do nosso contexto.
	const { title } = useTitle()
	// Define um tamanho padrão para os ícones para manter a consistência.
	const iconSize = 20

	return (
		// Envolve toda a navegação em um GestureHandlerRootView para habilitar os gestos.
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				// screenOptions define estilos e comportamentos padrão para todas as telas do Drawer.
				screenOptions={{
					headerShown: false, // Oculta o cabeçalho padrão, pois usaremos um componente <Header /> customizado.
					headerLeft: () => null, // Remove qualquer componente padrão à esquerda do cabeçalho.
					headerRight: () => <DrawerToggleButton />, // Adiciona o botão de toggle no cabeçalho (se estivesse visível).
					headerTitleAlign: "center", // Centraliza o título do cabeçalho (se estivesse visível).
					drawerStyle: {
						backgroundColor: "#1D1F25", // Cor de fundo do menu lateral.
						paddingTop: 32, // Espaçamento no topo do menu.
						width: "50%", // Largura do menu.
					},
					drawerLabelStyle: {
						marginLeft: -2, // Ajuste fino no alinhamento do texto do item.
					},
					drawerActiveBackgroundColor: "transparent", // Cor de fundo do item ativo (transparente para não ter fundo).
					drawerInactiveBackgroundColor: "transparent", // Cor de fundo do item inativo.
					drawerActiveTintColor: "#FFFFFF", // Cor do ícone e texto do item ativo.
					drawerInactiveTintColor: "#727D9B", // Cor do ícone e texto do item inativo.
					drawerHideStatusBarOnOpen: false, // Não oculta a barra de status do celular quando o menu abre.
					overlayColor: "transparent", // Cor da sobreposição da tela principal. Transparente para a animação de scale funcionar.
					sceneStyle: {
						backgroundColor: "#1D1F25", // Cor de fundo da área da cena, que ajuda na transição.
					},
				}}
			>
				{/* Define a primeira tela do Drawer, que é o grupo de abas (Tabs). */}
				<Drawer.Screen
					name="(tabs)" // O nome corresponde à pasta `(tabs)` dentro de `(drawer)`.
					options={{
						headerTitle: title, // Define o título do cabeçalho com o valor do contexto.
						drawerLabel: "Início", // Texto que aparece no item do menu.
						// Função que renderiza o ícone para este item de menu.
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="home"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				{/* Define a tela de Configurações. */}
				<Drawer.Screen
					name="settings" // Corresponde ao arquivo `settings.tsx`.
					options={{
						title: "Configurações", // Título padrão para a tela.
						drawerLabel: "Configurações", // Texto no menu.
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="gears"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				{/* Define a tela de Contato. */}
				<Drawer.Screen
					name="contact" // Corresponde ao arquivo `contact.tsx`.
					options={{
						title: "Contato", // Título padrão para a tela.
						drawerLabel: "Contato", // Texto no menu.
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="phone-square"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				{/* Define a tela "Sobre". (Nota: o arquivo about.tsx precisa existir) */}
				<Drawer.Screen
					name="about" // Corresponde a um futuro arquivo `about.tsx`.
					options={{
						title: "Sobre", // Título padrão para a tela.
						drawerLabel: "Sobre", // Texto no menu.
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="info"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	)
}
