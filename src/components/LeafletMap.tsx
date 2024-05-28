import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { ReactNode } from "react"
import * as Leaflet from "react-leaflet"
import { MapContainer, TileLayer } from "react-leaflet"

export type MapProps = {
    position: [number, number],
    zoom: number,
    children?: (l) => ReactNode,
    scrollWheelZoom?: boolean,
    dragging?: boolean,
    zoomControl?: boolean
}

export default function LeafletMap({ position, zoom, children, scrollWheelZoom = true, dragging = true, zoomControl = true }: MapProps) {
    return <MapContainer center={position} zoom={zoom} scrollWheelZoom={scrollWheelZoom} dragging={dragging} zoomControl={zoomControl}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children(Leaflet)}
    </MapContainer>
}