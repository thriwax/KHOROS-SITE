import Heading from "@/components/Heading/Heading";
import albums from "@/utils/albums";
import Image from 'next/image';

const Albums = () => {
    return (
        <>
            <Heading tag='h2' text='DISCOGRAPHY'/>
            <div className="albums-wrapper" style={{paddingTop: '50px'}}>
                {albums.map((album) => (
                    <div className="album-container">
                        <Image
                        src={album.img}
                        width={375}
                        height={375}
                        alt={album.album}
                        className="album-image"
                        />
                        <div className="album-title">
                            <p className="artist-name">{album.artist}</p>
                            <p className="album-name">{album.album}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Albums;