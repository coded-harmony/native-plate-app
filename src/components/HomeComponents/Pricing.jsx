import Image from "next/image";
import Check from "../../../public/images/icons/check-green.svg"
import Brackets from "../../../public/images/icons/brackets.svg"
import Arrow from "../../../public/images/icons/arrow-right-outline-icon.svg"



export default function Pricing() {
    return (
        <main className="mb-[150px] max-lg:px-3 py-10 bg-black border-y-2 border-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="max-w-5xl mx-auto mb-12">
                    <h3 className="text-center mb-4">Pricing</h3>
                    <p className="text-center mb-12">Get the perfect React Native boilerplate tailored for your development needs. Save time, reduce costs, and accelerate your project with our all-in-one solution. Choose a plan that works best for you and start building faster today!</p>
                    <div className="flex items-center justify-center gap-1">
                        <del className="text-lg opacity-80">$349</del>
                        <h1>$199</h1>
                        <span className="text-xs opacity-60">USD</span>
                    </div>
                </div>
                <div className="flex items-start justify-between gap-[170px] max-md:gap-10 max-sm:flex-col">
                    <ul className="text-lg font-medium space-y-6 opacity-80">
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> Firebase auth (Login with Google, Signup, Singin, Delete user)</li>
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> User Activity (Track user activity)</li>
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> Custom Components (LazyLoading Screens, custom headers, image picker, context)</li>
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> Lifetime Updates</li>
                    </ul>
                    <ul className="text-lg font-medium space-y-6 opacity-80">
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> Error Handling- (Firesbase error handler)</li>
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> $1,090 worth of discounts</li>
                        <li className="flex items-center gap-2"><Image src={Check} alt="icon" /> Push notification (Send all user notification, send one user notification)</li>
                    </ul>
                </div>
                <div className="max-w-xl mx-auto flex items-center gap-3 mt-14">
                    <a href="#" className="btn-style w-full !text-black"><Image src={Brackets} alt="icon" /> Purchase BoilerPlate</a>
                    <a href="#" className="btn-style white">Demo <Image src={Arrow} alt="icon" /></a>
                </div>
                <div className="text-center mt-4">
                    <span className="text-center text-sm text-[#CFCFCF] opacity-80">Pay once. Build unlimited projects!</span>
                </div>
            </div>
        </main>
    )
}