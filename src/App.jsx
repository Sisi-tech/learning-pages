import React from 'react';
import Card from './component/Card';
import htmlLogo from './assets/html.png';
import TailwindCSS from './assets/TailwindCSS.png';
import JS from './assets/JS.png';
import mysql from './assets/mysql.png';
import python from './assets/python.png';
import java from './assets/java.png';
import git from './assets/git.png';
import react from './assets/react.png';
import django from './assets/django.png';
import nodejs from './assets/nodejs.png';
import ts from './assets/ts.png';
import banner from './assets/banner2.png';

const data = [
  {
    image: htmlLogo,
    title: "HTML",
    type: "Front-end",
    src: "https://www.w3schools.com/html/default.asp"
  },
  {
    image: TailwindCSS,
    title: "Tailwind CSS",
    type: "Front-end",
    src: "https://tailwindcss.com/docs/guides/vite"
  },
  {
    image: JS,
    title: "JavaScript",
    type: "Front-end",
    src: "https://www.w3schools.com/js/default.asp"
  },
  {
    image: mysql,
    title: "SQL",
    type: "Database",
    src: "https://www.w3schools.com/sql/default.asp"
  },
  {
    image: python,
    title: "Python",
    type: "Back-end",
    src: "https://www.w3schools.com/python/default.asp"
  },
  {
    image: java,
    title: "JAVA",
    type: "Back-end",
    src: "https://www.w3schools.com/java/default.asp"
  },
  {
    image: git,
    title: "Git",
    type: "VS control",
    src: "https://www.w3schools.com/git/default.asp"
  },
  {
    image: react,
    title: "React",
    type: "Front-end",
    src: "https://www.w3schools.com/react/default.asp"
  },
  {
    image: django,
    title: "Django",
    type: "Back-end",
    src: "https://www.w3schools.com/django/index.php"
  },
  {
    image: ts,
    title: "TypeScript",
    type: "Back-end",
    src: "https://www.w3schools.com/typescript/index.php"
  },
  {
    image: nodejs,
    title: "Nodejs",
    type: "Back-end",
    src: "https://www.w3schools.com/nodejs/default.asp"
  },
];

function App() {

  return (
    <>
      <div className='w-full bg-stone-200 flex flex-col justify-center items-center gap-10 pb-20'>
        <div className='w-full h-[360px] grid grid-cols-2' style={{ backgroundImage: `url(${banner})`}}>
          <h2 className='text-4xl text-center pt-32 font-bold'>Lean software engineer</h2>
        </div>
        <ul className='w-2/3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {data.map((item) => {
            return (
              <li key={item.title} className="bg-slate-100 hover:bg-slate-200 p-8 m-6 rounded-2xl shadow-md shadow-gray-400 hover:scale-110 w-[300px]">
                <Card img={item.image} title={item.title} type={item.type} src={item.src} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  )
}

export default App
