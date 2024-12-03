import StaticPages from "@/components/GetStarted/StaticPages";
import UserAuthentication from "@/components/GetStarted/UserAuthentication";
import Sidebar from "@/components/UiComponents/Sidebar";

export default function UserAuth() {
    return (
        <main>
            <Sidebar />
            <div className="ml-[340px]">
                <UserAuthentication />
            </div>
        </main>
    );
}
