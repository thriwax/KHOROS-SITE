import Links from "components/Links/Links";
import AboutUS from "../../components/About/About";
import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>KHOROS - ABOUT US</title>
            </Head>
            <AboutUS />
            <Links />
        </div>
    )
}

export default About;