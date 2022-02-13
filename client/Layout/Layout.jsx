import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { rootUser } from "../actions/index";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/rootUser", { withCredentials: true })
      .then((response) => dispatch(rootUser(response.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
