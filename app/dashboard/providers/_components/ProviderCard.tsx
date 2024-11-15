import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard ({provider}: {provider: Provider}){
    return (
        <Card className="w-4/12">
            <CardHeader>
                {provider.providerName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Correo electrónico: <b>{provider.providerEmail}</b></p>
                <p>Número de teléfono: <b>{provider.providerPhoneNumber}</b></p>
                {
                    provider.products? (
                        <p>Tiene <b>{provider.products.length} </b></p>
                    ): <p>No tiene productos</p>
                }
            </CardBody>
        </Card>
    )
}