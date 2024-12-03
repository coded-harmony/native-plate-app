import Head from 'next/head';
import CopyIcon from "../../../public/images/icons/copy-icon.svg";
import Image from 'next/image';
export default function GetStart() {
    return (
        <main className='h-screen overflow-hidden'>
            <div className="p-8 h-full overflow-auto scroll-container">
                <h1 className='mb-10'>Get started</h1>
                <h3 className="font-bold mb-6">Hey maker, welcome to Native-Plate</h3>
                <h4 className="font-medium mb-6">Here’s a quick overview of the boilerplate. Follow along to get your app up and running.</h4>
                <div className="p-5 bg-[#9AC62F] bg-opacity-20 border-l-4 border-[#9AC62F] mb-10">
                    <p>You're browsing the /app router documentation. To use the /pages router, see here</p>
                </div>
                <h3 className="font-bold mb-10">Start a local server</h3>
                <h4 className='mb-4'>1. In your terminal, run the following commands one-by-one:</h4>
                {/* Start a local server */}
                <div className="mb-6">
                    <div className="flex items-center justify-between p-[18px] bg-[#2B2B2B] rounded-t-xl">
                        <p>Terminal</p>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <Image src={CopyIcon} alt='icon'/>
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
                <div className="p-5 bg-[#9AC62F] bg-opacity-20 border-l-4 border-[#9AC62F] mb-5">
                    <p>Native-Plate requires Node 18.17 or greater. Type node  -v in your terminal to check version.</p>
                </div>
                <h4 className='mb-4'>2. Rename .env.example to .env.local</h4>
                {/* Rename env file Section */}
                <div className="mb-6">
                    <div className="flex items-center justify-between p-[18px] bg-[#2B2B2B] rounded-t-xl">
                        <p>Terminal</p>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <Image src={CopyIcon} alt='icon'/>
                            <h4>Copy</h4>
                        </div>
                    </div>
                    <ul className="bg-black py-4 px-8 rounded-b-xl text-[16px] font-medium list-decimal space-y-1">
                        <li className='pl-10'>mv .env.example .env.local</li>
                    </ul>
                </div>
                <h4 className='mb-4'>3. Open http://localhost:3000 to see your site. And voila!</h4>
                <div className="p-5 bg-[#9AC62F] bg-opacity-20 border-l-4 border-[#9AC62F] mb-10">
                    <p>You will see errors in the console but nothing important.</p>
                </div>
                <div className="space-y-6 mb-4">
                    <h3>NextJS project structure</h3>
                    <div className="space-y-4 font-medium">
                        <h4>/app → Pages (1 folder + page.js = 1 page)</h4>
                        <h4>/app/api → API calls (1 file = 1 API endpoint)</h4>
                        <h4>/components → React components</h4>
                        <h4>/libs → Libraries helper functions (Stripe & Mailgun, auth etc.)    </h4>
                        <h4>/models → Database models</h4>
                    </div>
                    <h3>config.js file</h3>
                    <h4>It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it: it is the backbone of the app.</h4>
                    <h3>.env file</h3>
                    <h4>Rename the .env.example file to .env.local. Change NEXTAUTH_SECRET to anything else (15 characters minimum). The file content should look like this:</h4>
                </div>
                {/* .env.local */}
                <div className="mb-6">
                    <div className="flex items-center justify-between p-[18px] bg-[#2B2B2B] rounded-t-xl">
                        <p>Terminal</p>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <Image src={CopyIcon} alt='icon'/>
                            <h4>Copy</h4>
                        </div>
                    </div>
                    <ul className="bg-black py-4 px-8 rounded-b-xl text-[16px] font-medium list-decimal space-y-1">
                        <li className='pl-10'>NEXTAUTH_URL=http://localhost:3000</li>
                        <li className='pl-10'>NEXTAUTH_SECRET=</li>
                        <li className='pl-10'>GOOGLE_ID=</li>
                        <li className='pl-10'>GOOGLE_SECRET=</li>
                        <li className='pl-10'>MONGODB_URI=</li>
                        <li className='pl-10'>EMAIL_SERVER=</li>
                        <li className='pl-10'>MAILGUN_API_KEY=</li>
                        <li className='pl-10'>MAILGUN_SIGNING_KEY=</li>
                        <li className='pl-10'>STRIPE_PUBLIC_KEY=</li>
                        <li className='pl-10'>STRIPE_SECRET_KEY=</li>
                        <li className='pl-10'>STRIPE_WEBHOOK_SECRET=</li>
                    </ul>
                </div>
                <h4>Now go ahead and follow this tutorial to get your startup live within 5 minutes!</h4>
            </div>
        </main>
    );
}
