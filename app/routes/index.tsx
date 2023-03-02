import { Link } from "@remix-run/react";

const liClassName = "shrink-0 hover:text-primary-400 active:text-primary-600"
export default function Index() {
  return (
    <div className="w-full h-full">
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
    </div>
  );
}
