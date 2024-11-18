import { Employee } from "@/entities";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import DeleteEmployee from "./DeleteEmployee";
import CreateUser from "./CreateUser";
import FormCreateUserEmployee from "./FormCreateUser";
import { LuUser } from "react-icons/lu";
import FormUpdateUser from "./FormUpdateUserEmployee";

export default function EmployeeDataCard({employee}:{employee:Employee}){
    return(
        <div className="flex  flex-row gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 py-2 m-2 items-center border-2 border-orange-400">
        <div className="text-xl flex flex-col h-full justify-between">
            <div className="h-full py-10">
                <h1 className="font-bold">{employee.employeeName +" "+employee.employeeLastName}</h1>
                <h1>{employee.employeeEmail}</h1>
                <h1>{employee.employeePhoneNumber}</h1>
                <Link className="underline" href={{pathname:`/dashboard`,
                    query: {
                        store: String(employee.location?.locationId)
                    }
                }}>
                    <h1>{employee.location?.locationName}</h1>
                </Link>
            </div>
            <div>
                <DeleteEmployee employeeId={employee.employeeId}/>
            </div>
        </div>
        <div className="h-full py-20 w-1 bg-zinc-300 mx-6"/>

            <CreateUser icon={<LuUser size="20"></LuUser>} photo={employee?.employeePhoto}>
                {
                    !employee.user ?(
                        <FormCreateUserEmployee employee={employee}/>
                    ) : (
                        <FormUpdateUser user={employee.user}/>
                    )
                }
            </CreateUser>
    </div>
    )
}