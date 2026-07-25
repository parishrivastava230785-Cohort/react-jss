import axios from "axios";
import { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductsCard"; 


const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);

  useEffect(() => {
    let getProductsData = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProductsData(res.data);
      } catch (error) {
        console.log("error in api", error);
      }
    };

    getProductsData();
  }, ); 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default Home;