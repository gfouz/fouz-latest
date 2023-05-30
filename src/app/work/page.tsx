import Image from 'next/image';
import s from './page.module.scss';
import { navbarVariant, about_react, experience } from 'data/homepageData';
import homepage from 'images/work.jpg';
import colors from 'images/colors.jpg';
import nest from 'images/gradient.jpg';
import Navbar from 'components/navbar/Navbar';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';

const pages = ['/', '/about', '/work', '/contact'];

export default function Home() {
  return (
    <main className={s.work_main}>
      <Image src={homepage} alt="mainpicture" />
      <MotionOnScroll variants={navbarVariant}>
        <Navbar className={s.work__navbar} list={pages} />
      </MotionOnScroll>
      <article className={s.work_article}>
        <section className={s.work_article__section_image}>
          <Image src={colors} alt="colors" />
        </section>
        <section className={s.work_article__section1}>
          <h2 className={s.work_article__title}>Technical profile.</h2>
          <p className={s.work_article__paragraph}>{about_react}</p>
        </section>
      </article>
      <Image src={nest} alt="nest-picture" />
      <article className={s.work_article}>
        <section className={s.work_article__section2}>
          <h2 className={s.work_article__title}>Expirience.</h2>
          <p className={s.work_article__paragraph}>{experience}</p>
        </section>
        <section className={s.work_article__section3}>
          <h2 className={s.work_article__title}>Technical profile.</h2>
          <p className={s.work_article__paragraph}>{about_react}</p>
        </section>
      </article>
      <footer className={s.work__footer}>
        <h4>gfouz &copy; {new Date().getFullYear()}</h4>
      </footer>
    </main>
  );
}
