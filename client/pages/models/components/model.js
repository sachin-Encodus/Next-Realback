import React, { useState, useEffect } from "react";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
const Model = ({ modelno, devicename, id, auth }) => {
  const router = useRouter();

  console.log("new logout", auth);
  useEffect(() => {
    if (auth === null) {
      router.push("/auth/login");
    }
  }, []);
  // const [devicename, setDevicename] = useState("");
  // const [model, setmodel] = useState("");
  // const [modelno, setModelno] = useState([]);
  // const [devicedata, setDevicedata] = useState([]);
  // const { id } = useParams();
  // console.log("====================================", id);

  // useEffect(() => {
  //   getmodel(id);
  // }, []);

  // const getmodel = async (id) => {
  //   try {
  //     const res = await axios.get(`/api/getmodel/${id}`);
  //     console.log(id);
  //     // console.log("====>>>>>>>>>>>", res.data.device.model);
  //     console.log("====>>>>>>>>>>>devicename", res.data.device.deviceName);
  //     setModelno(res.data.device.model);

  //     setDevicename(res.data.device.deviceName);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(devicedata);
  // const getservice = async (itemValue) => {
  //   try {
  //     const filteredData = modelno.filter((item) => item._id === itemValue);
  //     setDevicedata(filteredData[0].modedata);
  //     setmodel(filteredData[0].modelno);
  //     console.log("============>>>>>>>>>>", filteredData[0].modedata);
  //     //   console.log("============>>>>>>>>>>xxxxxxxxxxx", filteredData[0].modelno);
  //   } catch (error) {}
  // };

  return (
    <div>
      <section>
        <div className="container">
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
            Choose your model for which you are looking for services
          </div>
          <div className="row">
            {modelno &&
              modelno.map((product) => (
                <div
                  key={product._id}
                  class="col-6 col-sm-6  col-md-3 col-lg-3 "
                >
                  <Link
                    href={{
                      pathname: "/models/components/problem",
                      query: { id, probId: product._id, dname: devicename },
                    }}
                    // href={{
                    //   pathname: "/problem/",
                    //   search: `deviceId=${id}&probId=${product._id}&devicename=${devicename}`,
                    // }}
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
                          marginBottom: 10,
                        }}
                      >
                        {/* <Link
                    to={{
                      pathname: "/device",
                      search: `routeName=${JSON.stringify(product.data)}`, //dog is the object to pass along
                    }}
                  > */}

                        <img
                          src={product.image}
                          alt="Product"
                          class="modelImage"
                        />

                        {/* </Link> */}
                      </div>
                      <div class="text-center">
                        <span>{product.modelno}</span>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        {/* {devicedata.length !== 0 ? (
          <Link
            style={{ padding: 18 }}
            to={{
              pathname: "/problem",
              search: `routeName=${JSON.stringify(
                devicedata
              )}&devicename=${devicename} ${model}`, //dog is the object to pass along
            }}
            class="app-btn blu flex vert  "
          >
            <span class="big-txt">Service</span>
          </Link>
        ) : null} */}
      </section>
    </div>
  );
};

export default Model;

export async function getServerSideProps(ctx) {
  try {
    const { id } = ctx.query;
    const res = await axios.get(`/api/getmodel/${id}`, {
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });

    return {
      props: {
        id,
        devicename: res.data.device.deviceName,
        modelno: res.data.device.model,
      },
    };
  } catch (error) {
    console.log("==========dddddddd", ctx.req.headers.cookie);
    const data = ctx.req.headers.cookie ? ctx.req.headers.cookie : null;
    return {
      props: {
        error: JSON.stringify(error),
        auth: data,
      },
    };
  }
}
