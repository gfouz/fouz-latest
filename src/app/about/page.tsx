import Image from 'next/image';
import Link from 'next/link';

import s from './page.module.scss';
import { about_eslint, about_typescript } from 'data/aboutData';
import { navbarVariant, paragraph_1 } from 'data/aboutData';
import about1 from 'images/about.jpg';
import Navbar from 'components/navbar/Navbar';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';

const pages = ['/', '/about', '/work', '/contact'];

export default function Home() {
  return (
    <div className={s.about}>
      <header className={s.about__header}>
        <Navbar className={s.about__navbar} list={pages} />
      </header>
      <main className={s.about__main}>
        <article className={s.about__main_article}>
          <Image src={about1} alt="typescript" />
        </article>
      </main>
      <aside className={s.about__aside}>
        <article className={s.about__aside_article}>
          <h2 className={s.about__title}>Overview</h2>
          <p>{paragraph_1}</p>
        </article>
        
      </aside>

      <article className={s.about__aside_details}>
          <details open >
            <summary className={s.about__summary}>
              {' '}
              Why do i love typescript?{' '}
            </summary>
            <p>{about_typescript}</p>
          </details>
          <details open >
            <summary className={s.about__summary}>Two powerful tools.</summary>
            <p>{about_eslint}</p>
          </details>
        </article>

        
      <footer className={s.about__footer}>
        <h4>gfouz &copy; {new Date().getFullYear()}</h4>
      </footer>
    </div>
  );
}
