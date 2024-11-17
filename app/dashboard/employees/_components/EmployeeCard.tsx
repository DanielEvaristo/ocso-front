import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function EmployeeCard({employee}:{employee:Employee}){
    return(
        <Card>
            <CardHeader>
                {employee.employeeName+" "+employee.employeeLastName}
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Correo: <b>{employee.employeeEmail}</b></p>
                <p>Número de teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
        </Card>
    )
}