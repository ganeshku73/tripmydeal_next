
import { SocialIcon } from 'react-heroicons';

const SocialMediaIcons = ({ name, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
    >
      <SocialIcon name={name} className="h-6 w-6" />
    </a>
    
  );
};

export default SocialMediaIcons;
