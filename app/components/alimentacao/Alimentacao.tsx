import styles from "./alimentacao.module.css";
import Link from "next/link";

export default function Alimentacao() {
  return (
    <main>
      <h1 className={styles.title}>VivaFit</h1>
      <Link className={styles.linkHover} href="/post">
        <div className={styles.section}>
          <br />
          <div className={styles.firstImgArticle}>
            <img
              className={styles.imgstyle}
              src="https://img.freepik.com/fotos-gratis/mulher-com-abdomen-visivel-
          fazendo-fitness_23-2150228936.jpg?t=st=1725251520~exp=1725255120~hmac
          =ab8a65534107bf3fb453635dfb7b5e4ea6474755af71d16d718e272a61c148df&w=740"
              alt="mulher se exercitando"
            />
          </div>
          <div className={styles.descriptionArticle}>
            <h2>texto a ser consumido</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              nisi qui voluptates. Rem, animi eaque inventore culpa ea excepturi
              voluptate quibusdam deserunt, in similique illo doloremque libero
              atque aperiam incidunt.
            </p>
            <div className={styles.dataAndAutor}>
              <p>Marco Antonio</p>
              <p>02 setembro 2024</p>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}
