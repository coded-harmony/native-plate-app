import Image from "next/image";
import Client from "../../../public/images/happy-client.png"
import Client2 from "../../../public/images/happy-client2.png"
import Client3 from "../../../public/images/happy-client3.png"
import Stars from "../../../public/images/icons/happy-client-stars.svg"
import Lisa from "../../../public/images/lisa-girl.png"
import Twitter from "../../../public/images/icons/twitter.svg"
import Check from "../../../public/images/icons/check-bg-white.svg"
import Chart2 from "../../../public/images/chart-client.png"
import Chart from "../../../public/images/chart.png"
import Brackets from "../../../public/images/icons/brackets.svg"



export default function OurClient() {
    return (
        <main className="mb-[150px] max-lg:px-3">
            <div className="container">
                <h1 className="text-center mb-8">Our Happy Client</h1>
                <h2 className="text-[#CFCFCF] text-center mb-24">Achieved Success with NativePlate Boilerplate!</h2>
                <div className="grid grid-cols-4 items-stretch gap-6 mb-[150px] max-md:grid-cols-2 max-sm:grid-cols-1">
                    <div className="flex flex-col gap-y-7">
                        <div className="relative rounded-[10px] flex-1">
                            <Image src={Client} alt="img" className="w-full" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <p className="text-sm ml-3">Mark D.</p>
                                <Image className=" ml-3 mb-2" src={Stars} alt="icon" />
                                <div className="p-3 bg-[#A5E31F] rounded-b-[10px]">
                                    <p className="font-semibold text-black mb-[6px]">Launched my app 2 weeks ahead of schedule!</p>
                                    <span className="text-xs leading-normal block text-black font-semibold">The pre-configured Firebase features saved me hours, allowing me to meet a tight launch deadline.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black py-[22px] rounded-[10px]">
                            <div className="px-3">
                                <p className="font-semibold mb-2">Exceeded client expectations with advanced features.</p>
                                <span className="text-xs opacity-70">The user tracking and notifications made my app stand out.</span>
                            </div>
                            <div className="flex items-center gap-2 border-t px-3 pt-3 mt-[22px]">
                                <Image src={Lisa} alt="icon" />
                                <span className="text-xs font-semibold block">Lisa K.</span>
                            </div>
                        </div>
                        <div className="relative rounded-[10px] flex-1">
                            <Image src={Client} alt="img" className="w-full" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <p className="text-sm ml-3">Ahmad S.</p>
                                <Image className=" ml-3 mb-2" src={Stars} alt="icon" />
                                <div className="p-3 bg-[#A5E31F] rounded-b-[10px]">
                                    <p className="font-semibold text-black mb-[6px]">Enabled faster team collaboration.</p>
                                    <span className="text-xs leading-normal block text-black font-semibold">Our team reduced repetitive coding tasks and delivered features quicker.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black py-[22px] rounded-[10px]">
                            <div className="px-3">
                                <p className="font-semibold mb-2">Delivered a High-Quality App for My Client and Landed More Work!</p>
                                <span className="text-xs opacity-70">I was under a lot of pressure to deliver an app for a major client within a tight deadline. NativePlate became my secret weapon. It had everything I needed – Firebase Auth, push notifications, and custom components – ready to go. Instead of spending weeks on setup, I could focus on tailoring the app to the client’s needs. The error-handling features ensured a smooth, bug-free experience, and the activity tracking gave the client valuable user insights. When I delivered the app weeks ahead of schedule, the client was thrilled and immediately offered me more projects. Thanks to NativePlate, I’ve gained a reputation for delivering quality work on time.</span>
                            </div>
                            <div className="flex items-center gap-2 border-t px-3 pt-3 mt-[22px]">
                                <Image src={Lisa} alt="icon" />
                                <span className="text-xs font-semibold block">Ahmad S.</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7">
                        <div className="bg-black py-[22px] rounded-[10px]">
                            <div className="px-3">
                                <p className="font-semibold mb-2">Helped scale my app with minimal effort.</p>
                                <span className="text-xs opacity-70">The activity tracking and error handling features ensured a smooth experience as my app grew.</span>
                            </div>
                            <div className="flex items-center gap-2 border-t px-3 pt-3 mt-[22px]">
                                <Image src={Lisa} alt="icon" />
                                <span className="text-xs font-semibold block">Priya S.</span>
                            </div>
                        </div>
                        <div className="bg-black py-[22px] rounded-[10px]">
                            <div className="px-3">
                                <p className="font-semibold mb-2">Faster onboarding for app updates.</p>
                                <span className="text-xs opacity-70">Integrating updates with NativePlate is incredibly smooth.</span>
                            </div>
                            <div className="flex items-center gap-2 border-t px-3 pt-3 mt-[22px]">
                                <Image src={Lisa} alt="icon" />
                                <span className="text-xs font-semibold block">Michael P.</span>
                            </div>
                        </div>
                        <div className="bg-black py-[22px] px-3 rounded-[10px]">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-sm font-bold flex items-center gap-1">David J <Image src={Check} alt="icon" /></p>
                                    <p className="text-sm text-[#8B98A5]">@david-j</p>
                                </div>
                                <Image src={Twitter} alt="icon" />
                            </div>
                            <p className=" ">When I started pitching my app idea to investors, I knew I needed a professional-looking MVP to make a strong impression. I turned to NativePlate, and it delivered beyond my expectations. Within just three days, I was able to create a polished, fully functional prototype that included Firebase integration, user activity tracking, and custom notifications. The pre-built components saved me weeks of work, and the streamlined setup allowed me to focus on perfecting the user experience. During the pitch, the investors were blown away by the app’s quality and functionality, leading to a $100K funding deal. NativePlate didn’t just save time; it became the cornerstone of my startup’s success.</p>
                        </div>
                        <div className="relative rounded-[10px] flex-1 bg-black">
                            <Image src={Client2} alt="img" className="w-full" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <p className="text-sm ml-3">Ahmad S.</p>
                                <Image className=" ml-3 mb-2" src={Stars} alt="icon" />
                                <div className="p-3 bg-[#A5E31F] rounded-b-[10px]">
                                    <p className="font-semibold text-black mb-[6px]">Enabled faster team collaboration.</p>
                                    <span className="text-xs leading-normal block text-black font-semibold">Our team reduced repetitive coding tasks and delivered features quicker.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7">
                        <div className="bg-black py-[22px] rounded-[10px]">
                            <div className="px-3">
                                <p className="font-semibold mb-2">Exceeded client expectations with advanced features.</p>
                                <span className="text-xs opacity-70">The user tracking and notifications made my app stand out.</span>
                            </div>
                            <div className="flex items-center gap-2 border-t px-3 pt-3 mt-[22px]">
                                <Image src={Lisa} alt="icon" />
                                <span className="text-xs font-semibold block">Lisa K.</span>
                            </div>
                        </div>
                        <div className="bg-black flex-1 relative rounded-[10px]">
                            <Image src={Client} alt="img" className="w-full" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <p className="text-sm ml-3">Mark D.</p>
                                <Image className=" ml-3 mb-2" src={Stars} alt="icon" />
                                <div className="p-3 bg-[#A5E31F] rounded-b-[10px]">
                                    <p className="font-semibold text-black mb-[6px]">Launched my app 2 weeks ahead of schedule!</p>
                                    <span className="text-xs leading-normal block text-black font-semibold">The pre-configured Firebase features saved me hours, allowing me to meet a tight launch deadline.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black py-[22px] rounded-[10px]">
                            <div className="px-3">
                                <p className="font-semibold mb-2">Delivered a High-Quality App for My Client and Landed More Work!</p>
                                <span className="text-xs opacity-70">I was under a lot of pressure to deliver an app for a major client within a tight deadline. NativePlate became my secret weapon. It had everything I needed – Firebase Auth, push notifications, and custom components – ready to go. Instead of spending weeks on setup, I could focus on tailoring the app to the client’s needs. The error-handling features ensured a smooth, bug-free experience, and the activity tracking gave the client valuable user insights. When I delivered the app weeks ahead of schedule, the client was thrilled and immediately offered me more projects. Thanks to NativePlate, I’ve gained a reputation for delivering quality work on time.</span>
                            </div>
                            <div className="flex items-center gap-2 border-t px-3 pt-3 mt-[22px]">
                                <Image src={Lisa} alt="icon" />
                                <span className="text-xs font-semibold block">Ahmad S.</span>
                            </div>
                        </div>
                        <div>
                            <Image className="w-full" src={Chart} alt="icon" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-7">
                        <div className="relative rounded-[10px] bg-black max-lg:min-h-[370px]">
                            <Image src={Client} alt="img" className="w-full" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <p className="text-sm ml-3">Mark D.</p>
                                <Image className=" ml-3 mb-2" src={Stars} alt="icon" />
                                <div className="p-3 bg-[#A5E31F] rounded-b-[10px]">
                                    <p className="font-semibold text-black mb-[6px]">Launched my app 2 weeks ahead of schedule!</p>
                                    <span className="text-xs leading-normal block text-black font-semibold">The pre-configured Firebase features saved me hours, allowing me to meet a tight launch deadline.</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image className="w-full" src={Chart2} alt="icon" />
                        </div>
                        <div className="relative rounded-[10px] bg-black">
                            <Image src={Client3} alt="img" className="w-full" />
                            <div className="absolute bottom-0 left-0 w-full">
                                <p className="text-sm ml-3">Ahmad S.</p>
                                <Image className=" ml-3 mb-2" src={Stars} alt="icon" />
                                <div className="p-3 bg-[#A5E31F] rounded-b-[10px]">
                                    <p className="font-semibold text-black mb-[6px]">Enabled faster team collaboration.</p>
                                    <span className="text-xs leading-normal block text-black font-semibold">Our team reduced repetitive coding tasks and delivered features quicker.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="mb-6 font-semibold">Boost Your App, Launch Faster, Earn More</h2>
                    <h3 className="mb-12 font-medium opacity-80">Transform your app development process with NativePlate. Build faster, launch quicker, and maximize your revenue potential with our powerful, time-saving boilerplates. Start your journey toward success today!</h3>
                    <a href="#" className="btn-style w-full max-w-xl !text-black "><Image src={Brackets} alt="icon" /> Get Native-Plate</a>
                </div>
            </div>
        </main>
    )
}