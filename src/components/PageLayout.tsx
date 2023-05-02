import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageLayoutInterface } from "../interfaces";
import { AppContextProvider } from "../context";

export default function PageLayout({ children }: PageLayoutInterface) {
  return (
    <div>
      <AppContextProvider>
        <Navbar />
          {children}
        <Footer />
      </AppContextProvider>
    </div>
  );
}
