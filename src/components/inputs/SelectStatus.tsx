import { useGetStatusQuery } from "@src/libraries/endpoints/report";
import Select from "react-select";
type Props = {
    onChange: (value: any) => void
    selected?: string | null
}
export default function SelectStatus({ onChange, selected = null }: Props) {
    const statusQuery = useGetStatusQuery()
    const options = statusQuery.data?.map(status => ({ label: status.name, value: status.id })) || []
    const selectedOption = selected && options.find(option => option.value === selected)
    return <Select
        options={options}
        isLoading={statusQuery.isFetching}
        onChange={onChange}
        value={selectedOption}
    />
}