'use client'
import Button from '@src/components/Button'
import CardComponent from '@src/components/CardComponent'

export type ErrorProps = {
    error: Error & { digest?: string }
    reset: () => void
}
export function ErrorComponent({ error, reset }: ErrorProps) {
    return (
        <div className='flex flex-col h-full w-full justify-center items-center'>
            <CardComponent>
                <h2>Ha ocorregut un error amb l'aplicació:</h2>
                <pre className='break-words overflow-auto'>{error.message}</pre>
                <Button onClick={() => reset()}>
                    Reiniciar aplicació
                </Button>
            </CardComponent>
        </div>
    )
}