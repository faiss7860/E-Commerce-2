import React , {useState , useEffect , createContext } from 'react';
import axios from 'axios';

import Im1 from '../Images/maxresdefault.jpg';
import Im2 from '../Images/wp7566456-online-shopping-wallpapers (1).jpg';
import Im3 from '../Images/1010_Inquirer_Main-Header-1536x864.jpg';
import Im4 from '../Images/20142F102FBack_Time.webp';
import Im5 from '../Images/maxresdefault (1).jpg';
import Im6 from '../Images/1ea04315817321.562973fcbd02a.jpg';
import Cart from '../Cart/Cart';

export const ApiData = createContext()
const Home = (props) => {
  const [selectedIMG, setSelectedIMG] = useState(0)
  const [data, setData] = useState();

  // eslint-disable-next-line
  const [allImages, setAllImages] = useState([Im1,Im2,Im3,Im4,Im5,Im6])

  const fetchData =()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=> {setData(response.data)})
    .catch((error) => console.error(error))
  }
  useEffect(() => {
    fetchData()
    setInterval(() => {
      setSelectedIMG(selectedIMG => selectedIMG < 5 ? selectedIMG + 1 : 0)
    }, 3000);
  }, [])

  return (
      <>
        <ApiData.Provider value={data}>
          <div className='bigslidebox'>
            <div className="mainbox">
              <img alt='' className='slideImg' width={900} height={450} src={allImages[selectedIMG]} />
            </div>
          </div>
          <Cart/>
        </ApiData.Provider>
      </>
  )
}
export default Home ;