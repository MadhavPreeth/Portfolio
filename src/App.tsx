import { useState, useEffect } from "react";
import textureBackground from "./assets/texture.png";
import texturet from "./assets/texturet.png";
import {useInView } from 'react-intersection-observer';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const { ref:projectsSectionRef, inView: projectsInView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const { ref:projectsCardsRef, inView: projectscardInView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const { ref:gamesSectionRef, inView: gamesInView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })



  return (
    <>
      <div
        style={{ backgroundImage: `url(${texturet})` }}
        className="min-h-screen font-montserrat text-white"
      >
        <header
          style={{ backgroundColor: "#6128D9" }}
          className={`fixed top-0 left-0 right-0 z-10 bg-white p-6 rounded-b-lg mx-auto flex items-center justify-evenly border-b-2 border-white shadow-lg shadow-[#7B7CD3] transition-all duration-1400 ease-out ${
            showHeader
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          } `}
        >
          <div className="flex items-center">
            <h1 className="text-[1.175rem] font-noto-sans-jp text-white select-none">
              ポートフォリオ
            </h1>
          </div>

          <nav>
            <ul className="flex md:space-x-12">
              <li className="flex space-x-2.25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user-icon lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <a
                  href="#about"
                  className="text-lg font-medium font-montserrat text-white hover:text-black transition duration-300 ease-in-out"
                >
                  About Me
                </a>
              </li>
              <li className="flex space-x-2.25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-folder-kanban-icon lucide-folder-kanban"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  <path d="M8 10v4" />
                  <path d="M12 10v2" />
                  <path d="M16 10v6" />
                </svg>
                <a
                  href="#projects"
                  className="text-lg font-medium font-montserrat text-white hover:text-black transition duration-300 ease-in-out"
                >
                  Projects
                </a>
              </li>
              <li className="flex space-x-2.25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-gamepad2-icon lucide-gamepad-2"
                >
                  <line x1="6" x2="10" y1="11" y2="11" />
                  <line x1="8" x2="8" y1="9" y2="13" />
                  <line x1="15" x2="15.01" y1="12" y2="12" />
                  <line x1="18" x2="18.01" y1="10" y2="10" />
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                </svg>
                <a
                  href="#games"
                  className="text-lg font-medium font-montserrat text-white hover:text-black transition duration-300 ease-in-out "
                >
                  Games
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section
          id="about"
          className="flex flex-row pt-35 justify-evenly items-center pb-60"
        >
          <div className={`w-87 hover:scale-105 transition duration-1500 ease-in-out ${showHeader ? ' translate-x-0' : '-translate-x-[600px]'}`}>
            <img src="cha.png"></img>
          </div>

          <div
            style={{ backgroundColor: "#A3A0DA" }}
            className={`flex flex-col pt-3 items-center w-[550px] h-[450px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition duration-1500 ease-in-out ${showHeader ? 'opacity-100 rotate-[0deg] scale-100' : 'opacity-0 rotate-[-15deg] scale-50'}`}
          >
            <header className="text-[4.5rem]">About Me</header>
            <div className="w-[450px] pt-5 pl-4 text-[1.3rem]">
              Hi, I'm Madhav Preeth. I'm a passionate developer who enjoys
              building games, sites, apps and exploring creative tech ideas. I'm
              currently diving into web development and Unity 3D, and I love
              combining design with code. Outside of dev, I enjoy drawing
              Digital Art and Stock Market.
            </div>
          </div>
        </section>

        <section id="projects" className={`scroll-mt-[124px]`}>
          <div className="flex flex-col justify-evenly items-center space-y-15">
            <header ref={projectsSectionRef} className={`text-[4.5rem] transition-all duration-1000 ease-out ${projectsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} hover:scale-115  transition duration-300 ease-in-out`}>Projects</header>
            <div className="flex flex-row justify-evenly space-x-12 pb-71">
              <div
                style={{ backgroundColor: "#A3A0DA" }}
                className={`flex flex-col pt-6 items-center w-[424px] h-[400px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition-all duration-1000 ease-in-out ${projectscardInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
              >
                <a
                  href="https://github.com/MadhavPreeth/AimTrain"
                  className="text-[4.5rem] hover:text-black transition duration-300 ease-in-out"
                >
                  AimTrain
                </a>
                <div className="w-[350px] pt-6 text-[1.3rem] pl-4">
                  AimTrain is a web-based game designed to help you test and
                  improve your mouse accuracy and reaction time. Made using
                  HTML,CSS and JavaScript.
                </div>
              </div>
              <div
                style={{ backgroundColor: "#A3A0DA" }}
                ref={projectsCardsRef}
                className="flex flex-col pt-6 items-center w-[424px] h-[400px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition duration-1000 ease-in-out"
              >
                <a
                  href="https://github.com/MadhavPreeth/URLShortener"
                  className="text-[4.5rem] hover:text-black transition duration-300 ease-in-out"
                >
                  UrlShort
                </a>
                <div className="w-[350px] pt-6 text-[1.3rem] pl-4">
                  A simple URL shortener web app that takes a long URL and
                  generates a TinyURL-based short link using the TinyURL API.
                </div>
              </div>
              <div
                style={{ backgroundColor: "#A3A0DA" }}
                className={`flex flex-col pt-6 items-center w-[424px] h-[400px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition duration-1000 ease-in-out ${projectscardInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <a
                  href="https://github.com/MadhavPreeth/FocusApp"
                  className="text-[4.5rem] hover:text-black transition duration-300 ease-in-out"
                >
                  Focus
                </a>
                <div className="w-[350px] pt-6 text-[1.3rem] pl-4">
                  Focus is a minimalist and easy-to-use timer designed to help
                  you concentrate and manage your time effectively. Made using
                  Flutter and Dart.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="scroll-mt-[138px]">
          <div className="flex flex-row justify-evenly items-center pb-60">
            <header ref={gamesSectionRef} className={`text-[4.5rem] hover:scale-115 transition duration-1000 ease-in-out ${gamesInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>Games</header>
            <div className="flex flex-col justify-evenly space-y-12 ">
              <div
                style={{ backgroundColor: "#A3A0DA" }}
                className={`flex flex-col pt-8 items-center w-[624px] h-[150px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition duration-1100 ease-in-out ${gamesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <a
                  href="https://r4cerr.itch.io/keybrawl"
                  className="text-[2.5rem] hover:text-black transition duration-300 ease-in-out"
                > 
                  KeyBrawl
                </a>
              </div>
              <div
                style={{ backgroundColor: "#A3A0DA" }}
                className={`flex flex-col pt-8 items-center w-[624px] h-[150px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition duration-1150 ease-in-out ${gamesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <a
                  href="https://r4cerr.itch.io/socially-awkward"
                  className="text-[2.5rem] hover:text-black transition duration-300 ease-in-out"
                >
                  Socially Awkward
                </a>
              </div>
              <div
                style={{ backgroundColor: "#A3A0DA" }}
                className={`flex flex-col pt-8 items-center w-[624px] h-[150px] rounded-4xl border-solid border-[#7B7CD3] border-[12px] shadow-2xl shadow-[#7B7CD3] hover:scale-105 transition duration-1200 ease-in-out ${gamesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <a
                  href="https://r4cerr.itch.io/hardpunk"
                  className="text-[2.5rem] hover:text-black transition duration-300 ease-in-out"
                >
                  HardPunk
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        style={{ backgroundImage: `url(${textureBackground})` }}
        className="h-[325px] text-[22px] font-montserrat text-white flex flex-col justify-evenly items-center"
      >
        <header>Made By Madhav Preeth</header>
        <div className="flex flex-row space-x-17 pl-1">
          <a
            href="https://github.com/MadhavPreeth"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/madhav-preeth-153398334/"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
