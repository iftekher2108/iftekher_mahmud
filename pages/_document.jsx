import Document ,{ Html, Main, Head, NextScript } from "next/document";
import { useState } from "react";
class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en" data-bs-theme='dark'>
        <Head />
        <body>
          <Main  />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument
// export default MyDocument