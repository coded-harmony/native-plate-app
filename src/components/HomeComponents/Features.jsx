import Image from "next/image";
import Badge from "../../../public/images/icons/badge-icon.svg"


const feature = [
    {
        FeatureImg: Badge,
        title: "Firebase Authentication",
        text: "Enable seamless user login and signup, with Google integration and user management.",
    },
    {
        FeatureImg: Badge,
        title: "Firebase Authentication",
        text: "Enable seamless user login and signup, with Google integration and user management.",
    },
    {
        FeatureImg: Badge,
        title: "Firebase Authentication",
        text: "Enable seamless user login and signup, with Google integration and user management.",
    },
    {
        FeatureImg: Badge,
        title: "Firebase Authentication",
        text: "Enable seamless user login and signup, with Google integration and user management.",
    },
    {
        FeatureImg: Badge,
        title: "Firebase Authentication",
        text: "Enable seamless user login and signup, with Google integration and user management.",
    },
]


export default function Features() {
    return (
        <main className="mb-[150px] max-lg:px-3">
            <h3 className="text-center mb-[100px]">Features Overview</h3>
            <div className="container flex items-center justify-between gap-10 max-md:flex-wrap max-md:justify-center max-md:text-center">
                {feature.map((item, index) => (
                    <div key={index} className="max-md:w-[270px]">
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center mb-6 max-md:mx-auto">
                            <Image src={item.FeatureImg} alt="img" />
                        </div>
                        <p className="text-lg font-semibold mb-2">{item.title}</p>
                        <p className="text-sm font-medium">{item.text}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}