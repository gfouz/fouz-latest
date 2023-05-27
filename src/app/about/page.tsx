import Image from "next/image";
import s from "./page.module.scss";
import { navbarVariant, paragraph_1 } from "data/aboutData";
import about1 from "images/cup.jpg";
import Navbar from "components/navbar/Navbar";
import MotionOnScroll from "components/motiononscroll/MotionOnScroll";

const pages = ["/", "/about", "/work", "/contact"];

export default function Home() {
  return (
    <div className={s.about}>
      <header className={s.about__header}>
        <Navbar className={s.about__navbar} list={pages} />
      </header>
      <main className={s.about__main}>
        <article className={s.about__main_article}>
          <Image src={about1} alt="typescript" />
          <section className={s.about__absolute_container}>
            <h2 className={s.about__title}>Made with NextJS.</h2>
          </section>
        </article>
      </main>
      <aside className={s.about__aside}>
        <h2>Overview</h2>
        <p>{paragraph_1}</p>
      </aside>
      <footer className={s.about__footer}>
        <h4>gfouz &copy; {new Date().getFullYear()}</h4>
      </footer>
    </div>
  );
}
