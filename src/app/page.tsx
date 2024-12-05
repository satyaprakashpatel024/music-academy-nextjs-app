import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestiminials from "@/components/TestimonialsCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96]  dark:bg-dot-white/[0.2]  antialiased bg-grid-white/[0.02]">
            {/* <h1 className="text-2xl text-center "> welcome to music academy</h1> */}
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs/>
            <MusicSchoolTestiminials/>
            <UpcomingWebinars/>
        </main>
    );
}
