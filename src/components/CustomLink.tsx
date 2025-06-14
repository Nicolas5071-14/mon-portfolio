// components/CustomLink.tsx
import { Link } from 'react-router-dom';

const CustomLink = ({ to, ...props }: { to: string } & React.ComponentProps<typeof Link>) => {
  return <Link to={to} {...props} />; // Laissez le Router gérer le préfixe
};

export default CustomLink;