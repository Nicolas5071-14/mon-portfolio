

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">

        <circle cx="60" cy="60" r="55" fill="url(#gradient)" />
        <circle cx="60" cy="60" r="10" fill="white" />
        <rect x="40" y="40" width="10" height="30" fill="white" />
        <rect x="40" y="40" width="30" height="10" fill="white" />
        <rect x="70" y="50" width="10" height="30" rx="5" fill="white" />
        <path d="M85 40L65 80H75L85 55L95 80H105L85 40Z" fill="white" />

        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#8B5CF6" />
            </linearGradient>
        </defs>
    </svg>
);

export default Logo;