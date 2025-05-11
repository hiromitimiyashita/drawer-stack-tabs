# Estrutura Básica para Aplicativos

## Descrição do Projeto

Este projeto fornece uma estrutura modular e escalável para desenvolvimento de aplicativos móveis usando **React Native** e **Expo**, com navegação integrada via **Expo Router** (Drawer, Stack e Tabs). A organização é otimizada para projetos de qualquer complexidade, garantindo facilidade de manutenção e expansão.

## Estrutura do Projeto

A estrutura é organizada em pastas específicas para separar responsabilidades:

### `app/`

-   **Propósito**: Contém todas as telas (screens) do aplicativo.
-   **Exemplos**:
    -   `HomeScreen.tsx`: Tela inicial.
    -   `ProfileScreen.tsx`: Tela de perfil do usuário.
    -   `DetailsScreen.tsx`: Tela de detalhes de um item.

### `assets/`

-   **Propósito**: Armazena recursos visuais estáticos.
-   **Subpastas**:
    -   `icons/`: Ícones para menus e botões.
    -   `images/`: Imagens usadas no aplicativo.
    -   `fonts/`: Fontes personalizadas.

### `components/`

-   **Propósito**: Componentes reutilizáveis para evitar duplicação de código.
-   **Exemplos**:
    -   `CustomButton.tsx`: Botão estilizado.
    -   `Header.tsx`: Cabeçalho padrão para telas.
    -   `TransactionCard.tsx`: Card para exibir transações (exemplo genérico).

### `navigation/`

-   **Propósito**: Configuração centralizada de navegação.
-   **Arquivos Principais**:
    -   `_layout.tsx`: Configuração global de navegação.
    -   `drawer-layout.tsx`: Menu lateral (Drawer).
    -   `stack-layout.tsx`: Pilha de telas (Stack).
    -   `tabs-layout.tsx`: Abas inferiores (Tabs).

### `services/`

-   **Propósito**: Lógica de integração com APIs, banco de dados ou serviços externos.
-   **Exemplos**:
    -   `api.ts`: Client HTTP para requisições.
    -   `database.ts`: Operações com SQLite ou AsyncStorage.

### `store/`

-   **Propósito**: Gerenciamento de estado global (ex: Redux ou Context API).
-   **Exemplos**:
    -   `authStore.ts`: Estado de autenticação.
    -   `dataStore.ts`: Estado de dados da aplicação.

### `types/`

-   **Propósito**: Definições de tipos TypeScript para tipagem forte.
-   **Exemplos**:
    -   `userTypes.ts`: Tipos relacionados ao usuário.
    -   `transactionTypes.ts`: Tipos para transações (exemplo genérico).

### `utils/`

-   **Propósito**: Funções utilitárias e constantes globais.
-   **Exemplos**:
    -   `formatDate.ts`: Formatação de datas.
    -   `constants.ts`: Cores, textos ou configurações globais.

## Navegação com Expo Router

A navegação é configurada em `src/navigation/` e usa **Drawer**, **Stack** e **Tabs** para flexibilidade.

### 1. Drawer Navigation

```tsx
// src/navigation/drawer-layout.tsx
import { FontAwesome } from "@expo/vector-icons"
import { DrawerToggleButton } from "@react-navigation/drawer"
import Drawer from "expo-router/drawer"
import { useTitle } from "../store/TitleContext"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function DrawerLayout() {
	const { title } = useTitle()
	const iconSize = 20
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				screenOptions={{
					headerShown: false,
					headerLeft: () => null,
					headerRight: () => <DrawerToggleButton />,
					headerTitleAlign: "center",
					drawerStyle: {
						backgroundColor: "#1D1F25",
						paddingTop: 32,
						width: "50%",
					},
					drawerLabelStyle: {
						marginLeft: -2,
					},
					drawerActiveBackgroundColor: "transparent",
					drawerInactiveBackgroundColor: "transparent",
					drawerActiveTintColor: "#FFFFFF",
					drawerInactiveTintColor: "#727D9B",
					drawerHideStatusBarOnOpen: false,
					overlayColor: "transparent",
					sceneStyle: {
						backgroundColor: "#1D1F25",
					},
				}}
			>
				<Drawer.Screen
					name="(tabs)"
					options={{
						headerTitle: title,
						drawerLabel: "Início",
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="home"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="settings"
					options={{
						title: "Configurações",
						drawerLabel: "Configurações",
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="gears"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="contact"
					options={{
						title: "Contato",
						drawerLabel: "Contato",
						drawerIcon: ({ color }) => (
							<FontAwesome
								name="phone-square"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="about"
					options={{
						title: "Sobre",
						drawerLabel: "Sobre",
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
```
