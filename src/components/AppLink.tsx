// components/AppLink.tsx
import { Link } from 'react-router-dom';

const AppLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({
    to,
    className,
    children
}) => {
    // En développement, utilisez le chemin normal
    // En production, préfixez avec import.meta.env.BASE_URL
    const path = import.meta.env.PROD
        ? `${import.meta.env.BASE_URL}${to}`.replace(/\/\//g, '/')
        : to;

    return (
        <Link to={path} className={className}>
            {children}
        </Link>
    );
};

export default AppLink;