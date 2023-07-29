import scIcon from '../../public/icons/sc.svg'
import bcIcon from '../../public/icons/bandcamp.svg'
import instIcon from '../../public/icons/inst.svg'
import Image from 'next/image'

const Links = () => {
  return (
    <div className='links-wrapper' id='inner-links'>
        <a href='https://soundcloud.com/khoroslabel' target='_blank'><Image src={scIcon} width={80} height={80} alt='test' /></a>
        <a href='https://www.instagram.com/xor.su/' target='_blank'><Image src={instIcon} width={80} height={80} alt='test' /></a>
        <a href='https://khoros.bandcamp.com/music' target='_blank'><Image src={bcIcon} width={80} height={80} alt='test' /></a>
    </div>
  )
}

export default Links