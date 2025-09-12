import BreadCrumb from '@/Componets/BreadCrumb/BreadCrumb'
import Map from '@/Componets/Map/Map'
import Info from '@/Componets/Info/Info'
import React from 'react'

const page = () => {
    return (
        <>
            <BreadCrumb breadCrumb_title={"Let's Connect"} />
            <Map />
            <Info/>
        </>
    )
}

export default page
