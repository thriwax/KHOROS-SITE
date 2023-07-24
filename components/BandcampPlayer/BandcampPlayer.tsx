const BandcampPlayer = ({album}) => {
  return (
    <div style={{maxWidth: '700px'}}><div style={{left: '0', width: '100%', height: '120px', position: 'relative'}}><iframe src={album} style={{top: '0', left: '0', width: '100%', height: '100%', border: '0'}}></iframe></div></div>
  )
}

export default BandcampPlayer
