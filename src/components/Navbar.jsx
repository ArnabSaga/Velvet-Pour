import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: '.navbar',
                start: 'bottom top ',
                toggleActions: 'play none none reverse',
            }
        });

        navTween.fromTo('.navbar',
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        );
    }, []);

    return (
        <nav className="navbar fixed top-0 w-full z-50">
            <div className="flex items-center justify-between px-4 py-2">
                <a href="#home" className="flex items-center gap-2">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-8"
                    />
                    <p>Velvet Pour</p>
                </a>
                <ul className="flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
