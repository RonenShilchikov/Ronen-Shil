import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto, JetBrains_Mono } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-terminal',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} ${jetbrains.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
