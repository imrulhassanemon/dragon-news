import React from "react";
import Header from "../Component/Header";
import LatesetNews from "../Component/LatesetNews";
import Navbar from "../Component/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>

        <section className="w-11/12 mx-auto">
          <LatesetNews></LatesetNews>
        </section>
        <nav className="w-11/12 mx-auto mt-5 mb-5">
            <Navbar></Navbar>
        </nav>
        <main className="w-11/12 mx-auto mt-5 mb-5 grid grid-cols-12 items-center justify-center">
            <aside className="left col-span-3">Navbar Left</aside>
            <section className="col-span-6">Navbar Main</section>
            <aside className="col-span-3">Navbar Right</aside>
        </main>
      </header>
    </div>
  );
};

export default HomeLayout;
