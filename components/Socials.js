import Link from "next/link";
import {RiLinkedinBoxFill, RiGithubFill, RiMailFill} from 'react-icons/ri'
const Socials = () => {
  return <div className="flex  items-center gap-x-5 text-xl">
    <Link href={'https://www.linkedin.com/in/miri-furman'} className="hover:text-accent transition-all duration-300"><RiLinkedinBoxFill/></Link>
    <Link href={'https://github.com/MiriFurman1'} className="hover:text-accent transition-all duration-300"><RiGithubFill/></Link>
    <Link href={'mailto:mirifurman@gmail.com'} className="hover:text-accent transition-all duration-300"><RiMailFill/></Link>
    </div>;
};

export default Socials;
