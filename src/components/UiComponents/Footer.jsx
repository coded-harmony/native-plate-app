import Image from "next/image";
import Logo from '../../../public/images/footer-logo.svg';


export default function Footer() {
    return (
        <main className="bg-black py-[100px] max-lg:px-3">
            <div className="container flex items-center justify-center gap-[70px] max-sm:flex-col">
                <Image src={Logo} alt={'Image'} className="w-auto" />
                <div className="flex items-center gap-[34px] font-semibold text-[#999999] max-sm:flex-col">
                    <h3>About Us.</h3>
                    <h3>Privacy Policy.</h3>
                    <h3>Terms of Service.</h3>
                </div>
            </div>
        </main>
    )
}