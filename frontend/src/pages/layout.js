import React from "react";
import Dashboard from "./dashboard";
import { Route, Routes } from "react-router-dom";
import Variables from "./variables";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Barchart from "./barchart";
import Linechart from "./linechart";
import Piechart from "./piechart";
import Charts from "./multicharts";

import Common from "./common";

export default function Layout() {
  return (
    <>
      <Common />
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/barchart" element={<Barchart />} />
        <Route path="/linechart" element={<Linechart />} />
        <Route path="/piechart" element={<Piechart />} />
        <Route path="*" element={<Variables />} />
        <Route path="/charts/*" element={<Charts />} />
      </Routes>
      <Footer />
    </>
  );
}
