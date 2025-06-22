import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

          <link rel="icon" href="/favicon.ico" />
         {/* Optional for modern browsers */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        {/* Google Font: JetBrains Mono */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
