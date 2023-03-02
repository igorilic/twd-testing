export type ButtonProps = {
	variant: "primary" | "success" | "danger"
	children: string | any
	size: 'large' | 'medium' | 'small'
	icon?: boolean
	dropdown?: boolean
	text?: boolean
}
const variantsClassName = {
	primary: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
	success: "bg-green-500 hover:bg-green-600 active:bg-green-700",
	danger: "bg-red-500 hover:bg-red-600 active:bg-red-700",
}

const sizesClassName = {
	large: "px-5 py-4 text-lg",
	medium: "px-4 py-3 text-base",
	small: "px-3 py-2 text-sm",
}

const baseClassName = 'rounded-md focus:outline-none font-medium shadow-sm'

export function Button({variant, icon = false, dropdown = false, text = true, ...otherProps}: ButtonProps) {
	return (
		<button {...otherProps} className={`${baseClassName} ${variantsClassName[variant]} ${sizesClassName[otherProps.size]}`} />
	)

}
