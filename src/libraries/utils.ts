export function prepareFields(data: any, allowedFields: string[]): any {
    const payload = {}
    //Fill payload with allowed fields setted in data
    for (const key in data) {
        if (allowedFields.includes(key)) payload[key] = data[key]
    }
    return payload
}