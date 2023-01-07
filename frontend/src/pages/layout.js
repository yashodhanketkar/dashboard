import React from "react";
import Dashboard from "./dashboard";
import { Route, Routes } from "react-router-dom";
import {
  Intensity,
  Likelihood,
  Relevance,
  StartYear,
  EndYear,
  Country,
  Topic,
  Region,
} from "./variables";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Barchart from "./barchart";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/intensity" element={<Intensity />} />
        <Route path="/likelihood" element={<Likelihood />} />
        <Route path="/relevance" element={<Relevance />} />
        <Route path="/start-year" element={<StartYear />} />
        <Route path="/end-year" element={<EndYear />} />
        <Route path="/country" element={<Country />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/region" element={<Region />} />
        <Route path="/barchart" element={<Barchart />} />
      </Routes>
      <Footer />
    </>
  );
}
