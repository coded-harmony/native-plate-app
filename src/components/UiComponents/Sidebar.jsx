import Image from "next/image"
import Logo from "../../../public/images/sidebar-logo.svg";
import Play from "../../../public/images/icons/play-icon.svg";
import Tutorial from "../../../public/images/icons/tutorial-icon.svg";


export default function Sidebar() {
    return (
        <main className="w-[300px] h-screen absolute left-0 top-0 bg-black p-0 pl-5 overflow-hidden">
            <div className="overflow-y-scroll h-full scroll-container pt-5">
            <Image className="mb-10" src={Logo} alt="logo" />
            <a href="/get-started" className="flex items-center gap-3 mb-6 text-xl font-bold">
                <Image src={Play} alt="logo" />
                Get started
            </a>
            <div className="mb-6">
                <a href="/tutorial" className="flex items-center gap-3 mb-6 ">
                    <Image src={Tutorial} alt="logo" />
                    <span className="text-xl font-bold opacity-80">Tutorials</span>
                </a>
                <ul className="pl-6 ml-2 space-y-6 border-l-2 border-[#664C0A]">
                    <li><a className="opacity-60 text-xl font-bold" href="/minutes">Ship in 5 minutes</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="/static-page">Static page</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="/user-auth">User authentication</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="/api-call">API call</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="/private">Private page</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Stripe Subscriptions</a></li>
                </ul>
            </div>
            <div className="mb-6">
                <adiv className="flex items-center gap-3 mb-6 ">
                    <Image src={Tutorial} alt="logo" />
                    <span className="text-xl font-bold opacity-80">Features</span>
                </adiv>
                <ul className="pl-6 ml-2 space-y-6 border-l-2 border-[#664C0A]">
                    <li><a className="opacity-60 text-xl font-bold" href="#">SEO</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Database</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Emails</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Payments</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Google Oauth</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Magic Links</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Customer support</a></li>
                </ul>
            </div>
            <div className="mb-6">
                <adiv className="flex items-center gap-3 mb-6 ">
                    <Image src={Tutorial} alt="logo" />
                    <span className="text-xl font-bold opacity-80">Features</span>
                </adiv>
                <ul className="pl-6 ml-2 space-y-6 border-l-2 border-[#664C0A]">
                    <li><a className="opacity-60 text-xl font-bold" href="#">Header</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Hero</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">WithWithout</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Features Listicle</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Features Accordion</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Features Grid</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">CTA</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Pricing</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Blog</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">FAQs</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Testimonial</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Footer</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Button Lead</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Button Checkout</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Button Sign-in</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Button Account</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Button Gradient</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Payments</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Features</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Better Icon</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Modal</a></li>
                </ul>
            </div>
            <div className="mb-6">
                <adiv className="flex items-center gap-3 mb-6 ">
                    <Image src={Tutorial} alt="logo" />
                    <span className="text-xl font-bold opacity-80">Features</span>
                </adiv>
                <ul className="pl-6 ml-2 space-y-6 border-l-2 border-[#664C0A]">
                    <li><a className="opacity-60 text-xl font-bold" href="#">Header</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Hero</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">User authentication</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">API call</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Private page</a></li>
                    <li><a className="opacity-60 text-xl font-bold" href="#">Stripe Subscriptions</a></li>
                </ul>
            </div>
            </div>
        </main>
    )
}