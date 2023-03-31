import getProductsScrumMaster from "../api/getProductsScrumMaster";
import getProducts from "../api/getProducts";
import List from "./List";
import isData from "../helpers/isData";

const ProductList = ({
  products,
  setProducts,
  input,
  setInput,
  inputScrumMaster,
  setInputScrumMaster,
  navigate,
}) => {
  return (
    <div>
      <button onClick={() => navigate("/new-product")}>Add New Product</button>
      <input
        placeholder="Search Product ID..."
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit" onClick={() => getProducts(input, setProducts)}>
        Search ID
      </button>
      <input
        placeholder="Search Scrum Master..."
        onChange={(event) => setInputScrumMaster(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => getProductsScrumMaster(inputScrumMaster, setProducts)}
      >
        Search Scrum Master
      </button>
      <p>Total results : {products.length}</p>
      {isData(products) ? (
        <div>No products found</div>
      ) : (
        <List
          products={products}
          setProducts={setProducts}
          input={input}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default ProductList;
