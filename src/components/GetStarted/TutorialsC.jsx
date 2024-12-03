import Head from 'next/head';
import CopyIcon from "../../../public/images/icons/copy-icon.svg";
import Image from 'next/image';
export default function TutorialsC() {
    return (
        <main className='h-screen overflow-hidden'>
            <div className="p-8 h-full overflow-auto scroll-container">
                <h1 className='mb-10'>Tutorials</h1>
                <h3 className="font-bold mb-6">Follow along to get your app up and running in no time. Start with this tutorial to launch your project in 5 minutes.</h3>
            </div>
        </main>
    );
}
