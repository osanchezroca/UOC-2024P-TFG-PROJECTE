import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import { useMemo } from 'react';
export default function ImageViewer({ url }: { url: string }) {
    return useMemo(() => <DocViewer
        config={{ header: { disableHeader: true } }}
        documents={[{ uri: url, fileName: 'attachment', fileType: 'image/png' }]}
        pluginRenderers={DocViewerRenderers}
    />, [url])
}