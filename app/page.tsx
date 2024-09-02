import Alimentacao from "./components/alimentacao/Alimentacao";
import MosaicoAlimentacao from "./components/mosaicoalimentacao/MosaicoAlimentacao";
import styles from "./estilomosaicoal.module.css";
export default function Home() {
  return (
    <main>
      <Alimentacao />
      <section className="grid grid-cols-3 gap-8">
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
