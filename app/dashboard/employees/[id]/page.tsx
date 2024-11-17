import { API_URL } from "@/constants";
import EmployeeCard from "../_components/EmployeeCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import { Image } from "@nextui-org/react";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";

export default async function EmployeePage({params}:{params:{id:string}}) {
    const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`,{
        headers:{
            ...authHeaders(),
        }
    })
    const employee: Employee = await responseEmployee.json()
    return (
        <div className="w-full h-[90vh] flex flex-row">
            <div>
                <EmployeeCard employee={employee}/>
                <Image src={employee.employeePhoto}
                className="object-cover w-72 h-72"
                classNames={{img: "size-72"}}
                />
            </div>
            <FormUpdateEmployee employee={employee}/>
        </div>
    );

}