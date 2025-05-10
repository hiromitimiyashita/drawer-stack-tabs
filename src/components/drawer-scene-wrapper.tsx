import { useDrawerProgress } from "@react-navigation/drawer"
import { ReactNode } from "react"
import { StyleSheet } from "react-native"
import Animated, {
	Extrapolation,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated"

type Props = {
	children: ReactNode
}

export function DrawerSceneWrapper({ children }: Props) {
	const progress = useDrawerProgress()
	const animatedStyled = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(
					progress.value,
					[0, 1],
					[1, 0.8],
					Extrapolation.CLAMP
				),
			},
			{
				translateX: interpolate(
					progress.value,
					[0, 1],
					[0, 200],
					Extrapolation.CLAMP
				),
			},
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
		// borderRadius: 20,
		// overflow: "hidden",
	}))

	return (
		<Animated.View style={[styles.container, animatedStyled]}>
			{children}
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
