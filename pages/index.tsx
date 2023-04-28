import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import {FaLinkedin} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    <div>
      <div>
        <Head>
          <title>Cory Chaplin&apos;s Portfolio</title>
          <meta name="description" />
          
        </Head>
      </div>

      <main>
        <section
          className='bg-gray-100 h-25'>
            <nav className=' bg-gradient-to-tr from-emerald-400 to-slate-600 py-10 mb-12 flex justify-between px-10'>
              
              <h1>@2023 Cory Chaplin</h1>
            </nav>

            <div className='text-center p-10'>
              <h2 className=" text-4xl py-2 font-medium">Cory Chaplin</h2>
              <h3 className='text-3xl m-3'>Software Developer and designer</h3>
              <p className='text-lg m-3'>
                Passionate and focused entry-level Full Stack Developer transitioning to the tech industry. 
                Strong communication, problem-solving, and analytical skills are brought from a proven track record of success in the financial services industry.
                Eager to continue developing accessible and functional user interfaces, databases, and APIs.
                Focused and self-motivated learner looking to join an environment where collaboration and teamwork are key
              </p>
            </div>
            <div className='relative p-3 mx-auto bg-gradient-to-br from-teal-300 to gray-500 rounded-full flex justify-center w-300 h-125 overflow'>
              
              <Image src={'/../public/portfolio-1.jpg'} alt='AI generated art' width={120} height={85}  className='flex justify-center' />
            </div>
        </section>
        <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-lg rounded-lg px-2 py-4 flex items-center"
            >
              <span className="text-lg font-bold w-full text-center">
                <span className="inline-block scale-100 hover:scale-110">
                  {skill}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
      <ul className='flex justify-center gap-12 py-3'>
                <li><a href='https://www.linkedin.com/in/cory-o-chaplin/'><FaLinkedin className='text-4xl text-gray-700 hover:text-blue-600 hover:scale-125 transform transition-all duration-300'/></a></li>
                <li><a href='https://github.com/coryoc'><FiGithub className='text-4xl text-gray-700 hover:text-blue-600 hover:scale-125 transform transition-all duration-300' /></a></li>
              </ul>
    </div>
  );
}
