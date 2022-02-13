import React, { useState, useEffect } from "react";
import axios from "axios";

import Link from "next/link";

import { useRouter } from "next/router";
// import Skeleton from "@material-ui/core/Skeleton";
// import { BiArrowBack } from "react-icons/bi";

// import TextField from "@material-ui/core/TextField";
// import Box from "@material-ui/core/Box";

// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch } from "react-redux";
import { setDeviceData } from "../../../actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  overflow: "scroll",
  p: 4,
};

function Device({ company }) {
  console.log(company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDeviceData(company));
  }, []);

  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <div class="container">
          <div
            style={{
              boxShadow: " 0px 15px 20px rgba(63, 63, 63, 0.4)",
              backgroundColor: "#fff",
              fontFamily: "sans-serif",
              padding: 20,
              textAlign: "center",
              borderRadius: 10,

              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Choose your device for which you are looking for services
          </div>

          <div class="row">
            {company &&
              company.map((product) => (
                <div
                  key={product._id}
                  class="col-6 col-sm-6  col-md-3 col-lg-3 "
                >
                  <Link
                    href={{
                      pathname: "/models/components/model",
                      query: { id: product._id },
                    }}
                  >
                    <a>
                      <div
                        style={{
                          boxShadow: " 0px 15px 20px rgba(63, 63, 63, 0.4)",
                          backgroundColor: "#fff",
                          padding: 10,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: 5,
                          height: 140,
                          borderRadius: 10,
                          marginBottom: 20,
                        }}
                      >
                        {/* <Link
                    to={{
                      pathname: "/device",
                      search: `routeName=${JSON.stringify(product.data)}`, //dog is the object to pass along
                    }}
                  > */}

                        <img
                          src={product.Cimage}
                          alt="Product"
                          class="companyImage"
                        />

                        {/* </Link> */}
                      </div>
                      <div class="text-center">
                        <span>{product.deviceName}</span>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Device;

// This function gets called at build time
export async function getStaticPaths() {
  const paths = ["/models/components/mobile", "/models/components/laptop"];
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  const res = await axios.get(`/api/getCompany/${id}`);

  return {
    props: {
      company: res.data.device,
    },
  };
}
