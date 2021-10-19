import { useRouter } from "next/dist/client/router";
import styles from "../../styles/quran.module.css";

export default function Card(props) {
  const router = useRouter();
  const { id, no, ayat, title, desc } = props;
  return (
    <div
      className="cursor-pointer w-96 p-5 rounded-2xl shadow-lg mr-5 hover:bg-gradient-to-r hover:from-light-blue-500 hover:to-teal-600 hover:text-white mt-5"
      onClick={() => router.push(`/${id}`)}
    >
      <div className="flex justify-between items-center">
        <p className="rounded-full h-9 w-9 p-5 bg-green-50 flex items-center justify-center text-green-900 font-bold">
          {no}
        </p>
        <p className={`text-xl font-semibold ${styles['text-quran']}`}>{ayat}</p>
      </div>
      <div className="title mt-5">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
