const PodcastCard = ({img, artist, id}) => {
  return (
    <div className="podcast-card" style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '375px', height: '375px'}}>
        <div className="podcast-card-title">
            <p>#0{id}</p>
            <p>{artist}</p>
        </div>
    </div>
  )
}

export default PodcastCard;