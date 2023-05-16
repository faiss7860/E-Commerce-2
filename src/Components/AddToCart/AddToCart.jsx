import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {remove , quantityRemove , quantityAdd} from '../../Redux/Reducer/CartSlice'
import noProduct from '../Images/3.jpg';
import '../AddToCart/AddToCart.css';


const AddToCart = (props) => {
    const product = useSelector((state)=>state.cart.CartSlice)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [amount, setAmount] = useState()

    const handleSubmit = (e) => {

        e.preventDefault();
        var options = {
          key: "rzp_test_zW8LTEGZIj7Tye",
          key_secret: "mV239hwnXhUqjPmn6GXNmXaM",
          amount: amount * 100,
          currency: "INR",
          name: "STARTUP_PROJECTS",
          description: "for testing purpose",
          handler: function (response) {
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name: props.user.userName,
            email: props.user.email,
            contact: props.user.phone,
          },
          notes: {
            address: "Razorpay Corporate office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
      
    };
    
    return (
      <div>
        {product.length === 0 ? (
          <div className="b1">
            <div className="b2">
              <img className="backImg" src={noProduct} alt="" />
            </div>
            <button className="backBtn" onClick={() => navigation("/")}>
              Back to Shop
            </button>
          </div>
        ) : (
          <div className="main">
            {product.map((item, index) => (
              <div key={item.id}>
                <div className="container" key={index}>
                  <div className="imag">
                    <img className="viewImg" src={item.image} alt="" />
                  </div>
                  <div className="text-container">
                    <span className="showborder"></span>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <h5>Price ${item.price} </h5>
                    <h4>Totle Price $ {item.quantity * item.price}</h4>
                    <div className="mainus-plusBtn">
                      <button
                        className="inc"
                        onClick={() => dispatch(quantityAdd(item))}
                      >
                        +
                      </button>
                      <b>{item.quantity}</b>
                      <button
                        className="dicri"
                        onClick={() => dispatch(quantityRemove(item))}
                      >
                        -
                      </button>
                    </div>
                    <div className="move-buy">
                      <button
                        className="movebtn"
                        onClick={() => dispatch(remove(item))}
                      >
                        Remove
                      </button>
                      <button
                        className="buy"
                        onClick={(e) => {
                          setAmount(item.quantity * item.price * 5);
                          handleSubmit(e);
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );       
}

export default AddToCart;