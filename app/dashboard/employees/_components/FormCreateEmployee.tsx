
import createEmployee from "@/actions/employees/Create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateEmployee(){
   
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-500 h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco"/>
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio"/>
            <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="432442342"/>
            <Input isRequired={true} label="Número de teléfono" name="employeePhoneNumber" placeholder="marco@gmai.com"/>
            <Input type="file" name="employeePhoto" />  
            <Button type="submit" color="primary">Agregar empleado</Button>
        </form>
    )
}