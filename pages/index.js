import Heading from "@/components/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import ProductList from "@/components/ProductList/ProductList";
import Head from 'next/head'
import About from "@/components/About/About";

const Home = () => {
    return (
        <>
            <Head>
                
            </Head>
            <div className="main-page">
            <Hero />
            <div className="podcasts">
                <Heading tag='h2' text='PODCASTS'/>
                
                
            </div>
            
            </div>

                    <ProductList />

            <div className="main-page">
            <div className="about">
            <Heading tag='h2' text='ABOUT US'/>
            <About />
            </div>
            </div>
        </>
            
            
    )
}

export default Home;