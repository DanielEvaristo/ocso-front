import UpdateEmployee from "@/actions/employees/Update";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";

export default function FormUpdateEmployee({employee}:{employee:Employee}){
    const {employeeId} = employee;
    const updateEmployeeById = UpdateEmployee.bind(null, employeeId);
   
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-500 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName}/>
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName}/>
            <Input label="Correo electrónico" name="employeeEmail" defaultValue={employee.employeeEmail}/>
            <Input label="Número de teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber}/>
            <Input type="file" name="employeePhoto" defaultValue={employee.employeePhoto}/>  
            <Button type="submit" color="primary">Actualizar datos</Button>
        </form>
    )
}