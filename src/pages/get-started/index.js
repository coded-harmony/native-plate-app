import GetStart from "@/components/GetStarted/GetStart";
import Sidebar from "@/components/UiComponents/Sidebar";
import Image from "next/image";

export default function GetStarted() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <GetStart />
            </div>
        </main>
    );
}
