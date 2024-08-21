import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import { lusitana ,inter } from "@/app/ui/fonts";
import Image from 'next/image';
export default function Page() {
  return (
    <div>
      <p className={` ${inter.className} text-blue-700`}>
        welcome to the tehran
      </p>
      <br />
      <p className={`${lusitana.className} text-rose-700`}>
        welcome to the tehran
      </p>
      <div>
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className='block md:hidden'

          alt="of the dashboard project showing desktop version"
        />
      </div>
    </div>
  );
}
