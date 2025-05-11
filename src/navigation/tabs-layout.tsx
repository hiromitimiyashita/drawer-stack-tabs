import { Tabs } from "expo-router"
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper"
import { FontAwesome } from "@expo/vector-icons"

export default function TabsLayout() {
	const iconSize = 20
	return (
		<DrawerSceneWrapper>
			<Tabs
				screenOptions={{
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name="tab1"
					options={{
						title: "Tab 1",
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="home"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="tab2"
					options={{
						title: "Tab 2",
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="user"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="index"
					options={{
						title: "Dashboard",
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="dashboard"
								color={color}
								size={20}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="tab3"
					options={{
						title: "Tab 3",
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="user"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="tab4"
					options={{
						title: "Tab 4",
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="user"
								color={color}
								size={iconSize}
							/>
						),
					}}
				/>
			</Tabs>
		</DrawerSceneWrapper>
	)
}
