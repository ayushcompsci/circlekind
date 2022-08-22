import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'normal']" lang="en">

      <Head>

        {/* import fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"/>

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
