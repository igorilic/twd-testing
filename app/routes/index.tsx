import { Link } from "@remix-run/react";
import { Button, ButtonProps } from "../components/button";
import { Card } from "../components/card";

const testingGrid: Pick<ButtonProps, 'variant' | 'size'>[] = [
  {variant: "primary", size: "large"},
  {variant: "primary", size: "medium"},
  {variant: "primary", size: "small"},
  {variant: "success", size: "large"},
  {variant: "success", size: "medium"},
  {variant: "success", size: "small"},
  {variant: "danger", size: "large"},
  {variant: "danger", size: "medium"},
  {variant: "danger", size: "small"},
]
const liClassName = "shrink-0 hover:text-primary-400 active:text-primary-600"
export default function Index() {
  return (
    <div className="w-full h-full px-4">
      <nav className="w-full p-4">
        <ul className="flex flex-row items-center justify-evenly">
          <li className={liClassName}>
            <Link to="/">Home</Link></li>
          <li className={liClassName}>About</li>
          <li className={liClassName}>Posts</li>
          <li className={liClassName}>Contact</li>
          <li className={liClassName}>Tests</li>
        </ul>
      </nav>
      <main className="mt-5">
        <div>
          <Card size="large" elevation="3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testingGrid.map(({variant, size}) => (
                <Button variant={variant} size={size}>{`${variant} ${size}`}</Button>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
