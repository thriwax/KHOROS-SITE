const Heading = ({tag, text}) => {
    const Tag = tag || 'h1';

  return <Tag style={{maxWidth: '1280px',
  margin: 'auto'}}>{text}</Tag>
}

export default Heading;