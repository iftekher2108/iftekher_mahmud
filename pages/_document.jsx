import { Html, Main, Head, NextScript } from "next/document";
import { useState } from "react";
import Theme from "@/components/Theme";
// class MyDocument extends Document {

  
  // static async getInitialProps(ctx) {
  //   const originalRenderPage = ctx.renderPage;
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       enhanceApp: (App) => App,
  //       enhanceComponent: (Component) => Component,
  //     });
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return initialProps;
  // }

  function Document() {
    const [theme,setTheme] = useState('dark')
    return (
      <Html lang="en" data-bs-theme={theme}>
        <Head />
        <body>
          <Theme theme={theme} setTheme={setTheme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
// }
export default Document
// export default MyDocument