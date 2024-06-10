'use client'

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Button from "@src/components/Button";
import Heading from '@src/components/Heading';
import Modal from "@src/components/Modal";
import StatusWrapper from "@src/components/StatusWrapper";
import { useDeleteAttachmentMutation, useGetAttachmentsQuery } from "@src/libraries/endpoints/report";

type Props = {
    report_id: any
    allowDelete?: boolean
}
export default function ReportAttachments({ report_id, allowDelete = false }: Props) {
    const reportAttachmentsQuery = useGetAttachmentsQuery(report_id)
    const attachments = reportAttachmentsQuery?.data

    const [deleteAttachment, deleteAttachmentQuery] = useDeleteAttachmentMutation()

    return <div className="flex flex-col relative overflow-auto">
        <Heading>Recursos adjunts</Heading>
        <div className='relative overflow-auto'>
            <StatusWrapper query={reportAttachmentsQuery}>
                <StatusWrapper query={deleteAttachmentQuery}>
                    <div className='grid grid-cols-3 gap-2'>
                        {attachments?.length ? attachments?.map((attachment, index) => (
                            <div key={index} className="flex flex-col">

                                <Modal renderButton={({ open }) =>
                                    <div className="flex flex-col justify-between items-stretch bg-slate-500 border border-slate-700 rounded-md min-h-40">
                                        <div className="grow pt-1 px-1">
                                            <DocViewer
                                                config={{ header: { disableHeader: true } }}
                                                documents={[{ uri: attachment.url, fileName: 'attachment', fileType: 'image/png' }]}
                                                pluginRenderers={DocViewerRenderers}
                                            />
                                        </div>
                                        <div className="flex">
                                            <Button size="sm" color="slate" onClick={() => open()} className="grow px-1 py-1 text-xs">Veure</Button>
                                            {allowDelete && <Button size="sm" onClick={async () => deleteAttachment({ route: attachment.url })} className="px-1 py-1 text-xs bg-red-700 hover:bg-red-900">&times;</Button>}
                                        </div>
                                    </div>}>
                                    <DocViewer
                                        config={{ header: { disableHeader: true } }}
                                        documents={[{ uri: attachment.url, fileName: 'attachment', fileType: 'image/png' }]}
                                        pluginRenderers={DocViewerRenderers}
                                    />
                                </Modal>
                            </div>
                        )) : <p>No hi ha documents adjunts</p>}
                    </div>
                </StatusWrapper>
            </StatusWrapper>
        </div>
    </div>
}