import * as React from 'react'

export default function AboutPage() {
  const [navOpen, setNavOpen] = React.useState(false)
  React.useEffect(() => {}, [navOpen])
  return (
    <div className="leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-primary-800 mr-6">
          <a
            href="/"
            className="text-primary-800 no-underline hover:text-primary-600 hover:no-underline"
          >
            <span className="text-2xl pl-2">Menu</span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-primary-800 hover:text-primary-600 hover:border-gray-600"
            onClick={() => setNavOpen(!navOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v0-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            navOpen ? '' : 'hidden'
          }  pt-6 lg:pt-0`}
          id="nav-content"
        >
          <ul className="lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                href="/"
                className="inline-block py-2 px-4 text-primary-800 no-underline hover:text-primary-600 active:text-primary-400 hover:underline underline-offset-2"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                href="/"
                className="inline-block py-2 px-4 text-primary-800 no-underline hover:text-primary-600 active:text-primary-400 hover:underline underline-offset-2"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                href="/"
                className="inline-block py-2 px-4 text-primary-800 no-underline hover:text-primary-600 active:text-primary-400 hover:underline underline-offset-2"
              >
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container shadow-lg mx-auto mt-24 md:mt-10 bg-white"></main>
    </div>
  )
}
