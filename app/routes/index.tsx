import { Link } from "@remix-run/react";
import { Button, ButtonProps } from "../components/button";
import { Card } from "../components/card";

const testingGrid: Pick<ButtonProps, 'variant' | 'size' | 'icon' | 'dropdown'>[] = [
  {variant: "primary", size: "large"},
  {variant: "primary", size: "medium"},
  {variant: "primary", size: "small"},
  {variant: "secondary", size: "large"},
  {variant: "secondary", size: "medium"},
  {variant: "secondary", size: "small"},
  {variant: "success", size: "large"},
  {variant: "success", size: "medium"},
  {variant: "success", size: "small"},
  {variant: "danger", size: "large"},
  {variant: "danger", size: "medium"},
  {variant: "danger", size: "small"},
  {variant: "primary", size: "large", icon: true},
  {variant: "primary", size: "large", icon: true},
  {variant: "primary", size: "small", icon: true},
  {variant: "secondary", size: "large", icon: true},
  {variant: "secondary", size: "medium", icon: true},
  {variant: "secondary", size: "small", icon: true},
  {variant: "success", size: "large", icon: true},
  {variant: "success", size: "medium", icon: true},
  {variant: "success", size: "small", icon: true},
  {variant: "danger", size: "large", icon: true},
  {variant: "danger", size: "medium", icon: true},
  {variant: "danger", size: "small", icon: true},
  {variant: "primary", size: "large", dropdown: true},
  {variant: "primary", size: "large", dropdown: true},
  {variant: "primary", size: "small", dropdown: true},
  {variant: "secondary", size: "large", dropdown: true},
  {variant: "secondary", size: "medium", dropdown: true},
  {variant: "secondary", size: "small", dropdown: true},
  {variant: "success", size: "large", dropdown: true},
  {variant: "success", size: "medium", dropdown: true},
  {variant: "success", size: "small", dropdown: true},
  {variant: "danger", size: "large", dropdown: true},
  {variant: "danger", size: "medium", dropdown: true},
  {variant: "danger", size: "small", dropdown: true},
  {variant: "primary", size: "large", dropdown: true, icon: true},
  {variant: "primary", size: "large", dropdown: true, icon: true},
  {variant: "primary", size: "small", dropdown: true, icon: true},
  {variant: "secondary", size: "large", dropdown: true, icon: true},
  {variant: "secondary", size: "medium", dropdown: true, icon: true},
  {variant: "secondary", size: "small", dropdown: true, icon: true},
  {variant: "success", size: "large", dropdown: true, icon: true},
  {variant: "success", size: "medium", dropdown: true, icon: true},
  {variant: "success", size: "small", dropdown: true, icon: true},
  {variant: "danger", size: "large", dropdown: true, icon: true},
  {variant: "danger", size: "medium", dropdown: true, icon: true},
  {variant: "danger", size: "small", dropdown: true, icon: true},
]
const liClassName = "shrink-0 text-primary-800 hover:text-primary-600 active:text-primary-700 font-medium hover:underline"
export default function Index() {
  return (
    <div className="w-full h-full">
      <nav className="w-full p-4 bg-white">
        <ul className="flex flex-row items-center justify-evenly">
          <li className={liClassName}>
            <Link to="/">Home</Link></li>
          <li className={liClassName}>
          <Link to="/">About</Link></li>
          <li className={liClassName}>
            <Link to="/">Services</Link>
          </li>
          <li className={liClassName}>Contact</li>
          <li className={liClassName}>Tests</li>
        </ul>
      </nav>
      <main className="mt-10 w-full px-6">
        <div className="flex items-center justify-center">
          <Card title="Buttons" size="large" elevation="3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6 xs:items-center">
              {testingGrid.map(({variant, size, icon, dropdown}) => (
                <Button variant={variant} size={size} icon={icon} dropdown={dropdown} className="shrink-0">{`${variant} ${size}`}</Button>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
