import Image from "next/image";

const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl leading-tight">
                          <br />Digital Marketing and Advertising   Agency
                        </h1>
                        <h2 className="mt-6 text-2xl leading-8 text-bluegray sm:mt-8">
                            Digital Marketing and Advertising - SEO
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            We help businesses increase their visibility, traffic, and conversions with tailored SEO strategies built on analytics and proven results.
                        </p>
                    </div>

                   
                </div>
            </div>
        </main>
    );
};

export default Banner;
