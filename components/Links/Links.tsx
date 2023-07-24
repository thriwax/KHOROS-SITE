import scIcon from '../../public/icons/sc.svg'
import bcIcon from '../../public/icons/bandcamp.svg'
import instIcon from '../../public/icons/inst.svg'
import Image from 'next/image'

const Links = () => {
  return (
    <div className='links-wrapper'>
        <a href='https://soundcloud.com/khoroslabel' target='_blank'><Image src={scIcon} width={120} height={120} alt='test' /></a>
        <a href='https://www.instagram.com/xor.su/' target='_blank'><Image src={instIcon} width={120} height={120} alt='test' /></a>
        <a href='https://khoros.bandcamp.com/music' target='_blank'><Image src={bcIcon} width={120} height={120} alt='test' /></a>
    </div>
  )
}

export default Links