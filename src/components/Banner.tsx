// src/components/Banner.tsx
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  variant?: 'default' | 'book-transfer';
}

export default function Banner({ 
  icon, 
  title, 
  description, 
  linkText = 'Learn more',
  linkHref = '#',
  variant = 'default'
}: BannerProps) {
  return (
    <section className={`banner ${variant === 'book-transfer' ? 'banner--book-transfer' : ''}`}>
      <div className="banner__content">
        <div className="banner__content-icon">
          <Image src={icon} alt="Banner Icon" width={32} height={32} />
        </div>
        <div className="banner__content-text">
          <p className="xl xl--bold">{title}</p>
          <p className="lg lg--regular">{description}</p>
        </div>
        <Link href={linkHref} className="btn-link lg lg--bold">
          {linkText}
        </Link>
      </div>
    </section>
  );
}