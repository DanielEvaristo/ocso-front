"use client";
import { Product } from "@/entities";
import Link from "next/link";
import ProductCard from "../../providers/[id]/_components/ProductCard";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

export default function FilteredCard({products}:{products: Product[]}){
    const [filtered, setFiltered] = useState<string>("");
    const [productsList, setProductsList] = useState<Product[]>(products);
    useEffect(()=>{
        console.log(filtered)
        const filteredProducts = products.filter((product)=>{
            if(product.productName.toLowerCase().includes(filtered.toLowerCase())){
                return true;
            }else{
                return false;
            }
        })
        setProductsList(filteredProducts);
    },[filtered])
    return(
        <>
            <Input onChange={(e)=>{
                setFiltered(e.target.value);
            }}
            label="Nombre del producto"
            />
            {productsList.map((product)=>{
                return (
                    <Link key={product.productId} href={{pathname:`/dashboard/products/${product.productId}`}}>
                        <ProductCard key={product.productId} product={product}/>
                    </Link>
                )
            })}
        </>
    )
}