import Button from '@src/components/Button';
import CardComponent from '@src/components/CardComponent';

type Props = {
    query: any;
    children: React.ReactNode;
};
/**
 * Function that check if status is loaded or has an error
 * @param query
 * @param children
 * @returns 
 */
export default function StatusWrapper({ query, children }: Props) {
    if (['fulfilled'].includes(query.status)) {
        return <>{children}</>
    } else if (['rejected', 'error'].includes(query.status)) {
        return <div className='flex flex-col h-full w-full justify-center items-center'>
            <CardComponent>
                <h2>Ha ocorregut un error amb l'aplicació:</h2>
                <pre>{query.error?.data ?? JSON.stringify(query.error)}</pre>
            </CardComponent>
        </div>
    } else {
        return <div className='flex flex-col h-full w-full justify-center items-center'>
            <p>Carregant</p>
        </div>
    }
}