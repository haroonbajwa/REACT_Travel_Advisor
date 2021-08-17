import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')

    const coordinates = { lat: 30.3753, lng: 69.3451};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB5sD34di8jvzbG6_si5tQxVcQSyzqhzUg' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={8}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
