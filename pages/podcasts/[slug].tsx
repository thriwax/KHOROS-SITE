import { useEffect, useState } from 'react';
import { podcastT }from '../../types';
import { useRouter } from 'next/router';
import podcasts from '../../utils/podcasts';
import Links from 'components/Links/Links';
import ReactPlayer from "react-player";

const PodcastPage = () => {

    const [mix, setMix] = useState<podcastT>()
    
    const {query} = useRouter()

    useEffect(() => {
        
        setMix(podcasts.find((p) => {
            return p.id === query.slug}))

    }, [podcasts, setMix, query])
    
    
    return (
      <>
      <div className='podcast-page' key={mix?.id}>
        <div className='podcast-page-main-title'>Podcast #0{mix?.id}</div>
        <img src={mix?.img}  style={{width: '280px', height: '280px'}} alt='test' className='podcast-image-page'/>
        <h2 className='podcast-title-page'>{mix?.artist}</h2>
        <p className='podcast-review'>{mix?.review}</p>
        <ReactPlayer
        url={mix?.soundlink}
        width={375}
        height={450}
      />
      </div>
      <Links />
      </>
    );
  };

  
  export default PodcastPage;