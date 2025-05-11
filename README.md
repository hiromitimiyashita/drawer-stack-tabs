# Estrutura Básica para Aplicativos

## Descrição do Projeto

Este projeto fornece uma estrutura modular e escalável para desenvolvimento de aplicativos móveis usando **React Native** e **Expo**, com navegação integrada via **Expo Router** (Drawer, Stack e Tabs). A organização é otimizada para projetos de qualquer complexidade, garantindo facilidade de manutenção e expansão.

---

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

---

## Navegação com Expo Router

A navegação é configurada em `navigation/` e usa **Drawer**, **Stack** e **Tabs** para flexibilidade.

### 1. Drawer Navigation

```tsx
// navigation/drawer-layout.tsx
import { Drawer } from "expo-router/drawer"

export default function DrawerLayout() {
	return (
		<Drawer>
			<Drawer.Screen name="home" options={{ title: "Home" }} />
			<Drawer.Screen name="profile" options={{ title: "Profile" }} />
		</Drawer>
	)
}
```
