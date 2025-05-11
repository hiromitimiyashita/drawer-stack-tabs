import { FontAwesome } from '@expo/vector-icons'
import { DrawerToggleButton } from '@react-navigation/drawer'
import Drawer from 'expo-router/drawer'
import { useTitle } from '../store/TitleContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

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
					headerTitleAlign: 'center',
					drawerStyle: {
						backgroundColor: '#1D1F25',
						paddingTop: 32,
						width: '50%',
					},
					drawerLabelStyle: {
						marginLeft: -2,
					},
					drawerActiveBackgroundColor: 'transparent',
					drawerInactiveBackgroundColor: 'transparent',
					drawerActiveTintColor: '#FFFFFF',
					drawerInactiveTintColor: '#727D9B',
					drawerHideStatusBarOnOpen: false,
					overlayColor: 'transparent',
					sceneStyle: {
						backgroundColor: '#1D1F25',
					},
				}}
			>
				<Drawer.Screen
					name='(tabs)'
					options={{
						headerTitle: title,
						drawerLabel: 'Início',
						drawerIcon: ({ color }) => (
							<FontAwesome name='home' color={color} size={iconSize} />
						),
					}}
				/>
				<Drawer.Screen
					name='settings'
					options={{
						title: 'Configurações',
						drawerLabel: 'Configurações',
						drawerIcon: ({ color }) => (
							<FontAwesome name='gears' color={color} size={iconSize} />
						),
					}}
				/>
				<Drawer.Screen
					name='contact'
					options={{
						title: 'Contato',
						drawerLabel: 'Contato',
						drawerIcon: ({ color }) => (
							<FontAwesome name='phone-square' color={color} size={iconSize} />
						),
					}}
				/>
				<Drawer.Screen
					name='about'
					options={{
						title: 'Sobre',
						drawerLabel: 'Sobre',
						drawerIcon: ({ color }) => (
							<FontAwesome name='info' color={color} size={iconSize} />
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	)
}
