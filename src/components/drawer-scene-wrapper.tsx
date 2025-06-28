// Importa o hook para obter o progresso de abertura do Drawer (menu lateral)
import { useDrawerProgress } from "@react-navigation/drawer"
// Importa o tipo ReactNode para tipar os filhos do componente
import { ReactNode } from "react"
// Importa o StyleSheet para criar estilos no React Native
import { StyleSheet } from "react-native"
// Importa o Animated e funções auxiliares da biblioteca react-native-reanimated
import Animated, {
	Extrapolation,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated"

// Define as propriedades esperadas pelo componente: apenas 'children'
type Props = {
	children: ReactNode
}

// Componente que aplica animação à cena conforme o Drawer é aberto/fechado
export function DrawerSceneWrapper({ children }: Props) {
	// Obtém o valor animado do progresso do Drawer (0 = fechado, 1 = aberto)
	const progress = useDrawerProgress()

	// Define um estilo animado que será aplicado ao container
	const animatedStyled = useAnimatedStyle(() => ({
		transform: [
			{
				// Escala a cena de 1 (normal) para 0.8 (reduzido) conforme o Drawer abre
				scale: interpolate(
					progress.value,     // Valor do progresso do Drawer
					[0, 1],             // Intervalo de entrada (fechado a aberto)
					[1, 0.8],           // Intervalo de saída (normal a reduzido)
					Extrapolation.CLAMP // Impede valores fora do intervalo
				),
			},
			{
				// Move a cena para a direita conforme o Drawer abre (de 0 a 200)
				translateX: interpolate(
					progress.value,
					[0, 1],
					[0, 200],
					Extrapolation.CLAMP
				),
			},
			// O trecho abaixo está comentado, mas poderia ser usado para rotacionar a cena
			// {
			// 	rotateY:
			// 		interpolate(
			// 			progress.value,
			// 			[0, 1],
			// 			[0, -25],
			// 			Extrapolation.CLAMP
			// 		) + "deg",
			// },
		],
		// borderRadius e overflow também podem ser usados para arredondar a cena, mas estão comentados
		// borderRadius: 20,
		// overflow: "hidden",
	}))

	// Retorna o container animado envolvendo os filhos passados como props
	return (
		<Animated.View style={[styles.container, animatedStyled]}>
			{children}
		</Animated.View>
	)
}

// Estilo base para o container: ocupa todo o espaço disponível
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
