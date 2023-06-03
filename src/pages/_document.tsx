import { Html, Head, Main, NextScript } from "next/document";
import { fontSans } from "~/lib/fonts";
import { cn } from "~/lib/utils";

export default function Document() {
  return (
    <Html>
      <Head></Head>

      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
