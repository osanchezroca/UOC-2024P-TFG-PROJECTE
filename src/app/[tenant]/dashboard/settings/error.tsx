'use client'
import { ErrorComponent, ErrorProps } from '@src/components/ErrorComponent';

export default function Error(props: ErrorProps) {
    return <ErrorComponent {...props} />
}