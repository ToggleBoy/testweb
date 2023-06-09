import "../styles/globals.css";
import favico from "../../public/favicon.ico";
import { Roboto_Flex } from 'next/font/google';

const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Radhakrishnan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <link rel="shortcut icon" href={favico.src} type="image/x-icon"/>
      </head>
      <body className={roboto_flex.className}>
        {children}
      </body>
    </html>
  );
}
