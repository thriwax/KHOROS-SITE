import Link from 'next/link';
import podcasts from '../../utils/podcasts';
import PodcastCard from '../../UI/PodcastCard/PodcastCard';

const ProductList = () => {




  const obj1 = [podcasts[0]]
  const obj2 = [podcasts[1]]
  const obj3 = [podcasts[2]]

  return (
    <div className="product-list">
      {obj1 && obj1.map((podcast) => (
        <Link href={`./podcasts/${podcast.id}`} key={podcast.id}><PodcastCard key={podcast.id} id={podcast.id} artist={podcast.artist} img={podcast.img} /></Link>
      ))}
      {obj2 && obj2.map((podcast) => (
        <Link href={`./podcasts/${podcast.id}`} key={podcast.id}><PodcastCard key={podcast.id} id={podcast.id} artist={podcast.artist} img={podcast.img} /></Link>
      ))}
      {obj3 && obj3.map((podcast) => (
        <Link href={`./podcasts/${podcast.id}`} key={podcast.id}><PodcastCard key={podcast.id} id={podcast.id} artist={podcast.artist} img={podcast.img} /></Link>
      ))}
    </div>
  );
};

export default ProductList;

