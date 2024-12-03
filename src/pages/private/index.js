import PrivatePage from "@/components/GetStarted/PrivatePage";
import StaticPages from "@/components/GetStarted/StaticPages";
import UserAuthentication from "@/components/GetStarted/UserAuthentication";
import Sidebar from "@/components/UiComponents/Sidebar";

export default function Private() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <PrivatePage />
            </div>
        </main>
    );
}
