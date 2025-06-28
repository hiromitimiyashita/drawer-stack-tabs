# React Native Drawer, Stack & Tabs Structure
<p align="center">
<img src="src/assets/images/logo.png" alt="Logo" width="200" />
</p>


[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-%5E0.73.x-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-%5E50.x-blue)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.x-blue)](https://www.typescriptlang.org/)

---

## 📱 Sobre o Projeto

**React Native Drawer, Stack & Tabs Structure** é um template modular, escalável e altamente profissional para desenvolvimento de aplicativos móveis usando **React Native** e **Expo**. Ele integra navegação moderna via **Expo Router**, incluindo navegação por Drawer (menu lateral), Stack (pilhas de tela) e Tabs (abas inferiores).

O objetivo é fornecer uma base sólida para projetos de qualquer tamanho, com código limpo, tipado em TypeScript, organização robusta de pastas e pronta para integrações com APIs, bancos de dados e sistemas de autenticação.

---

## 🚀 Principais Recursos

- **Navegação avançada**: Drawer, Stack e Tabs combinados com Expo Router
- **Estrutura de pastas organizada** e separação de responsabilidades
- **Componentes reutilizáveis** e personalizáveis
- **Suporte total ao TypeScript**
- **Pronto para integração com API, banco de dados local/global e autenticação**
- **Customização fácil de temas, ícones e estilos**
- **Exemplo de gerenciamento de estado global**
- **Pronto para CI/CD, testes e deploy**

---

## 📂 Estrutura e Organização

```
src/
│
├── app/               # Telas (screens) do aplicativo
│   ├── (drawer)/      # Telas acessíveis pelo Drawer
│   │   ├── contact.tsx
│   │   ├── settings.tsx
│   │   └── (tabs)/    # Abas internas do Drawer
│   │        ├── index.tsx    # Dashboard (Home)
│   │        ├── tab2.tsx
│   │        ├── tab3.tsx
│   │        └── tab4.tsx
│   └── index.tsx      # Tela de boas-vindas
│
├── assets/            # Recursos estáticos (imagens, ícones, fontes)
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/        # Componentes reutilizáveis
│   ├── header.tsx
│   └── drawer-scene-wrapper.tsx
│
├── navigation/        # Configuração de navegação centralizada
│   ├── root-layout.tsx
│   ├── drawer-layout.tsx
│   └── tabs-layout.tsx
│
├── services/          # Integração com API, banco de dados, etc.
│   ├── api.ts
│   └── database.ts
│
├── store/             # Gerenciamento de estado global
│   ├── authStore.ts
│   ├── dataStore.ts
│   └── TitleContext.tsx
│
├── types/             # Tipos TypeScript globais
│   ├── userTypes.ts
│   └── transactionTypes.ts
│
└── utils/             # Funções utilitárias e constantes
    ├── formatDate.ts
    └── constants.ts
```

---

## 🧑‍💻 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) >= 5.x

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/hiromitimiyashita/react-native-drawer-stack-tabs-structure.git
   cd react-native-drawer-stack-tabs-structure
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Execute o projeto**
   ```bash
   yarn start
   # ou
   npm start
   ```

4. **Abra no seu emulador ou dispositivo físico**  
   Use o aplicativo Expo Go ou o emulador de sua preferência.

---

## 📋 Telas de Exemplo Incluídas

- **Boas-vindas:** Apresentação e entrada para o app
- **Dashboard (Home):** Tela principal com integração de Tabs
- **Tab2, Tab3, Tab4:** Estrutura para novas abas
- **Contato:** Exemplo de tela de contato via Drawer
- **Configurações:** Tela de opções/configurações do app

---

## 🛠️ Customização

- **Adicione novas telas:** Crie novos arquivos em `src/app` (ou nas subpastas apropriadas)
- **Adicione novos componentes:** Crie em `src/components` e use nas telas
- **Gerenciamento de estado:** Pronto para Redux, Context API ou outros
- **Temas e estilos globais:** Modifique arquivos em `utils/constants.ts` e `assets/`

---

## 🗂️ Exemplos de Componentes

```tsx
// Exemplo de uso do Header em uma tela
import { Header } from "@/src/components/header"

export default function MinhaTela() {
  return (
    <SafeAreaView>
      <Header />
      {/* ...conteúdo da tela... */}
    </SafeAreaView>
  )
}
```

---

## 🔒 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir issues, pull requests ou sugerir melhorias.

1. Fork este repositório
2. Crie sua branch (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: Minha nova feature'`)
4. Push para o branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 📞 Contato

Dúvidas, sugestões ou feedback?

- GitHub: [hiromitimiyashita](https://github.com/hiromitimiyashita)
- Email: miti.fsdeveloper@gmail.com

---

## ⭐️ Seja um desenvolvedor de projetos excepcionais!

Este projeto foi desenvolvido para ser o ponto de partida para apps profissionais, escaláveis e modernos.  
Aproveite, contribua e crie aplicativos incríveis!
