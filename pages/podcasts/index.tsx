import initPodcasts from "../../utils/podcasts";
import PodcastCard from "../../UI/PodcastCard/PodcastCard";
import Heading from "../../components/Heading/Heading";
import Head from "next/head";
import { useEffect, useState } from "react";
import { podcastT }from '../../types';
import Link from "next/link";

const Podcasts = () => {
    const[podcasts, setPodcasts]=useState<podcastT[]>([])

    useEffect(() => {
        setPodcasts(initPodcasts)
    }) 


    return (
        <>  
            <Head>
                <title>KHOROS - PODCASTS</title>
            </Head>
            <div className="podcasts-wrapper">
                {podcasts && podcasts.map((podcast) => (
                    <Link href={`./podcasts/${podcast.id}`} key={podcast.id}><PodcastCard key={podcast.id} id={podcast.id} artist={podcast.artist} img={podcast.img} /></Link>
                ))}
            </div>
        </>
    )
}

export default Podcasts;