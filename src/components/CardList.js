import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img2 from '../images/img3.svg'
import img1 from '../images/img2.svg'
import img3 from '../images/img1.svg'
import { Box, Card, CardContent, Icon, IconButton, Typography } from '@mui/material';
const CardList = () => {

    const data = [
        {
            title: 'TruCheck™',
            discription: 'Filter your results with validated, available listings',
            span: '',
            img: img1,
            id: 1
        },
        {
            title: 'Search 2.0',
            discription: 'Find homes by commute time',
            span: 'NEW',
            img: img2,
            id: 2
        },
        {
            title: 'Map View',
            discription: ' Search for properties in preferred areas using a map',
            span: '',
            img: img3,
            id: 3
        },
    ]
    return (
        <Box sx={{ margin: '45px 25px 0px 25px', display: 'flex',flexWrap:'wrap' ,justifyContent: 'space-evenly', alignItems: 'center' }}>
           
            {
                data.map((ele) => (
                    <Card sx={{
                        width: '380px',
                        height: '244px',
                        border:'none',
                        backgroundSize: 'cover',
                        backgroundPosition: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        overflow: 'auto',
                        cursor: 'pointer',
                        borderRadius:'8px',
                        position: 'relative',
                        backgroundImage: `url(${ele.img})`
                    }}>
                        <CardContent>
                            <Typography sx={{ color: 'black' , fontSize:'24px',lineHeight:'1.8rem',fontWeight:'700',textAlign:'left'}}>
                                {ele.title}

                                {ele.span&&(
            <span style={{position:'absolute',top:'14px',marginLeft:'8px',textAlign:'center',height:'26px',width:'50px',fontWeight:'700',fontSize:'0.8rem',color:'white',borderRadius:'25px',backgroundColor: '#f73131'}}>{ele.span}</span>

                                )}
                            </Typography>
                            <Typography sx={{ color: 'black',marginTop:'30px',maxWidth: '250px',fontSize:'1.1rem',textAlign:'left' }}>
                                {ele.discription}<IconButton size='small' ><ArrowForwardIosIcon sx={{width:'18px',height:'18px'}}/></IconButton>
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }


        </Box>

    )
}

export default CardList