import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Kritik harici script bağlantıları burada olabilir */}
      </Head>
      <body>
        <Script id="hydration-fix" strategy="beforeInteractive">
          {`
            (function() {
              // cz-shortcut-listen özniteliğini temizle
              if (typeof window !== 'undefined') {
                document.addEventListener('DOMContentLoaded', () => {
                  if (document.documentElement.hasAttribute('cz-shortcut-listen')) {
                    document.documentElement.removeAttribute('cz-shortcut-listen');
                  }
                });
              }
            })();
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 