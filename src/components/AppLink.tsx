// components/AppLink.tsx
import { Link } from 'react-router-dom';

const AppLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({
    to,
    className,
    children
}) => {
    // En développement, utilisez le chemin normal
    // En production, préfixez avec process.env.PUBLIC_URL si nécessaire
    const path = process.env.NODE_ENV === 'production'
        ? `${process.env.PUBLIC_URL}${to}`
        : to;

    return (
        <Link to={path} className={className}>
            {children}
        </Link>
    );
};

export default AppLink;