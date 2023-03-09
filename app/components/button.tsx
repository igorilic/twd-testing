import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'success' | 'danger'
  children: string | any
  size: 'large' | 'medium' | 'small'
  icon?: boolean
  dropdown?: boolean
  className?: string
}
const variantsClassName = {
  primary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
  secondary:
    'bg-white border-gray-300 hover:bg-gray-100 active:bg-gray-200 active:border-gray-400 text-primary-800',
  success: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
  danger: 'bg-red-500 hover:bg-red-600 active:bg-red-700'
}

const sizesClassName = {
  large: 'px-6 py-4',
  medium: 'px-4 py-3',
  small: 'px-3 py-2'
}
const iconClassName = {
  large: 'w-6 h-6',
  medium: 'w-5 h-5',
  small: 'w-4 h-4'
}

const baseClassName =
  'h-fit w-fit rounded-md focus:outline-none font-medium text-base shadow-md'

export function Button({
  variant,
  icon = false,
  dropdown = false,
  size,
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={`${baseClassName} ${variantsClassName[variant]} ${sizesClassName[size]}`}
    >
      <div className="flex items-center justify-center gap-2 whitespace-nowrap">
        {icon ? <ArrowRightIcon className="w-5 h-5" /> : null}
        {children}
        {dropdown ? (
          <ChevronDownIcon className={`${iconClassName[size]}`} />
        ) : null}
      </div>
    </button>
  )
}
