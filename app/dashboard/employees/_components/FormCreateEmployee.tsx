
import createEmployee from "@/actions/employees/Create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectLocations from "./SelectLocation";

export default async function FormCreateEmployee(){
    const responseLocations = await fetch(`${API_URL}/locations`,{
        headers:{
            ...authHeaders(),
        }
    })
    const locations = await responseLocations.json()
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-500 h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco"/>
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio"/>
            <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="marco@gmai.com"/>
            <Input isRequired={true} label="Número de teléfono" name="employeePhoneNumber" placeholder="4423696264"/>
            <Input type="file" name="employeePhoto" />  
            <SelectLocations stores={locations}/>
            <Button type="submit" color="primary">Agregar empleado</Button>
        </form>
    )
}