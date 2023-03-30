import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchData from "../components/api/searchData";
import searchDataScrumMaster from "../components/api/searchDataScrumMaster";
import editHandler from "../components/api/editHandler";
import deleteHandler from "../components/api/deleteHandler";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [inputScrumMaster, setInputScrumMaster] = useState("");
  const navigate = useNavigate();

  const isData = () => {
    return products.length === 0;
  };

  useEffect(() => {
    searchData(input, setProducts);
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/new-product")}>Add New Product</button>
      <input
        placeholder="Search Product ID..."
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit" onClick={() => searchData(input, setProducts)}>
        Search ID
      </button>
      <input
        placeholder="Search Scrum Master..."
        onChange={(event) => setInputScrumMaster(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => searchDataScrumMaster(inputScrumMaster, setProducts)}
      >
        Search Scrum Master
      </button>
      <p>Total results : {products.length}</p>
      {isData() ? (
        <div>No products found</div>
      ) : (
        products.map((product) => {
          return (
            <div key={product.productId}>
              <h2>Product Name: {product.productName}</h2>
              <h2>Product Id: {product.productId}</h2>
              <p>Product Owner Name: {product.productOwnerName}</p>
              <p>Developers: {product.developers}</p>
              <p>Scrum Master Name: {product.scrumMasterName}</p>
              <p>Start Date: {product.startDate}</p>
              <p>Methodology: {product.methodology}</p>
              <button onClick={() => editHandler(product, navigate)}>
                Edit
              </button>
              <button
                onClick={() => deleteHandler(product, input, setProducts)}
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllProducts;