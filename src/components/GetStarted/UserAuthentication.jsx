import Head from 'next/head';
import CopyIcon from "../../../public/images/icons/copy-icon.svg";
import Image from 'next/image';
import AngleR from "../../../public/images/icons/angle-right.svg";


export default function UserAuthentication() {
    return (
        <main className='h-screen overflow-hidden'>
            <div className="p-8 h-full overflow-auto scroll-container">
                <div className="flex items-center gap-4 mb-10">
                    <h1>Tutorials</h1>
                    <Image src={AngleR} alt='icon' />
                    <h1>User authentication</h1>
                </div>
                <h3 className="font-bold mb-8">ShipFast uses NextAuth to authenticate users. You can configure it in the /app/api/auth/[...nextauth]/route.js file.</h3>
                <h3 className="font-bold mb-8">There are 2 built-in ways to authenticate users with ShipFast: Magic Links & Google Oauth.</h3>
                <h3 className="font-bold mb-8">Once you've completed at least one of the tutorials above, you can login users like this:</h3>
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
                <div className="p-5 bg-[#9AC62F] bg-opacity-20 border-l-4 border-[#9AC62F] mb-10">
                    <p>The callbackUrl variable in the config.js file is used accross the app to redirect the user at the right place after a successfull sign-up/login. It's usually a private page like /dashboard</p>
                </div>
            </div>
        </main>
    );
}
