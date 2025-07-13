import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2',{
            title: "word"
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        })
        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                duration: 1,
                yPercent: 100,
                ease: 'expo.out',
                stagger: 0.02
            })
            .from('.top-grid, .bottom-grid', {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.04
            }, '-=0.5')
    });

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>

                        <h2>
                            Where every details matters <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                        </p>

                        <div>
                            <div className="flex flex-row">
                               <div>
                                   <p className="md:text-3xl text-xl font-bold">
                                       <span>4.5</span>/5
                                   </p>
                                   <p className="text-sm text-white-100">More than +12000 customers</p>
                               </div>

                                <div className="bg-gray-600 flex items-center justify-center px-2 rounded-4xl">
                                    <div className="flex flex-row items-center justify-center">
                                        <img src="/images/profile1.png" alt="profile1" className="w-10 h-10 rounded-full" />
                                        <img src="/images/profile2.png" alt="profile2" className="w-10 h-10 rounded-full" />
                                        <img src="/images/profile3.png" alt="profile3" className="w-10 h-10 rounded-full" />
                                        <img src="/images/profile4.png" alt="profile4" className="w-10 h-10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt1.png" alt="grid-img-1" />
                </div>

                <div className="md:col-span-3">
                    <div className="noisy" />
                    <div className='m-8'>
                       <div className='mb-3'>
                           <h2 className="text-4xl md:text-2xl font-extrabold">Crafted To Impress</h2>
                           <hr className="my-3" />
                       </div>
                        <div>
                            <ul>
                                <li className="my-6 text-base md:text-sm flex items-center gap-2">
                                    <img src="/images/check.png" alt="check" className="w-4 h-4" />Perfectly balanced blends
                                </li>
                                <li className="my-6 text-base md:text-sm flex items-center gap-2">
                                    <img src="/images/check.png" alt="check" className="w-4 h-4" />Garnished to perfection
                                </li>
                                <li className="my-6 text-base md:text-sm flex items-center gap-2">
                                    <img src="/images/check.png" alt="check" className="w-4 h-4" />Ice-cold every time
                                </li>
                                <li className="my-6 text-base md:text-sm flex items-center gap-2">
                                    <img src="/images/check.png" alt="check" className="w-4 h-4" />Expertly shaken & stirred
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy" />
                    <img src="/images/abt2.png" alt="grid-img-2" />
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy" />
                    <img src="/images/abt3.png" alt="grid-img-3" />
                </div>

                <div className="md:col-span-4">
                    <div className="noisy" />
                    <img src="/images/abt4.png" alt="grid-img-4" />
                </div>
            </div>
        </div>
    )
}
export default About
