import ApiCall from "@/components/GetStarted/ApiCall";
import Sidebar from "@/components/UiComponents/Sidebar";

export default function Api() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <ApiCall />
            </div>
        </main>
    );
}
