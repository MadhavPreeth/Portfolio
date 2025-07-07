import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 pt-20">
      <header className="fixed top-0 left-0 right-0 z-0 bg-white p-4 shadow-md rounded-b-xl mx-auto mt-2 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-blue-700 select-none">
            Portfolio
          </h1>
        </div>

        <nav>
          <ul className="flex space-x-6 md:space-x-8">
            <li>
              <a
                href="#about"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#games"
                className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                Games
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
