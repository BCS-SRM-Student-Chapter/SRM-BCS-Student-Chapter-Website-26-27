import Header from "../components/Header"
import HeroHome from "../components/HeroHome";
import MetricsHome from "../components/MetricsHome";
import DomainsHome from "../components/DomainsHome";
import VissionHome from "../components/VissionHome";
import WhatWeDoHome from "../components/WhatWeDoHome";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Header />
            <HeroHome />
            <MetricsHome />
            <DomainsHome />
            <VissionHome />
            <WhatWeDoHome />
            <Footer />
            <p className="text-3xl font-bold underline">Hi</p>
        </>
    )
}
export default Home;