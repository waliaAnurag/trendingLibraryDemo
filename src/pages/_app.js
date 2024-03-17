import "@/styles/globals.css";
import Router from "next/router";
import React from "react";
export default function App({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false);

 
  return (

    <Component {...pageProps} />
   
  );
}
