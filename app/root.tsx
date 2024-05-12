import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
// import { rootAuthLoader } from "@clerk/remix/ssr.server";
// import { ClerkApp } from "@clerk/remix";
import type { LoaderFunction } from "@remix-run/node";
import { Partytown } from '@builder.io/partytown/react';

import stylesheet from "~/tailwind.css?url";
import Heading from "./heading";
import Footer from "./footer";
import "./styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// export const loader: LoaderFunction = (args) => rootAuthLoader(args);


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:700,900" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"/>
        <link href="favicon.ico"></link>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <Meta />
        <Links />
      </head>
      <body>
        <Heading />
        {children}
        {/* <Footer></Footer> DON'T NEED IT RN */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default App;