import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

function Home () {
    return (
        <>
        <Header />
        <NavBar />
        <h1 className="home">Welcome to Ian's movie voting app!</h1>
        </>
    )
}

export default Home