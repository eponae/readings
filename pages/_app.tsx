import Theme from "../components/common/Theme";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
