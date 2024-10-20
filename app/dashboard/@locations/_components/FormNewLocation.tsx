import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation(){
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get(`${API_URL}/managers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return(
        <form action={createLocation}>
            <Input label="Nombre" name="locationName"/>
            <Input label="Dirección" name="locationAddress"/>
            <Input label="Latitud" name="locationLat"/>
            <Input label="Longitud" name="locationLng"/>
            <SelectManager managers={data}/>
            <Button type="submit">Subir</Button>
        </form>
    )
}