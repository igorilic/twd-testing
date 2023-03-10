export type CardProps = {
  children?: React.ReactNode | string | any
  size?: 'large' | 'medium' | 'small'
  elevation?: '1' | '2' | '3'
  title?: string
}

const baseClassName =
  'w-fit h-fit rounded-md shadow-md bg-white p-4 flex flex-col gap-6'
const sizesClassName = {
  large: 'p-5',
  medium: 'p-5',
  small: 'p-4'
}

const elevationClassName = {
  1: 'shadow-sm',
  2: 'shadow-md',
  3: 'shadow-lg'
}

export function Card({
  title,
  size = 'medium',
  elevation = '1',
  children,
  ...otherProps
}: CardProps) {
  return (
    <div
      {...otherProps}
      className={`${baseClassName} ${sizesClassName[size]} ${elevationClassName[elevation]}`}
    >
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-primary-800">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  )
}
