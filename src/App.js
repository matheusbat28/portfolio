import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaBook, FaDocker } from "react-icons/fa6";
import { FaCode, FaArrowAltCircleUp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail, SiDjango, SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiLinux, SiUdemy } from "react-icons/si";
import { PiNewspaperFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { SiPowerbi, SiPowershell } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import me from './assets/img/me.png';
import sofaLimpo from './assets/img/sofaLimpo.png';
import tcs from './assets/img/tcs.png';
import xp from './assets/img/xp.png';

function App() {

  document.title = 'Matheus batista';

  const [knowledge, setKnowledge] = React.useState(false);
  const [isHoverSF, setIsHoverSF] = useState(false);
  const [isHoverTCS, setIsHoverTCS] = useState(false);
  const [isHoverXP, setIsHoverXP] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'disabled') {
      document.body.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'disabled') {
      localStorage.setItem('darkMode', 'disabled');
      document.body.classList.remove('dark');
    } else {
      localStorage.setItem('darkMode', 'enabled');
      document.body.classList.add('dark');
    }
  };

  const toggleKnowledge = () => {
    setKnowledge(!knowledge);
  };

  return (
    <div id="home" className="bg-white dark:bg-slate-900 h-screen">
      <header className="w-full h-24 flex items-center justify-between sticky top-0">
        <div className='flex items-center justify-center flex-col sm:flex-row'>
          <img src={me} alt="img" className="w-14 h-14 md:w-16 md:h-16  m-3 mb-0 md:m-3 rounded-full border-slate-600 dark:border-white border-2 hover:scale-110 shadow-md transition-transform" />
          <h1 className="text-sm mx-3 md:mx-0 md:text-2xl text-gray-700 dark:text-gray-300 text-center">Matheus Batista</h1>
        </div>
        <div className="h-full hidden sm:flex items-center justify-center gap-4 ">
          <a href="#about" title="sobre matheus batista"><PiNewspaperFill className="text-4xl text-gray-700 dark:text-gray-300 transform hover:scale-110 hover:text-cor-linkedin transition-transform dark:hover:text-hover-pricipal" /></a>
          <a href="#training" title="formação de matheus batista"><IoSchoolSharp className="text-4xl text-gray-700 dark:text-gray-300 transform hover:scale-110 hover:text-cor-linkedin transition-transform dark:hover:text-hover-pricipal" /></a>
          <a href="#code" title="projetos de matheus batista"><FaCode className="text-4xl text-gray-700 dark:text-gray-300 transform hover:scale-110 hover:text-cor-linkedin transition-transform dark:hover:text-hover-pricipal" /></a>
        </div>
        <div className="h-full flex items-center justify-center mx-4 gap-2">
          <a href="https://github.com/matheusbat28" title="github de matheus batista">
            <FaGithub className=" text-2xl text-gray-700 dark:text-gray-300 transform hover:scale-110 hover:text-cor-github transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/matheus-batista-4b2537202/" title="linkedin de matheus batista">
            <FaLinkedin className="text-2xl text-gray-700  dark:text-gray-300 transform hover:scale-110 hover:text-cor-linkedin transition-transform" />
          </a>
          <a href="https://www.instagram.com/batista_matheus_/" title="instagram de matheus batista">
            <AiFillInstagram className="text-2xl text-gray-700 dark:text-gray-300 transform hover:scale-110 hover:text-cor-instagram transition-transform" />
          </a>
          <a href="mailto:matheusarrow28@gmail.com" title="email de matheus batista">
            <SiGmail className="text-2xl text-gray-700 dark:text-gray-300 transform hover:scale-110 hover:text-cor-email transition-transform" />
          </a>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-gray-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-800">
            </div>
          </label>
        </div>
      </header>
      <section id="about" className="h-full w-full bg-white dark:bg-slate-900 relative">
        <div className="h-full w-full absolute top-0 left-0 flex justify-center">
          <div className="w-80 md:w-1/2 text-gray-700 dark:text-gray-300 flex items-center flex-col gap-4 pt-5">
            <h3 className="text-2xl  text-center">Sobre mim</h3>
            <p className="text-left lg:text-justify max-h-80 overflow-auto">
              Desde a infância, minha paixão sempre foi a tecnologia. Meu primeiro contato com essa área foi por meio da
              linguagem de programação Java, uma experiência que despertou meu interesse crescente pelo mundo digital.
              Sempre sonhei em cursar Análise de Desenvolvimento de Sistemas, e em 2020, pude realizar esse sonho estudando
              no Senac (Serviço Nacional de Aprendizagem Comercial), onde permaneço até hoje. Durante meu tempo no curso
              técnico, realizei e continuo realizando diversos cursos na Udemy. Sou formado em Python Full Stack e Java
              Desktop. Atualmente, trabalho com Python (Django). Nas horas vagas, utilizo também HTML, CSS, JavaScript
              e Python com o framework React, React Native, Django e Django Rest. Além disso, continuo buscando aprimorar
              meus conhecimentos e habilidades na área, sempre em constante evolução.
            </p>

            <div className="md:mt-3 pt-20 md:p-0 md:w-full flex items-center justify-center flex-col md:flex-row gap-4 overflow-auto md:overflow-hidden">
              <img className=" md:w-7/12" src="https://github-readme-stats.vercel.app/api?username=matheusbat28&show_icons=true&theme=dark&include_all_commits=true&count_private=true" alt="github stats" />
              <img className="md:w-7/12" src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheusbat28&layout=compact&langs_count=7&theme=dark" alt="github languages" />
            </div>
          </div>
          <div className="absolute sm:flex gap-3 items-center justify-center flex-col hidden p-4 bg-slate-900 dark:bg-white top-12 right-3 rounded-md shadow-lg text-white dark:text-slate-800">
            <SiHtml5 className="text-2xl" title="html" />
            <SiCss3 className="text-2xl" title="css" />
            <SiJavascript className="text-2xl" title="javascript" />
            <SiPython className="text-2xl" title="python" />
            <SiTailwindcss className="text-2xl" title="tailwindcss" />
            <SiBootstrap className="text-2xl" title="bootstrap" />
            <SiDjango className="text-2xl" title="django" />
            <SiReact className="text-2xl" title="react" />
            <DiMysql className="text-2xl" title="mysql" />
            <SiLinux className="text-2xl" title="linux" />
          </div>
        </div>
      </section>
      <section id="training" className="h-full w-full bg-white dark:bg-slate-900 relative">
        <div className="h-auto w-full flex justify-center items-center flex-col pt-5 absolute gap-4">
          <h3 className="text-2xl text-gray-700 dark:text-gray-300">Formação</h3>
          <div className="w-80 md:w-1/2 h-full text-gray-700 dark:text-white grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
            <div className="flex flex-col items-center justify-center gap-2 h-56 border-slate-900 border-2 dark:border-white shadow-md rounded transition-transform relative">
              <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-c053ea03-551f-4aea-a307-1134a9c89726.jpg?v=1660151733000" alt="udemy" className="w-full h-full relative" />
              <SiUdemy className="absolute bottom-3 right-3 text-2xl text-cor-udemy transform hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 h-56 border-slate-900 border-2 dark:border-white shadow-md rounded transition-transform relative">
              <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-bce54539-42b8-45c3-a939-102c32d20938.jpg?v=1683831116000" alt="udemy" className="w-full h-full relative" />
              <SiUdemy className="absolute bottom-3 right-3 text-2xl text-cor-udemy transform hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 h-56 border-slate-900 border-2 dark:border-white shadow-md rounded transition-transform relative">
              <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-865fee0a-b505-4b44-850e-32c98fc5158f.jpg?v=1700971973000" alt="udemy" className="w-full h-full relative" />
              <SiUdemy className="absolute bottom-3 right-3 text-2xl text-cor-udemy transform hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
        <div className="absolute sm:flex gap-3 items-center justify-center flex-col hidden w-36 p-3 bg-slate-900 dark:bg-white top-12 left-3 rounded-md shadow-lg ">
          <h2 className="text-md text-left w-full text-white dark:text-slate-800">Feramentas:</h2>
          <div className='w-full'>
            <TbBrandVscode className="text-2xl mb-2 text-cor-vscode" title="vscode" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-cor-vscode h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <SiPowerbi className="text-2xl mb-2 text-cor-powerbi" title="powerbi" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-cor-powerbi h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <TbBrandMysql className="text-2xl mb-2 text-cor-mysql" title="mysql" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-cor-mysql h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <BiLogoFigma className="text-2xl mb-2 text-cor-figma" title="figma" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-cor-figma h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <FaDocker className="text-2xl mb-2 text-cor-docker" title="docker" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-cor-docker h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <FaGithub className="text-2xl mb-2 text-gray-700 dark:text-cor-github" title="github" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-gray-700 dark:bg-cor-github h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className='w-full'>
            <SiPowershell className="text-2xl mb-2 text-cor-powershell" title="powershell" />
            <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-cor-powershell h-2 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </section>
      <section id="code" className="h-full w-full bg-white dark:bg-slate-900 relative">
        <div className="h-auto w-full flex justify-center items-center flex-col pt-10 absolute gap-4">
          <h3 className="text-2xl text-gray-700 dark:text-gray-300">Projetos</h3>
          <div className="w-80 md:w-1/2 h-full text-gray-700 dark:text-white grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center gap-2 h-60 border-slate-900 border-2 dark:border-white shadow-md rounded transition-transform relative" onMouseEnter={() => setIsHoverSF(true)} onMouseLeave={() => setIsHoverSF(false)}>
              <img src={sofaLimpo} alt="github" className="w-full h-full absolute top-0" />
              {isHoverSF ? (
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheusbat28&repo=sofa_limpo&theme=dark" alt="github" className="w-full absolute bottom-0 transition-transform" />
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center gap-2 h-60 border-slate-900 border-2 dark:border-white shadow-md rounded transition-transform relative" onMouseEnter={() => setIsHoverTCS(true)} onMouseLeave={() => setIsHoverTCS(false)}>
              <img src={tcs} alt="github" className="w-full h-full absolute top-0" />
              {isHoverTCS ? (
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheusbat28&repo=tcs&theme=dark" alt="github" className="w-full absolute bottom-0 transition-transform" />
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center gap-2 h-60 border-slate-900 border-2 dark:border-white shadow-md rounded transition-transform relative" onMouseEnter={() => setIsHoverXP(true)} onMouseLeave={() => setIsHoverXP(false)}>
              <img src={xp} alt="github" className="w-full h-full absolute top-0" />
              {isHoverXP ? (
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=matheusbat28&repo=projetoxpnovo&theme=dark" alt="github" className="w-full absolute bottom-0 transition-transform" />
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-12 fixed bottom-3 sm:hidden flex items-center justify-center">
        <div className="h-full p-6 flex items-center justify-center gap-6 dark:bg-white rounded-lg bg-gray-800">
          <a href="#about">
            <PiNewspaperFill className="text-4xl text-gray-100 dark:text-gray-800 transform hover:scale-110 transition-transform dark:hover:text-cor-linkedin" />
          </a>
          <a href="#training">
            <IoSchoolSharp className="text-4xl text-gray-100 dark:text-gray-800 transform hover:scale-110 transition-transform dark:hover:text-cor-linkedin" />
          </a>
          <a href="#code">
            <FaCode className="text-4xl text-gray-100 dark:text-gray-800 transform hover:scale-110 transition-transform dark:hover:text-cor-linkedin" />
          </a>
        </div>
      </footer>
      <a href="#home" title="voltar ao topo">
        <FaArrowAltCircleUp className="fixed bottom-3 right-3 text-3xl text-gray-700 dark:text-white transform hover:scale-110 transition-transform" />
      </a>
      <div className="fixed bottom-3 left-3 sm:hidden">
        {knowledge ? (<div className="w-12 p-4 bg-slate-900 dark:bg-white mb-2 flex justify-center items-center flex-col gap-3 rounded-md shadow-lg transition-transform text-white dark:text-slate-800">
          <SiHtml5 className="text-2xl" title="html" />
          <SiCss3 className="text-2xl" title="css" />
          <SiJavascript className="text-2xl" title="javascript" />
          <SiPython className="text-2xl" title="python" />
          <SiTailwindcss className="text-2xl" title="tailwindcss" />
          <SiBootstrap className="text-2xl" title="bootstrap" />
          <SiDjango className="text-2xl" title="django" />
          <SiReact className="text-2xl" title="react" />
          <DiMysql className="text-2xl" title="mysql" />
          <SiLinux className="text-2xl" title="linux" />
        </div>) : null}
        <FaBook className="text-2xl text-gray-700 dark:text-white transform hover:scale-110 transition-transform cursor-pointer" onClick={toggleKnowledge} />
      </div>
    </div>
  );
}

export default App;