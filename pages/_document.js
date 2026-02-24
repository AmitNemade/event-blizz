import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=EB+Garamond|Lato:300&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700i"
        />
        <link rel="stylesheet" href="/mdi-font/css/material-design-iconic-font.min.css" />
        <script src="https://kit.fontawesome.com/8d0d6b5845.js" crossOrigin="anonymous" defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
