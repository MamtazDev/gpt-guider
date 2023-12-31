import Main from "@/Layouts/Main";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
