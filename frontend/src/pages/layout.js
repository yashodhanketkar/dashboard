import React from "react";
import SPPage from "../components/sppage";
import Country from "./country";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function Layout() {
  var data = Country({ start: 0, limit: 10 });
  return (
    <>
      <Header />
      <Sidebar />
      <SPPage data={data} />
      <Footer />
    </>
  );
}
