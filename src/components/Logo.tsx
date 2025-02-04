import Image from 'next/image';

interface LogoProps {
  isSpecialScreen?: boolean;
}

export default function Logo({ isSpecialScreen = false }: LogoProps) {
  return (
    <Image
      src={isSpecialScreen ? '/logo-dark.svg' : '/logo-white.svg'}
      alt="Logo"
      priority
      width={24}
      height={24}
    />
  );
}
