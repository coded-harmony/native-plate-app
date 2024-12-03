import StaticPages from "@/components/GetStarted/StaticPages";
import Sidebar from "@/components/UiComponents/Sidebar";

export default function Static() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <StaticPages />
            </div>
        </main>
    );
}
