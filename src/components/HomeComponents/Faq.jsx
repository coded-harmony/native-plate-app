import { useState } from 'react';
import Image from 'next/image';
import PlusIcon from '../../../public/images/icons/plus.svg';
import MinusIcon from '../../../public/images/icons/minus.svg';

const faqData = [
    {
        items: [
            {
                question: 'What is NativePlate?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'Who is NativePlate for?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'How does NativePlate save time?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'Can I customize NativePlate for my project?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'Does NativePlate support Firebase integration?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'What kind of push notifications does NativePlate offer?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'Do I need advanced coding skills to use NativePlate?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'What platforms does NativePlate support?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'How do I get started with NativePlate?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
            {
                question: 'Is support available if I face issues?',
                answer: 'What kind of push notifications does NativePlate offer?'
            },
        ],
    },
];

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <main className="faq py-12 px-6 max-w-3xl mx-auto max-lg:px-3">
            <h2 className="mb-12 text-center">FAQs</h2>

            {faqData.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-12">
                    {section.items.map((item, index) => (
                        <div key={index} className="pb-6 mb-6 border-b">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleQuestion(index)}>
                                <p className="font-semibold">{item.question}</p>
                                <Image src={activeQuestion === index ? MinusIcon : PlusIcon} alt="icons" />
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeQuestion === index ? 'max-h-[400px] mt-4' : 'max-h-0'}`} >
                                <p className="mt-4">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </main>
    );
};

export default Faq;
