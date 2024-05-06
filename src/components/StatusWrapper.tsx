
type Props = {
    query: any;
    children: React.ReactNode;
};
/**
 * Function that check if status is loaded or has an error
 * @param param0 
 * @returns 
 */
export default function StatusWrapper({ query, children }: Props) {
    const isLoading = query.status === 'loading';
    const isError = query.status === 'error';
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            {query.status === 'fulfilled' && children}
        </>
    )
}