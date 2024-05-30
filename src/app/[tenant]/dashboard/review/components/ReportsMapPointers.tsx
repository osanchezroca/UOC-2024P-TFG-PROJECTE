'use client'
import { useEffect } from "react"
import { Marker, useMap } from "react-leaflet"

export default function ReportsMapPointers({ pointers, selectedReport, onCLickReport }) {
    const map = useMap()

    //When selectedReport changes, the map will fly to the selected report
    useEffect(() => {
        if (selectedReport) {
            const report = pointers.find(report => report.id === selectedReport)
            if (report) {
                map.flyTo([report.latitude, report.longitude], 18, { duration: 2 })
            }
        }
        map.invalidateSize()
    }, [selectedReport])

    return pointers?.map(report => <Marker
        key={report.id}
        position={[report.latitude, report.longitude]}
        eventHandlers={{
            click: () => onCLickReport(report.id === selectedReport ? null : report.id)
        }}
    />
    )
}
