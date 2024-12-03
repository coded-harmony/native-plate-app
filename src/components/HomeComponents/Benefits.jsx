import Image from "next/image";
import BannerImg from "../../../public/images/benefits-img.png"



export default function Benefits() {
    return (
        <main className="mb-[150px] py-10 bg-black max-lg:px-3">
            <h3 className="text-center mb-6">Time-Saving Benefits of NativePlate</h3>
            <div className="container flex items-center justify-center gap-[71px] max-md:gap-8 max-md:flex-col">
                <ul className="text-lg font-medium space-y-[52px] list-disc opacity-80 max-lg:text-[16px] max-lg:space-y-4">
                    <li>Pre-built components save 10+ hours on UI development.</li>
                    <li>Firebase integration reduces setup time by 15+ hours.</li>
                    <li>Notifications system saves 8+ hours.</li>
                    <li>User tracking eliminates 12+ hours of setup.</li>
                    <li>Customizable templates save 10+ hours.</li>
                </ul>
                <div>
                    <Image src={BannerImg} alt="icon" />
                </div>
                <ul className="text-lg font-medium space-y-[52px] list-disc opacity-80 max-lg:text-[16px] max-lg:space-y-4">
                    <li>Streamlined setup cuts 5+ hours.</li>
                    <li>Error handling avoids 8+ hours of debugging.</li>
                    <li>Team efficiency boosts save 20+ hours.</li>
                    <li>Faster prototyping saves 10+ hours.</li>
                    <li>Streamlined workflows cut 15+ hours.</li>
                </ul>
            </div>
        </main>
    )
}