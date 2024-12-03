import FiveMinutes from "@/components/GetStarted/FiveMinutes";
import Sidebar from "@/components/UiComponents/Sidebar";

export default function FiveMin() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <FiveMinutes />
            </div>
        </main>
    );
}
