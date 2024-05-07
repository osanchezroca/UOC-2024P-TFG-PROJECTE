'use client'

import Button from "@src/components/Button"
import Heading from '@src/components/Heading';

type Props = {
    item: any
}
export default function ReportAttachments({ item }: Props) {

    const attachments = [
        { name: 'Document 1', url: 'https://www.google.com' },
        { name: 'Document 2', url: 'https://www.google.com' },
        { name: 'Document 1', url: 'https://www.google.com' },
        { name: 'Document 2', url: 'https://www.google.com' },
        { name: 'Document 1', url: 'https://www.google.com' },
        { name: 'Document 2', url: 'https://www.google.com' },
    ]

    return <div className="flex flex-col relative overflow-auto">
        <Heading>Recursos adjunts</Heading>
        <div className='relative overflow-auto'>
            <div className='flex flex-col gap-2'>
                {attachments ? attachments.map((attachment, index) => (
                    <div key={index} className="flex justify-between p-2 items-center bg-slate-500">
                        <p>{attachment.name}</p>
                        <Button href={attachment.url} target="_blank" rel="noreferrer">Veure</Button>
                    </div>
                )) : <p>No hi ha documents adjunts</p>}
            </div>
        </div>
    </div>
}