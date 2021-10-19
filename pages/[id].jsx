import Layout from "../components/Layout";
import styles from "../styles/quran.module.css";

export default function AlQuran(props) {
  const { quran } = props;
  return (
    <Layout>
      <div className="text-center">
        <p className="font-semibold text-lg">{quran.nama_latin}</p>
        <p className="text-lg">{quran.arti}</p>
        <p className={`text-5xl mt-3 ${styles['text-quran']}`}>{quran.nama}</p>
      </div>

      {quran.ayat.map((item, index) => {
        return (
          <div className="rounded-md shadow-md p-7 flex flex-col mb-5" key={index}>
            <p className="rounded-full h-9 w-9 p-5 bg-green-50 flex items-center justify-center text-green-900 font-bold">
              {item.nomor}
            </p>
            <div className="flex justify-end mt-5">
              <p className={`text-3xl text-right ${styles['text-quran']}`}>
                {item.ar}
              </p>
            </div>
            <div className="desc mt-8">
              {/* <p dangerouslySetInnerHTML={{ __html: item.tr }}></p> */}
              <p className="text-justify">{item.idn}</p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://equran.id/api/surat");
  const dataQuran = await res.json();
  const paths = dataQuran.map((item) => ({
    params: { id: item.nomor.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://equran.id/api/surat/${id}`);
  const quran = await res.json();
  return {
    props: {
      quran,
    },
  };
}
