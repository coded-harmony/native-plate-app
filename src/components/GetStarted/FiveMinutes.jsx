import Head from 'next/head';
import CopyIcon from "../../../public/images/icons/copy-icon.svg";
import AngleR from "../../../public/images/icons/angle-right.svg";
import Image from 'next/image';


export default function FiveMinutes() {
    return (
        <main className='h-screen overflow-hidden'>
            <div className="p-8 h-full overflow-auto scroll-container">
                <div className="flex items-center gap-4 mb-10">
                    <h1>Tutorials</h1>
                    <Image src={AngleR} alt='icon' />
                    <h1>Ship in 5 minutes</h1>
                </div>
                <h3 className="font-bold mb-6">Let's get your startup in front of your customers in 5 minutes</h3>
                <h4 className="font-medium mb-6">We're building a beautiful landing page and adding forms to collect emails for a waitlist (optional)</h4>
                <h4 className='font-medium mb-6'>Finish this tutorial to be featured on our homepage</h4>
                <ul className="list-decimal space-y-9 ml-4">
                    <li className='text-xl font-medium'>Finish this tutorial to be featured on our homepage</li>
                    <li>
                        <h4 className='font-medium mb-7'>Delete everything in /app/page.js, and paste this:</h4>
                        <div className="mb-6">
                            <div className="flex items-center justify-between p-[18px] bg-[#2B2B2B] rounded-t-xl">
                                <p>Terminal</p>
                                <div className="flex items-center gap-[10px] cursor-pointer">
                                    <Image src={CopyIcon} alt='icon' />
                                    <h4>Copy</h4>
                                </div>
                            </div>
                            <ul className="bg-black py-4 px-8 rounded-b-xl text-[16px] font-medium list-decimal space-y-1">
                                <li className='pl-10'>git clone https://github.com/Native-Plate.git</li>
                                <li className='pl-10'>cd Native-Plate</li>
                                <li className='pl-10'>npm install</li>
                                <li className='pl-10'>git remote remove origin</li>
                                <li className='pl-10'>npm run dev</li>
                            </ul>
                        </div>
                    </li>
                    <li className='text-xl font-medium'>Edit the copy to fit your business logic. Each component has tips to help you write copy that sells—see components section. Congrats you have a beautiful landing page to show! </li>
                    <li className='text-xl font-medium'>(Optional) To collect emails for a waitlist, set up a database and uncomment the code in /api/lead/route.js to save emails in your database. </li>
                    <li>
                        <h4 className='font-medium mb-7'>(Optional) Replace the main call-to-action button in Hero, Pricing, and CTA with this:</h4>
                        <div className="mb-6">
                            <div className="flex items-center justify-between p-[18px] bg-[#2B2B2B] rounded-t-xl">
                                <p>Terminal</p>
                                <div className="flex items-center gap-[10px] cursor-pointer">
                                    <Image src={CopyIcon} alt='icon' />
                                    <h4>Copy</h4>
                                </div>
                            </div>
                            <ul className="bg-black py-4 px-8 rounded-b-xl text-[16px] font-medium list-decimal space-y-1">
                                <li className='pl-10'>git clone https://github.com/Native-Plate.git</li>
                                <li className='pl-10'>cd Native-Plate</li>
                                <li className='pl-10'>npm install</li>
                                <li className='pl-10'>git remote remove origin</li>
                                <li className='pl-10'>npm run dev</li>
                            </ul>
                        </div>
                    </li>
                    <li className='text-xl font-medium'>It's time to deploy! If you need help, here's a simple tutorial</li>
                </ul>
            </div>
        </main>
    );
}
