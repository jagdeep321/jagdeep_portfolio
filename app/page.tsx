"use client";

import { Stack } from "@mantine/core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Stack w="100%" gap={0}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contacts />
      <Footer />
    </Stack>
  );
}