import Image from "next/image";
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return (
    <div className="bg-orange-100 w-screen h-screen overlow-hidden grid">
        <div className="place-content-center place-self-center">
            <div className="flex flex-col items-center bottom-10 relative">
                <Image src = "/Oxxo_Logo.svg" alt= "Logo de Ocso" width={200} height={0}/>
            </div>
            {children}
        </div>
    </div>
    );
}