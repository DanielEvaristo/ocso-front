import { createLocation } from "@/actions/locations/create";
import { Input } from "@nextui-org/react";

export default function FormNewLocation(){

    return(
        <form action={createLocation}>
            <Input label="Nombre de tienda" name="locationName"/>
            <button>Subir</button>
        </form>
    )
}