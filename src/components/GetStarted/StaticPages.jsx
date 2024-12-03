import Head from 'next/head';
import CopyIcon from "../../../public/images/icons/copy-icon.svg";
import Image from 'next/image';
import AngleR from "../../../public/images/icons/angle-right.svg";


export default function StaticPages() {
    return (
        <main className='h-screen overflow-hidden'>
            <div className="p-8 h-full overflow-auto scroll-container">
                <div className="flex items-center gap-4 mb-10">
                    <h1>Tutorials</h1>
                    <Image src={AngleR} alt='icon' />
                    <h1>Static page</h1>
                </div>
                <h3 className="font-bold mb-1">ShipFast comes with many components to help you build SEO-optimized pages (like a landing page) in no time.</h3>
                <h3 className="font-bold mb-1">The /components folder contains all you need (hero, pricing, FAQ sections). Here's the list of all the components & themes.</h3>
                <h3 className="font-bold mb-1">The /libs/seo.js file helps you set SEO tags to better rank on Google. Make sure to customize SEO tags.</h3>
                <h3 className="font-bold mb-7">A simple landing page can done like this:</h3>
                {/* Start a local server */}
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
            </div>
        </main>
    );
}
