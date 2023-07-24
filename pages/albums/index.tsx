import Heading from "../../components/Heading/Heading";
import Head from "next/head";
import albums from "../../utils/albums";
import Image from 'next/image';
import Link from "next/link";

const Albums = () => {
    return (
        <>
            <Head>
                <title>KHOROS - DISCOGRAPHY</title>
            </Head>
            <div className="albums-wrapper" style={{paddingTop: '50px'}}>
                {albums.map((album) => (
                    <Link href={`./albums/${album.id}`} key={album.id}><div className="album-container" key={album.id}>
                        <Image
                        src={album.img}
                        width={300}
                        height={300}
                        alt={album.album}
                        className="album-image"
                        />
                        <div className="album-title">
                            <p className="artist-name">{album.artist}</p>
                            <p className="album-name">{album.album}</p>
                        </div>
                    </div></Link>
                ))}
                
            </div>
        </>
    )
}

export default Albums;