import React, { useState, useEffect } from "react";
import Head from "next/head";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// import { Redirect, useHistory } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import io from "socket.io-client";
import Skeleton from "@material-ui/lab/Skeleton";
import Error from "../../error404";

export default function Cart({ cartData, error, auth }) {
  const router = useRouter();
  const [email, setEmail] = useState("sachin@gmail.com");
  const socket = io("http://localhost:5000", {
    transports: ["websocket"],
  });

  console.log("new logout", auth);
  useEffect(() => {
    socket.emit("join", `order_${email}`);
    if (auth === null) {
      router.push("/auth/login");
    }
  }, []);

  // if (error && auth) {
  //   return <h1 className="mt-5"> {error}</h1>;
  // }
  //  const router =    useRouter()
  // const AuthUser = useSelector((state) => state.userReducer.userData);
  // AuthUser ? null : router.push('/')
  const [userdata, setUserdata] = useState(cartData);
  const [payments, setPayments] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [signature, setSignature] = useState("");
  const [paymentID, setPaymentID] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  console.log("=======>>>>>>>>>>", userdata);

  // useEffect(() => {
  //   // // setLoading(true);
  //   // let loggedIn = JSON.parse(localStorage.getItem("user"));
  //   // if (loggedIn !== null) {
  //   //   setEmail(loggedIn.email);

  //   // } else {
  //   //   setEmail({ email: "noreply@gmai.com" });

  //   // }
  //   cartdata();
  // }, [userdata]);

  // const cartdata = () => {
  //   const socket = io("/api/socket");

  //   axios
  //     .get("/api/cart",{withCredentials:true})
  //     .then(({ data }) => {
  //       setUserdata(data.user);

  //       setLoading(false);
  //       socket.emit("join", `order_${email}`);
  //     })
  //     .catch((err) => {
  //       // history.push("/login");
  //       console.log("====================================", err.response.data);
  //       setLoading(false);
  //     });
  // };
  // console.log(">>>>>>>>>>", userdata);

  socket.on("Updated", (data) => {
    // toast.dark(data.status);
    // console.log("========>>>>>xxxxxxx", data);
    // console.log("--------uerdata", userdata);

    if (userdata.length !== 0) {
      updateItem(data._id, "status", data.status);
      // const objIndex = userdata.findIndex((x) => x.id === data._id);

      // // console.log("Before update: ", data[objIndex]);
      // userdata[objIndex].status = data.status;

      // console.log("After update: ", userdata[objIndex]);
      // setUserdata(userdata);
    }
  });

  const updateItem = (_id, whichvalue, newvalue) => {
    const index = userdata.findIndex((x) => x._id === _id);

    let g = userdata[index];
    g[whichvalue] = newvalue;
    if (index === -1) {
      // handle error
      console.log("no match");
    } else
      setUserdata([
        ...userdata.slice(0, index),
        g,
        ...userdata.slice(index + 1),
      ]);
  };

  // let myArray = [
  //   { id: 0, name: "Jhon" },
  //   { id: 1, name: "Sara" },
  //   { id: 2, name: "Domnic" },
  //   { id: 3, name: "Bravo" },
  // ];

  // function update(params) {
  //   //Initailize array of objects.

  //   //Find index of specific object using findIndex method.
  //   const objIndex = myArray.findIndex((obj) => obj.id === 1);

  //   //Log object to Console.
  //   console.log("Before update: ", myArray[objIndex]);

  //   //Update object's name property.
  //   myArray[objIndex].name = "Laila";

  //   //Log object to console again.
  //   console.log("After update: ", myArray[objIndex]);
  // }

  var val = Math.floor(1000 + Math.random() * 9000);

  var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

  const payment = async (_id) => {
    var Data = userdata.filter((hero) => {
      return hero._id === _id;
    });

    const payData = Data[0];
    const { totalPrice, email, name, number } = payData;

    // const Mydata = Data.map(item => {
    //   return console.log(item.totalPrice);
    // })

    // const myJSON = JSON.stringify(Data);

    const res = await axios.get(`/api/payment/${totalPrice}/`);

    if (res.status !== 200) {
      return;
    }

    const options = {
      key: "rzp_live_yim6z2vfc3HOs6", // Enter the Key ID generated from the Dashboard
      amount: res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: res.data.currency,
      name: "Realback",
      description: "paying to realback",
      image: "/images/realback.png",
      order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
        setPaymentID(response.razorpay_payment_id);
        setOrderId(response.razorpay_order_id);
        setSignature(response.razorpay_signature);
        setPayments(true);
        // toast.dark("payment Successfull")
      },
      prefill: {
        name: name,
        email: email,
        contact: number,
      },
      notes: {
        address: _id,
      },
      // "theme": {
      //     "color": "#3399cc"
      // }
    };

    var rzp1 = new window.Razorpay(options);

    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };

  // const products = data.map( (order) => {
  //           return(`${order.productName}: ${order.name}.${order.price}.${order.qty} `
  //             ) ;

  //  });

  function skeloton() {
    return (
      <div className="row   ">
        <div className="col-md-2 mb-5  ">
          <Skeleton animation="wave" variant="rect" width="100%" height={200} />
        </div>
        <div className="col-md-6  ">
          <div>
            <Skeleton
              hieght={40}
              variant="h1"
              style={{ borderRadius: 10, width: "50%", marginBottom: 8 }}
              animation="wave"
            />
            <Skeleton
              style={{ borderRadius: 10, width: "60%", marginBottom: 8 }}
              variant="text"
            />
            <Skeleton
              style={{ borderRadius: 10, width: "65%", marginBottom: 8 }}
              variant="text"
            />
            <Skeleton
              style={{ borderRadius: 10, width: "30%", marginBottom: 8 }}
              variant="text"
            />
            <Skeleton
              style={{ borderRadius: 10, width: "40%", marginBottom: 8 }}
              variant="text"
            />
          </div>
        </div>

        {/* <div className="col-2 text-right-1">
              <hr/>
     
            </div> */}

        <div className="col-md-4 ">
          {/* <p>payment {item.mode}</p> */}
          <hr />
          <div>
            <Skeleton
              variant="h2"
              style={{ borderRadius: 5, width: "70%", marginBottom: 8 }}
              animation="wave"
            />

            <Skeleton
              variant="text"
              style={{ borderRadius: 5, width: "50%", marginBottom: 8 }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              style={{ borderRadius: 5, width: "60%", marginBottom: 8 }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              style={{ borderRadius: 5, width: "20%", marginBottom: 8 }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              style={{ borderRadius: 5, width: "40%", marginBottom: 8 }}
              animation="wave"
            />
          </div>
        </div>
      </div>
    );
  }

  const list =
    userdata &&
    userdata.map((item) => {
      return (
        <>
          <hr />

          <div
            key={item._id}
            style={{
              fontFamily: "sans-serif",
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <div className="row   ">
              <div className="col-md-2 mb-5  ">
                <>
                  <img src={item.model} alt="" className="img-fluid" />
                </>
              </div>
              <div className="col-md-6  ">
                <div>
                  <h3 style={{ fontFamily: "sans-serif" }}>{item.company}</h3>

                  <p style={{ fontFamily: "sans-serif" }}> {item.message}</p>
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      display: "inline-flex",
                      marginRight: 10,
                    }}
                  >
                    {" "}
                    {item.Address}
                  </p>
                  <MdLocationOn size="25" />
                  <p style={{ fontFamily: "sans-serif" }}>
                    {" "}
                    Order code : {item.orderOtp}
                  </p>
                  <p style={{ fontFamily: "sans-serif" }}> {item.date}</p>
                </div>
              </div>

              {/* <div className="col-2 text-right-1">
              <hr/>
     
            </div> */}

              <div className="col-md-4 ">
                {/* <p>payment {item.mode}</p> */}

                <hr />
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <p
                    style={{
                      fontSize: 17,
                      color: "#171717",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Service type :{" "}
                  </p>
                  <div>
                    {item.products &&
                      item.products.map((prod) => {
                        return (
                          <>
                            <p
                              key={prod._id}
                              style={{
                                fontSize: 17,
                                color: "#171717",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {prod.name}
                            </p>
                          </>
                        );
                      })}
                  </div>
                </div>

                <hr />
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <h5 style={{ fontFamily: "sans-serif" }}> payment </h5>

                  <h6 style={{ fontFamily: "sans-serif" }}>{item.mode}</h6>
                </div>
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <h5 style={{ fontFamily: "sans-serif" }}> order status </h5>

                  <h6 style={{ fontFamily: "sans-serif" }}>{item.status}</h6>
                </div>
                {/* <div style={{ justifyContent: "space-between", display: "flex" }}>
                <h5 style={{ fontFamily: "sans-serif" }}> payment </h5>

                <h6 style={{ fontFamily: "sans-serif" }}>{item.mode}</h6>
              </div> */}

                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <h5 style={{ fontFamily: "sans-serif" }}> Total</h5>

                  <h5 style={{ fontFamily: "sans-serif" }}>
                    {" "}
                    ??? {item.totalPrice}
                  </h5>
                </div>
                {item.mode === "online" ? (
                  <button className="btn" onClick={() => payment(item._id)}>
                    Payment Now
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </>
      );
    });

  return error && auth ? (
    <Error />
  ) : (
    <>
      {/* https://codepen.io/Timeto/pen/RwoMwMj?editors=1000 */}
      {/* https://signal-clone-f1ebb.web.app/ */}

      <br />
      <div className="container mt-5">
        {/* {!isAuth() ? <Redirect to="/login" /> : null} */}
        <ToastContainer />
        {loading ? (
          <div>
            <Skeleton
              hieght={80}
              variant="h1"
              width="70%"
              style={{ borderRadius: 5, marginBottom: 8 }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              style={{ borderRadius: 5, width: "50%", marginBottom: 8 }}
              animation="wave"
            />
            <br />
            <Skeleton
              variant="text"
              style={{ borderRadius: 5, width: "40%", marginBottom: 8 }}
              animation="wave"
            />
            <br />
            <Skeleton
              animation="wave"
              variant="rect"
              width="100%"
              height={60}
              style={{ borderRadius: 10 }}
            />
          </div>
        ) : (
          <div>
            <Head>
              <title>Realback || orders</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 style={{ fontFamily: "sans-serif" }}>Review your orders</h1>
            <h5 style={{ fontFamily: "sans-serif" }}>
              Free delivery and free returns
            </h5>
            <br />
            <h2 style={{ fontFamily: "sans-serif" }}>{email}</h2>

            <br />
            <div
              style={{
                boxShadow: " 0px 15px 20px rgba(63, 63, 63, 0.4)",
                backgroundColor: "#fff",
                fontFamily: "sans-serif",
                padding: 20,
                textAlign: "center",
                borderRadius: 10,
              }}
            >
              {" "}
              <IoBagCheck size="25" /> Pay $13.90/mo.per month?? at 0% APR for
              eligible items in your order with Apple Card Monthly Installments.
            </div>
          </div>
        )}
        <br />
        {loading ? (
          <div>
            {skeloton()}
            <hr />
            <br />
            <br />
            {skeloton()}
          </div>
        ) : (
          list
        )}

        <hr />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const res = await axios.get("/api/cart", {
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });

    const error = res.status === 201 || 200 ? false : res.status;

    console.log(">>>>>>>>>>>>>>>>", error);

    return {
      props: {
        cartData: res.data.user,
        error,
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
};

// export async function getStaticProps(ctx) {
//     const socket = io("/api/socket");
//  const res = await  axios
//       .get("/api/cart",{headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined})
//        socket.emit("join", `order_${email}`);
//   return {
//     props: {
//       userdata:res.data
//     }
//   };
// }


