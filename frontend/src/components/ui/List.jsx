import editHandler from "../helpers/editHandler";
import deleteData from "../api/deleteData";

const list = ({ products, setProducts, input, navigate }) => {
  return products.map((product) => {
    return (
      <div key={product.productId}>
        <h2>Product Name: {product.productName}</h2>
        <h2>Product Id: {product.productId}</h2>
        <p>Product Owner Name: {product.productOwnerName}</p>
        <p>Developers: {product.developers.join(" , ")}</p>
        <p>Scrum Master Name: {product.scrumMasterName}</p>
        <p>Start Date: {product.startDate}</p>
        <p>Methodology: {product.methodology}</p>
        <button onClick={() => editHandler(product, navigate)}>Edit</button>
        <button onClick={() => deleteData(product, input, setProducts)}>
          Delete
        </button>
      </div>
    );
  });
};

export default list;