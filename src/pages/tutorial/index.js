import GetStart from "@/components/GetStarted/GetStart";
import TutorialsC from "@/components/GetStarted/TutorialsC";
import Sidebar from "@/components/UiComponents/Sidebar";
import Image from "next/image";

export default function Tutorial() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <TutorialsC />
            </div>
        </main>
    );
}
