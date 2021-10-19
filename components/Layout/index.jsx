import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Quran App</title>
        <meta name="description" content="Aplikasi Al-Quran Online" />
        <meta
          name="keywords"
          content="Al-Quran Apps, Al-Quran Online, Al-Quran PWA, Quran"
        />
        <meta name="author" content="Bintang Rezeka Ramadani" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col justify-between h-screen font-poppins">
        <Header />
          <div className="mb-auto container py-5 mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
}
