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

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/barchart" element={<Barchart />} />
        <Route path="/linechart" element={<Linechart />} />
        <Route path="/piechart" element={<Piechart />} />
        <Route path="*" element={<Variables />} />
      </Routes>
      <Footer />
    </>
  );
}
