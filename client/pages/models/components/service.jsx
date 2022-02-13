import React from "react";
import Link from "next/link";
import Head from "next/head";

const data = {
  device: [
    {
      id: "1",
      productName: "Mobile",
      data: {
        name: "mobile",
        image: "/images/iphone12.png",
      },
    },

    {
      id: "2",
      productName: "Laptop",
      data: {
        name: "laptop",
        image: "/images/macbook.png",
      },
    },
    {
      id: "3",
      productName: "Ipad",
      data: {
        name: "ipad",
        image: "/images/ipad.png",
      },
    },
    {
      id: "4",
      productName: "Watch",
      data: {
        name: "watch",
        image: "/images/iwatch.png",
      },
    },
    {
      id: "5",
      productName: "Airpod",
      data: {
        name: "airpod",
        image: "/images/airpodpro.png",
      },
    },
    {
      id: "6",
      productName: "led",
      data: {
        name: "led",
        image: "/images/net.png",
      },
    },
    {
      id: "7",
      productName: "Drone",
      data: {
        name: "drone",
        image: "/images/cpu.png",
      },
    },
    {
      id: "8",
      productName: "Power bank",
      data: {
        name: "powerbank",
        image: "/images/speaker.png",
      },
    },
  ],
};

const Service = () => {
  const { device } = data;

  return (
    <div>
      <Head>
        <title>Realback || Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/realback.png" />
      </Head>
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
            {device.map((product) => (
              <div key={product.id} class="col-6 col-sm-6  col-md-3 col-lg-3 ">
                <Link
                  href="/models/components/[id]"
                  as={"/models/components/" + product.data.name}
                >
                  <a style={{ color: "#000" }}>
                    <div
                      style={{
                        boxShadow: " 0px 15px 20px rgba(63, 63, 63, 0.4)",
                        backgroundColor: "#fff",
                        padding: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 5,
                        height: 180,
                        borderRadius: 20,
                        marginBottom: 20,
                      }}
                    >
                      {/* <Link
                    to={{
                      pathname: "/device",
                      search: `routeName=${JSON.stringify(product.data)}`, //dog is the object to pass along
                    }}
                  > */}
                      <div>
                        <img
                          src={product.data.image}
                          alt="Product"
                          class="serviceImage"
                        />

                        {/* </Link> */}
                        <div class="text-center mt-3">
                          <span>{product.productName}</span>
                        </div>
                      </div>
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
};

export default Service;
