/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Method } from "./components/Method";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { Diagnostic } from "./components/Diagnostic";
import { Execution } from "./components/Execution";
import { ForWhom } from "./components/ForWhom";
import { WhyChoose } from "./components/WhyChoose";
import { Stats } from "./components/Stats";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col relative overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Method />
        <HowItWorks />
        <Services />
        <Diagnostic />
        <Execution />
        <ForWhom />
        <WhyChoose />
        <Stats />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
