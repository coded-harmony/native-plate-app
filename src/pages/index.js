import Banner from "@/components/HomeComponents/Banner";
import Benefits from "@/components/HomeComponents/Benefits";
import Faq from "@/components/HomeComponents/Faq";
import Features from "@/components/HomeComponents/Features";
import OurClient from "@/components/HomeComponents/OurClient";
import Pricing from "@/components/HomeComponents/Pricing";
import Testimonials from "@/components/HomeComponents/Testimonials";
import Footer from "@/components/UiComponents/Footer";
import Header from "@/components/UiComponents/Header";

export default function Home() {
    return (
        <main>
            <Header/>
            <Banner/>
            <Features/>
            <Benefits/>
            <Testimonials/>
            <Pricing/>
            <OurClient/>
            <Faq/>
            <Footer/>
        </main>
    );
}
