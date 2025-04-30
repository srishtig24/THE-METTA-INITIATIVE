import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/The-Metta-Initiative--logo-(1).png" 
        alt="The Metta Initiative Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
