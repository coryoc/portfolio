import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import {FaLinkedin} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi';
import {HiDocumentText} from 'react-icons/hi';

import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'Git',
    'AWS',
    'Docker',
    'TypeScript',
  ];


  return (
    <div className={darkMode ? 'dark' : ""}>
      <div>
        <Head>
          <title>Cory Chaplin&apos;s Portfolio</title>
          <meta name="description" />
        </Head>
      </div>

      <main>
      
        <section
          className='bg-slate-100 h-25 dark:bg-gray-900'>
            <nav className=' bg-gradient-to-tr from-emerald-400 to-slate-600 py-10 mb-12 flex justify-between px-3 h-5'>
              
              <h1>@2023 Cory Chaplin</h1>
            <button onClick={() => setDarkMode(!darkMode)}> test </button>
            </nav>

            <div className='text-gray-800 text-center dark:text-slate-100 max-w-4xl m-auto p-4 bg-gray-200 rounded-xl'>
              <h2 className="text-4xl py-2 font-medium">Cory Chaplin</h2>
              <h3 className='text-3xl m-3'>Software Developer and designer</h3>
              <p className='text-lg m-3 leading-8 py-2 px-5'>
              As an entry-level Full Stack Developer with a passion for technology, I am excited to transition into the dynamic and rapidly growing tech industry. My background in the financial services industry has honed my communication, problem-solving, and analytical skills, which I am eager to apply to web development.<br></br> <br></br> With experience developing accessible and functional user interfaces, databases, and APIs, I am committed to creating user-friendly digital experiences that meet the needs of diverse audiences. As a focused and self-motivated learner, I thrive in collaborative and team-oriented environments, and I am eager to contribute to a team that values innovation and excellence.
              </p>
            </div>

            <div className='relative p-3 mx-auto bg-gradient-to-br from-teal-300 to gray-500 rounded-full flex justify-center w-300 h-125 overflow'>
              
              <Image src={'/../public/portfolio-1.jpg'} alt='AI generated art' width={120} height={85}  className='flex justify-center' />
            </div>
        </section>

        <section className="bg-gray-100 py-16">
      <div className="text-gray-800 text-center dark:text-slate-100 max-w-4xl mx-auto p-4 bg-gray-200 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-lg rounded-lg px-2 py-4 flex items-center hover:bg-slate-400 hover:scale-110 transition duration-400 delay-200 ease-in-out"
            >
              <span className="text-lg font-bold w-full text-center">
                <span className="inline-block scale-100 ">
                  {skill}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

          {/* <canvas id="canvas"></canvas> */}
          <section className="bg-gray-100 py-16">
      <div className="text-gray-800 text-center dark:text-slate-100 max-w-4xl mx-auto p-4 bg-gray-200 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">My Recent Work</h2>
        <p>
          Here are projects I've worked on previously
        </p>
      </div>
    </section>

      </main>

    <ul className='flex justify-center gap-12 py-3'>
              <li>
                <a href='https://www.linkedin.com/in/cory-o-chaplin/'>
                  <FaLinkedin className='text-4xl text-gray-700 hover:text-blue-600 hover:scale-125 transform transition-all duration-300'/>
                </a>
              </li>
              <li>
                <a href='https://github.com/coryoc'>
                  <FiGithub className='text-4xl text-gray-700 hover:text-blue-600 hover:scale-125 transform transition-all duration-300' />
                </a>
              </li>
              <li>
                <a href='https://docs.google.com/document/d/1vQ-7VPjg3oil23s_EU1hKt6H9hTDPzXT/edit?usp=sharing&ouid=117126937520048655363&rtpof=true&sd=true'>
                  <HiDocumentText className='text-4xl text-gray-700 hover:text-blue-600 hover:scale-125 transform transition-all duration-300' />
                </a>
              </li>
            </ul>
    </div>
  );
}
