const PodcastCard = ({img, artist, id}) => {
  return (
    <div className="podcast-card" style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '280px', height: '280px'}}>
        <div className="podcast-card-title">
            <p className="podcast-tag">#0{id}</p>
            <p className="podcast-artist">{artist}</p>
        </div>
    </div>
  )
}

export default PodcastCard;