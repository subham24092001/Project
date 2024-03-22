import React from "react";
import { Content, Footer, Headquaters, Heroo, InfoRow, Newsletter } from "./components";

function App() {
  return (
    <div>
      <Heroo />
      <InfoRow />

      <div className="lg:hidden">
        <Headquaters />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 mx-12 lg:mt-16">
        <h1 className="font-jost text-4xl text-blue-900 font-semibold text-center lg:w-[750px]">See how QuillAudits is a trusted partner in 1000+ Audit stories</h1>
        <div className="custom-button w-fit">Request an Audit</div>
      </div>

      <div className="w-full lg:flex lg:w-fit lg:mx-52 overflow-auto">
        <div className="w-full lg:w-2/3">
          <Content />
        </div>
        <div className="hidden lg:block mt-32 lg:w-1/3">
          <Headquaters />
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
