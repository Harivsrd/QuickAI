import { AiTools } from "../components/AiTools";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import Plan from "../components/Plan";
import Testimonial from "../components/Testimonial";

export function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <AiTools />
        <Testimonial />
        <Plan />
        </>
    )
}