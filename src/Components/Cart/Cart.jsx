import React , { useState , useContext ,useEffect} from 'react';
import '../Cart/Cart.css';
import { add } from '../../Redux/Reducer/CartSlice'
import { useDispatch } from "react-redux"
import { ApiData } from '../Home/Home';
import { Link } from "react-router-dom";

const Cart = () => {
  const [sentData, setSentData] = useState([])
  const products = useContext(ApiData)
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const [filteredProducts, setFilter] = useState(products);
  // eslint-disable-next-line
  const [filterCriteria, setfilterCriteria] = useState("");

  const filterProducts = (category) => {
    const updateProducts = products.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setFilter(updateProducts);
  };

  useEffect(() => {
    if (filterCriteria === "") {
      setFilter(products);
      return;
    }
    let updatedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(filterCriteria.trim().toLowerCase())
    );
    setFilter(updatedProducts);
  }, [products, filterCriteria]);

  return (
    <div className='cartOfMainBox'>
      <div className='btnBox1'>
        <div className='btnBox'>
            <button className='filbtn' onClick={()=>(setFilter(products))}>All</button>
            <button className='filbtn' onClick={()=>(filterProducts("men's clothing"))}>men</button>
            <button className='filbtn' onClick={()=>(filterProducts("women's clothing"))}>women</button>
            <button className='filbtn' onClick={()=>(filterProducts("electronics"))}>electronics</button>
            <button className='filbtn' onClick={()=>(filterProducts("jewelery"))}>jewelery</button>
        </div>
      </div>
      <section className="main--container">
    {filteredProducts?.map((item , index)=>{
      return(
        <div className='cardBoxx' key={index}>
          <article className="card" >
            <div className='imgDivv'>
              <img className='cimage' src={item.image} alt=''/>
            </div>
                <article className="content">
                  <div className='content1'>
                    <h5>
                      <marquee width="100%">{item.title}</marquee>
                    </h5>
                    <h4>{item.brand}</h4>
                    <h6>Price ${item.price} </h6>
                    <button className="button" onClick={()=>{
                      setSentData([...sentData , item])
                      dispatch(add(item))
                    }}><span>Add To Cart</span></button>
                  </div>
                </article>
          </article>
        </div>
      )
    })}
    </section>
  </div>
  )
}

export default Cart;