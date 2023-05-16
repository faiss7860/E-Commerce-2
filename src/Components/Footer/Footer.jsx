import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
<div className="row primary">
  <div className="column about">

  <h3>Shopee</h3>

   <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
      voluptatem corporis error non,
  </p>

  <div className="social">
    <i className="fa-brands fa-facebook-square"></i>
    <i className="fa-brands fa-instagram-square"></i>
    <i className="fa-brands fa-twitter-square"></i>
    <i className="fa-brands fa-youtube-square"></i>
    <i className="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div className="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <Link href="#faq">F.A.Q</Link>
  </li>
  <li>
   <Link href="#cookies-policy">Cookies Policy</Link>
  </li>
  <li>
   <Link href="#terms-of-services">Terms Of Service</Link>
  </li>
  <li>
   <Link href="#support">Support</Link>
  </li>
 </ul>

</div>


<div className="column links">
  <h3>Some Links</h3>
   <ul>
    <li>
     <Link href="#faq">F.A.Q</Link>
    </li>
    <li>
     <Link href="#cookies-policy">Cookies Policy</Link>
    </li>
    <li>
    <Link href="#terms-of-services">Terms Of Service</Link>
    </li>
    <li>
    <Link href="#support">Support</Link>
    </li>
  </ul>
</div>

<div className="column subscribe">
 <h3>Newsletter</h3>
  <div>
   <input type="email" className='emailInput' placeholder="Your email id here" />
   <button className='subscribeBtn'>Subscribe</button>
  </div>

</div>

</div>

<div className="row copyright">
  <div className="footer-menu">

  <Link to='/' href="">Home</Link>
  <Link to='/Contact_Us' href="">Contact</Link>
  <Link to='https://musclefactory-gym.netlify.app/' href="">Gym-Website</Link>
  <Link to='https://flip-shopping-website.netlify.app/' href="">Ecommerce-Website</Link>
  <Link to='https://www.instagram.com/mr_faiss7860/' href="">Follow Me On <GrInstagram/></Link>

  </div>
   <p>Copyright &copy; 2023 Shaikh Fais Developer</p>
</div>
</footer>
  )
}

export default Footer