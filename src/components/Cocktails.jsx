import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {cocktailLists, mockTailLists} from "../../constants/index.js";

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeLine
            .from('#c-left-leaf', {
                x: -100,
                y: 100,
            })
            .from('#c-right-leaf', {
                x: 100,
                y: 100,
            })
    }, [])

    return (
        <section id="cocktails" className="noisy">
            <img
                src="/images/cocktail-left-leaf.png"
                alt="cocktail-left-leaf"
                id="c-left-leaf"
            />

            <img
                src="/images/cocktail-right-leaf.png"
                alt="cocktail-right-leaf"
                id="c-right-leaf"
            />

            <div className="list">
                <div className="popular">
                    <h2>Most Popular Cocktails:</h2>

                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span> - {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most Popular Mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span> - {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Cocktails
