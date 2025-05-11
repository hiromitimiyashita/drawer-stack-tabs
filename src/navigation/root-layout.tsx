import { TitleProvider } from "@/src/store/TitleContext"
import StackLayout from "../navigation/stack-layout"

export default function RootLayout() {
	return (
		<TitleProvider>
			<StackLayout />
		</TitleProvider>
	)
}
