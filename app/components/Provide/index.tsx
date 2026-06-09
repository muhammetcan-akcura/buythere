import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "SEO Audit & Analysis",
        paragraph: 'Comprehensive analysis of your website to identify strengths, weaknesses, and opportunities for SEO improvement.',

    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "Marketing Strategies",
        paragraph: 'Marketing strategies are structured plans designed to attract, engage, and convert target audiences to achieve specific business goals. ',

    },
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Web Design",
        paragraph: 'Web design is the process of creating visually appealing, user-friendly, and functional websites that deliver a seamless online experience.',

    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "Adversting",
        paragraph: 'Advertising is the practice of promoting products, services, or brands through various media channels to attract and influence potential customers.',
    },
]


const Provide = () => {
    return (
        <div>

            <div id="services" className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">We provide that service.</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">We provide tailored SEO, marketing, and web design solutions that help your brand grow online.
                                Our team combines strategy, creativity, and technology to deliver measurable results.
                                From website optimization to digital advertising, we turn your online presence into real business growth.</h4>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Provide;
