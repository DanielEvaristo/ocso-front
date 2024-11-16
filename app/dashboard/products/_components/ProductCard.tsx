"use client";
import { Product } from "@/entities";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
export default function ProductCard({product}: {product: Product}){
    return(
        <Card className="max-w-[350px] hover:scale-110">
            <CardHeader>
                {product.productName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Precio del producto<b>{product.price}</b></p>
            </CardBody>
        </Card>
    )
}