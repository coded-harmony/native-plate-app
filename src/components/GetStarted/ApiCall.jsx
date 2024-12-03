import Head from 'next/head';
import CopyIcon from "../../../public/images/icons/copy-icon.svg";
import AngleR from "../../../public/images/icons/angle-right.svg";
import Image from 'next/image';


export default function ApiCall() {
    return (
        <main className='h-screen overflow-hidden'>
            <div className="p-8 h-full overflow-auto scroll-container">
                <div className="flex items-center gap-4 mb-10">
                    <h1>Tutorials</h1>
                    <Image src={AngleR} alt='icon' />
                    <h1>API call</h1>
                </div>
                <h3 className="font-bold mb-6">Any file named route.js in the /app/api folder is an API endpoint. Use the helper /libs/api.js (axios instance with interceptors) to simplify API calls:</h3>
                <ul className="list-disc text-2xl font-medium space-y-2 mb-10 ml-5">
                    <li>Automatically display error messages</li>
                    <li>Redirect to login page upon error 401</li>
                    <li>Add /api as a base URL: /api/user/posts → /user/posts</li>
                </ul>
                <h3 className="font-bold mb-6">Protected API calls</h3>
                <h3 className="font-medium mb-6">NextAuth automatically handles the authentication with cookies. Just make a normal API call on the front-end like this:</h3>

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
                <h3 className='font-medium mb-6'>In the backend, we get the session and we can use it to retrieve the user from the database. You have to configure the database first. The API file should look like this:</h3>
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
