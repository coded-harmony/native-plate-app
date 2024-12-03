import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import StarIcon from '../../../public/images/icons/stars.svg';
import LeftArrow from '../../../public/images/icons/left-arrow.svg';
import RightArrow from '../../../public/images/icons/right-arrow.svg';
import client1 from '../../../public/images/client.png';


const clients = [
    {
        image: client1,
        name: 'Sarah M.',
        review: 'NativePlate made setting up Firebase and notifications a breeze. Their documentation and support are top-notch!',
    },
    {
        image: client1,
        name: 'John D.',
        review: 'The platform is intuitive and helped streamline my workflow. Excellent customer service!',
    },
    {
        image: client1,
        name: 'Emily R.',
        review: 'I love how easy it is to integrate with third-party APIs. Highly recommended!',
    },
];

const CustomPrevArrow = (props) => (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer max-sm:bottom-0 max-sm:top-full" onClick={props.onClick}>
        <Image src={LeftArrow} alt="Previous" width={60} height={60} />
    </div>
);

const CustomNextArrow = (props) => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer max-sm:bottom-0 max-sm:top-full" onClick={props.onClick}>
        <Image src={RightArrow} alt="Next" width={60} height={60} />
    </div>
);

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <main className="mb-[150px] max-lg:px-3" id="testimonials">
            <div className="max-w-[1320px] mx-auto text-center">
                <h3 className="mb-[100px]">Testimonials</h3>
                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index}>
                            <div className="text-center max-w-2xl mx-auto max-md:max-w-xl">
                                <div className="mb-14">
                                    <span className='text-lg'>5.0</span>
                                    <Image className='mx-auto' src={StarIcon} alt="Star" />
                                </div>
                                <h2 className="text-[30px] font-semibold mb-20">"{client.review}"</h2>
                                <div className="flex items-center justify-center gap-4">
                                    {clients.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-10 h-10 rounded-full overflow-hidden border-2 ${index === i ? 'border-yellow-500' : 'border-gray-500 opacity-50'
                                                }`}
                                        >
                                            <Image src={_.image} alt={_.name} width={40} height={40} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </main>
    );
};

export default Testimonials;
