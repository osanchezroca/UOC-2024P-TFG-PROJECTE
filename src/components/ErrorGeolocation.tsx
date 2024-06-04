'use client'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardComponent from '@src/components/CardComponent'

export type ErrorProps = {
    error: string
}
export function ErrorGeolocation({ error }: ErrorProps) {
    return (<div className='flex flex-col justify-center items-center w-full px-4'>
        <CardComponent className="bg-yellow-300 text-gray-900">
            <div className='flex gap-5 justify-center items-center'>
                <FontAwesomeIcon icon={faExclamationTriangle} size='3x' />
                <div className='flex flex-col justify-center items-start gap-2'>
                    <p>Per poder utilitzar l'aplicació, ha de permetre la geolocalització per aquesta aplicació.</p>
                    <p className='font-bold'>Es sol·licitarà de nou el permís en recarregar la pàgina.</p>
                    <p className='font-bold'>Depenent el dispositiu o navegador web, pot requerir-se activar des-de la configuració.</p>
                    <pre className='break-words overflow-auto'>{error}</pre>
                </div>
            </div>
        </CardComponent>
    </div>
    )
}