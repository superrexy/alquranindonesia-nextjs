import { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home(props) {
  const { dataQuran } = props;

  const [search, setSearch] = useState(null);

  const searchSurat = (ev) => {
    setSearch(ev.target.value);
    console.log(search);
  };

  return (
    <div className="bg-grey-50">
      <Layout>
        <div className="p-8">
          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input
              className="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Pencarian Surat"
              onChange={(e) => searchSurat(e)}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center ">
          {dataQuran
            .filter((data) => {
              if (search == null) {
                return data;
              } else if (
                data.nama_latin.toLowerCase().includes(search.toLowerCase()) ||
                data.arti.toLowerCase().includes(search.toLowerCase())
              ) {
                return data;
              }
            })
            .map((item, index) => {
              return (
                <Card
                  id={item.nomor}
                  ayat={item.nama}
                  no={item.nomor}
                  title={item.nama_latin}
                  desc={item.arti}
                  key={index}
                />
              );
            })}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://equran.id/api/surat");
  const dataQuran = await res.json();
  return {
    props: {
      dataQuran,
    },
  };
}
