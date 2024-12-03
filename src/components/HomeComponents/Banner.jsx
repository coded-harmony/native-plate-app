import Image from "next/image";
import Badge from "../../../public/images/icons/badge-icon.svg"
import ArrowR from "../../../public/images/icons/arrow-right.svg"
import BannerImg from "../../../public/images/banner-img.png"
import hacker from "../../../public/images/hacker-news.png"
import product from "../../../public/images/product-news.png"
import X from "../../../public/images/x.png"
import reddit from "../../../public/images/reddit.png"



export default function Banner() {
    return (
        <main className="py-[150px] max-lg:px-3 max-sm:pt-20">
            <div className="container grid grid-cols-2 items-center gap-10 max-md:grid-cols-1  max-md:text-center">
                <div className="">
                    <div className="w-[216px] h-[52px] rounded-[10px] border border-white flex items-center justify-center gap-2 text-left max-md:mx-auto">
                        <Image src={Badge} alt="icon" />
                        <div>
                            <span className="text-xs">Product Hunt</span>
                            <p>#2 Product of the Day</p>
                        </div>
                    </div>
                    <h1 className="mb-8">Kickstart Your React Native Projects with Ready- Made Boilerplates.</h1>
                    <h3 className="mb-8">Simplify app development with Firebase Auth, User Activity Tracking, Push Notifications, and Custom Components.</h3>
                    <div className="flex items-center gap-5 max-md:justify-center">
                        <a href="#" className="btn-style">Get Boiling Plates <Image src={ArrowR} alt="icon" /></a>
                        <a href="#" className="btn-style white">Demo <Image src={ArrowR} alt="icon" /></a>
                    </div>
                </div>
                <div className="max-md:w-full">
                    <Image className="max-md:mx-auto" src={BannerImg} alt="icon" />
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 mt-[160px] max-md:mt-20 max-sm:flex-wrap">
                <span className="text-sm">Featured on</span>
                <a href="#"><Image src={hacker}  alt="img" className="h-6 w-auto "/></a>
                <a href="#"><Image src={product}  alt="img" className="h-6 w-auto "/></a>
                <a href="#"><Image src={X}  alt="img" className="h-6 w-auto "/></a>
                <a href="#"><Image src={reddit}  alt="img" className="h-6 w-auto "/></a>
            </div>
        </main>
    )
}