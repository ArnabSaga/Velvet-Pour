import {ScrollTrigger, SplitText} from "gsap/all";
import {gsap} from "gsap";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import About from "./components/About.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <CustomCursor />
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
        </main>
    )
}
export default App
