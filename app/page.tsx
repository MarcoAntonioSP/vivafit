import Alimentacao from "./components/alimentacao/Alimentacao";
import MosaicoAlimentacao from "./components/mosaicoalimentacao/MosaicoAlimentacao";
import styles from "./estilomosaicoal.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <Alimentacao />
      <section className={styles.sectionAlimentacao}>
        <MosaicoAlimentacao />
        <MosaicoAlimentacao />
        <MosaicoAlimentacao />
        <MosaicoAlimentacao />
        <MosaicoAlimentacao />
        <MosaicoAlimentacao />
      </section>
    </main>
  );
}
