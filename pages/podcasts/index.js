import podcasts from "@/utils/podcasts";
import PodcastCard from "@/UI/PodcastCard/PodcastCard";
import Heading from "@/components/Heading/Heading";

const Podcasts = () => {
    return (
        <>
            <Heading tag='h2' text='PODCASTS' />
            <div className="podcasts-wrapper" style={{paddingTop: '50px'}}>
                {podcasts.map((podcast) => (
                    <PodcastCard key={podcast.id} id={podcast.id} artist={podcast.artist} img={podcast.img} />
                ))}
            </div>
        </>
    )
}

export default Podcasts;