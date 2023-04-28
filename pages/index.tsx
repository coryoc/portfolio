import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import {FaLinkedin} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          className='bg-slate-700 h-screen'>
            <nav className='py-10 mb-12 flex justify-between bg-white px-10'>
              <ul className='flex items-center'>
                <li></li>
                <li><a href='https://www.linkedin.com/in/cory-o-chaplin/'><FaLinkedin /></a></li>
                <li><a href='https://github.com/coryoc'><FiGithub /></a></li>
              </ul>
              <h1>@2023 Cory Chaplin</h1>
            </nav>

        </section>
      </main>
    </div>
  );
}
