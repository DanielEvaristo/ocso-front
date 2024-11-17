import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function FormUpdateEmployee({employee}:{employee:Employee}){
    return (
        <form className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-500 h-fit">
            <Input label="Nombre" placeholder="employeeName" defaultValue={employee.employeeName}/>
            <Input label="Apellidos" placeholder="employeeLastName" defaultValue={employee.employeeLastName}/>
            <Input label="Correo electrónico" placeholder="employeeEmail" defaultValue={employee.employeeEmail}/>
            <Input label="Número de teléfono" placeholder="employeePhoneNumber" defaultValue={employee.employeePhoneNumber}/>
            <Input type="file" placeholder="employeePhoto" defaultValue={employee.employeePhoto}/>  
            <Button type="submit" color="primary">Actualizar datos</Button>
        </form>
    )
}