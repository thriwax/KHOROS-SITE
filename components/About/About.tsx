import Image from 'next/image';
import logo from '../../public/logo-2.png';

const About = () => {
  return (
        <div className="about-wrapper">
                <div className="about-text"><strong>Khoros.</strong> This is a project about trying to find a new approach
in such a difficult time for all of us. About the unification of artists and musicians to find new ways and forces,
so as not to stop and not fall into a crisis.</div>
                <Image src={logo} width={300} height={300} className="about-image" alt='test'/>
            </div>
  )
}

export default About