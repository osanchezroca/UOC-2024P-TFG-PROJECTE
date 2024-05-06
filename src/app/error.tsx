'use client'
import Button from '@src/components/Button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className='flex flex-col h-full w-full justify-center items-center'>
            <div className='bg-slate-100 rounded-md p-3 border border-black border-solid flex flex-col jusitfy-stretch'>
                <h2>Ha ocorregut un error amb l'aplicació:</h2>
                <pre>{error.message}</pre>
                <Button onClick={() => reset()}>
                    Reiniciar aplicació
                </Button>
            </div>
        </div>
    )
}