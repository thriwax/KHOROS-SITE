import '../../styles/main.scss'
import { useEffect, useState } from 'react';
import { albumT }from '../../types2';
import { useRouter } from 'next/router';
import albums from '../../utils/albums'
import Image from 'next/image';
import BandcampPlayer from 'components/BandcampPlayer/BandcampPlayer';
import Links from 'components/Links/Links';

const PodcastPage = () => {

    const [release, setRelease] = useState<albumT>()
    
    const {query} = useRouter()

    useEffect(() => {
        
        setRelease(albums.find((p) => {
            return p.id === query.slug}))

    }, [albums, setRelease, query])
    
    
    return (
      <>
      <div className='album-page'>
        <div className='album-img'><img style={{width: '280px', height: '280px'}} src={release?.img} alt='image' className='album-image-page'/></div>
        <div className='album-info'>
            <h2 className='album-title-page'>{release?.artist}</h2>
            <p className='album-album-page'>{release?.album}</p>
            <p className='album-review'>{release?.review}</p>
            <BandcampPlayer album={release?.bclink}/>
        </div>
      </div>
      <Links />
      </>
    );
  };


  
  export default PodcastPage;