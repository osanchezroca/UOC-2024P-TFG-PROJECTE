import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faMailReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@src/components/Button';
import CardComponent from '@src/components/CardComponent';
import Link from 'next/link';

export default function Home() {

  return (
    <div className='flex flex-col h-full w-full justify-center items-center'>
      <div className='flex flex-col gap-10'>
        <CardComponent>
          <div className='flex flex-col gap-3 sm:gap-5'>
            <h2 className='text-xl text-center'>Instància "default"</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10'>
              <Button href='/default/home' target='_blank' className='text-blue-800'>
                <div className='m-5'>
                  Accedir a l'aplicació pública
                </div>
              </Button>
              <Button href='/default/dashboard' target='_blank' className='text-blue-800'>
                <div className='flex flex-col gap-4 m-5'>
                  <p className='text-lg'>Accedir al panell de control</p>
                  <div className='flex gap-4 text-sm justify-center'>
                    <p>Clau administrativa:</p>
                    <pre>demo</pre>
                  </div>
                </div>
              </Button>
            </div>
            <p className='text-center'>Per accedir a l'aplicació, accedeix la la URL corresponent a la teva instància.</p>
          </div>
        </CardComponent>

        <CardComponent>
          <div className='flex gap-5 items-baseline'>
            <h1 className='text-xl'>TFG - UOC</h1>
            <Link href='https://linkedin.com/osanchezroca' target='_blank' className='text-blue-800 underline'>
              <div className='flex gap-2'>
                <FontAwesomeIcon icon={faLinkedin} className='h-5' /> Oscar Sánchez
              </div>
            </Link>
            <Link href='https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE' target='_blank' className='text-blue-800 underline'>
              <div className='flex gap-2'>
                <FontAwesomeIcon icon={faGithub} className='h-5' /> Repositori TFG
              </div>
            </Link>
            <Link href='mailto://osharo@uoc.edu' target='_blank' className='text-blue-800 underline'>
              <div className='flex gap-2'>
                <FontAwesomeIcon icon={faInbox} className='h-5' /> Correu UOC
              </div>
            </Link>
          </div>
        </CardComponent>
      </div>
    </div>
  );
}
