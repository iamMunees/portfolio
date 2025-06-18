import { div } from 'framer-motion/client';
import { Instagram, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkCard text-darkText py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Muneewaran S. All rights reserved.</p>
    </footer>
  )
}

export default Footer;