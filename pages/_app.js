import "tailwindcss/tailwind.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#d4e157"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
