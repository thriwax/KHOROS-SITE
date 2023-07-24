import Heading from "../components/Heading/Heading";
import Hero from "../components/Hero/Hero";
import ProductList from "../components/ProductList/ProductList";
import Head from 'next/head'
import About from "../components/About/About";
import Links from "components/Links/Links";
import "../styles/main.scss";

const Home = () => {
    return (
        <>
            <Head>
                <title>KHOROS - HOME</title>
            </Head>
            <div className="main-page">
            <Hero />
            <div className="podcasts">
            <Heading tag='h2' text='PODCASTS'/>
            </div>
            <ProductList />
            <div className="about">
            <Heading tag='h2' text='ABOUT US'/>
            <About />
            </div>
            <Links />
            </div>
        </>
            
            
    )
}

export default Home;