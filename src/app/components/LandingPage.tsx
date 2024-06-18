import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@src/components/Button';
import CardComponent from '@src/components/CardComponent';
import Link from 'next/link';

export default function LandingPage() {
    return <div className='flex flex-col h-full w-full justify-center items-center'>
        <div className='flex flex-col gap-10'>
            <CardComponent>
                <div className='flex flex-col gap-3 sm:gap-5'>
                    <h1 className='text-xl'>Plataforma de report d’esdeveniments en base a la geolocalització</h1>
                    <p className='text-center'>Per accedir a l'aplicació, accedeix la la URL corresponent a la teva instància.</p>
                    <h2 className='text-lg text-center'>Accés a l'instància de proves: "default"</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10'>
                        <Button href='/default' target='_blank' className='text-blue-800'>
                            <p className='m-5 text-lg'>
                                Accedir a l'aplicació pública
                            </p>
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
                </div>
            </CardComponent>

            <CardComponent>
                <div className='flex gap-5 items-baseline'>
                    <h1 className='text-xl'>TFG - UOC</h1>
                    <Link href='https://www.linkedin.com/in/osanchezroca/' target='_blank' className='text-blue-800 underline'>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faLinkedin} className='h-5' /> Oscar Sánchez
                        </div>
                    </Link>
                    <Link href='https://github.com/osanchezroca/UOC-2024P-TFG-PROJECTE' target='_blank' className='text-blue-800 underline'>
                        <div className='flex gap-2'>
                            <FontAwesomeIcon icon={faGithub} className='h-5' /> Repositori
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
}