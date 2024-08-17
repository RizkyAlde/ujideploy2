import React from "react";
import "../styles/globals.css";
import Layout from "../dashboard/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Use useRouter to get the current path
  const noLayoutPages = [
    "/login/landing",
    "/login/login",
    "/login/signin",
    "/admin/profil",
    "/",
  ]; // Specify pages that do not use Layout

  // Check if the current page is in the noLayoutPages array
  const noLayout = noLayoutPages.includes(router.pathname);

  return noLayout ? (
    // If noLayout is true, render the component without Layout
    <Component {...pageProps} />
  ) : (
    // If noLayout is false, render the component with Layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
