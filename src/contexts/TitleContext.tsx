import { createContext, ReactNode, useContext, useState } from "react"

const TitleContext = createContext({
	title: "My App",
	setTitle: (title: string) => {},
})

export const useTitle = () => useContext(TitleContext)

type Props = {
	children: ReactNode
}

export function TitleProvider({ children }: Props) {
	const [title, setTitle] = useState("My App")

	return (
		<TitleContext.Provider value={{ title, setTitle }}>
			{children}
		</TitleContext.Provider>
	)
}
