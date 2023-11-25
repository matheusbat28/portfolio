import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBook } from "react-icons/fa6";
import { FaCode, FaArrowAltCircleUp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail, SiDjango, SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiLinux } from "react-icons/si";
import { PiNewspaperFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import me from './assets/img/me.png';

function App() {

  document.title = 'Matheus batista';

  const [knowledge, setKnowledge] = React.useState(false);

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
        <div className="h-full flex items-center justify-center">
        </div>
        <div className="h-full w-full absolute top-0 left-0 flex justify-center">
          <div className="w-80 md:w-1/2 text-gray-700 dark:text-gray-300 flex items-center flex-col gap-4 pt-5">
            <h3 className="text-2xl  text-center">Sobre mim</h3>
            <p className="text-left lg:text-justify">
              Desde pequeno a minha paixão sempre foi a tecnologia. O meu primeiro contato nessa área foi a partir da linguagem de programação Java, e
              foi a partir dessa experiência que eu passei cada vez mais me interessar por esse mundo digital. Sempre sonhei em cursar Análise de
              Desenvolvimento de Sistema e em 2020 pude realizar esse sonho estudando no Senac (Serviço Nacional de Aprendizagem Comercial),
              onde estou lá até os dias atuais. Durante o meu tempo no curso técnico, fiz e faço vários cursos na Udemy,
              também sou formado em Python Full Stack e Java Desktop. Atualmente trabalho com python (django), entretanto,
              nas horas vagas eu uso&nbsp;
              <a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos" className="hover:text-cor-html">HTML</a>,
              <a href="https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css/" className="hover:text-cor-css"> CSS</a>,&nbsp;
              <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript" className="hover:text-cor-js">JS</a> e&nbsp;
              <a href="https://kenzie.com.br/blog/o-que-e-python/?utm_source=adwords&utm_campaign=TRAFFIC-DIST-BLOG-SEARCH&utm_term=python&utm_medium=google-ads&hsa_cam=20546388451&hsa_grp=160211981424&hsa_ad=673611232726&gad_source=1&gclid=CjwKCAiA04arBhAkEiwAuNOsIpLPSveKDIoyzC6JAJvUf5Ms164gWoMDyTm-UCrdc46ZQEf-SRKkIhoCkksQAvD_BwE" className="hover:text-cor-python">PYTHON</a>
              &nbsp;com a framework&nbsp;
              <a href="https://www.hostinger.com.br/tutoriais/o-que-e-react-javascript" className="hover:text-cor-react">REACT</a>,&nbsp;
              <a href="https://www.alura.com.br/artigos/react-native?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20802484994&hsa_grp=162793339904&hsa_ad=682182591269&hsa_src=g&hsa_tgt=dsa-2258482178843&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA04arBhAkEiwAuNOsIh5uHE_zobFkblm_ExJzWgS71nhioCc3iEG6XJVui1qlVcW-9CpXthoCpoAQAvD_BwE" className="hover:text-cor-react-native">REACT NATIVE</a>,&nbsp;
              <a href="https://kenzie.com.br/blog/django/" className="hover:text-cor-django">DJANGO</a>,&nbsp;
              <a href="https://www.treinaweb.com.br/blog/o-que-e-o-django-rest-framework" className='hover:text-cor-django-rest'>DJANGO REST</a>.
            </p>
            <div className="md:mt-3 md:w-1/2 flex items-center justify-center flex-col md:flex-row gap-4">
              <img height="180em" src="https://github-readme-stats.vercel.app/api?username=matheusbat28&show_icons=true&theme=dark&include_all_commits=true&count_private=true" alt="github stats" />
              <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=matheusbat28&layout=compact&langs_count=7&theme=dark" alt="github languages" />
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
      <section id="training" className="h-full w-full bg-white dark:bg-slate-900"></section>
      <section id="code" className="h-full w-full bg-white dark:bg-slate-900"></section>
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