import { API_URL } from "@/constants"
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";
const ProductsPage = async () => {
  const response = await fetch(`${API_URL}/products`, { 
    headers:{
      ...authHeaders()
    },
    next:{
      tags: ["dashboard:products"]
    }
  })
  const products: Product[] = await response.json() 
  console.log("Products data:", products);
  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.productId} product={product}/>
      })}
    </div>
  )
};

export default ProductsPage;
