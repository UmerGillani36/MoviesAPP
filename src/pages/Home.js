import { Button } from '@mui/material'
import React from 'react'
import Header from '../components/Header';
import CardList from '../components/CardList';

const Home = () => {
  return (
    <>
    <div className='container-fluid'>


      <div className='MainContent'>
        <div style={{ height:'63px' }}>

          <h1 className='HeadingOne'>Search properties for sale and to rent in the UAE</h1 >
        </div>
        <div style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          width: '350px',
          height: '50px',
          backgroundColor: 'rgba(34,34,34,.75) ',
          // padding: '5px',
          borderRadius: '0.4rem',
        }}>
          <button className='ButtonStyle' >Property Search</button>
          <button className='ButtonStyle'>TruValue™</button>

        </div>
        <div></div>



      </div>

      <>
        <CardList/>
      </>

    </div>
    </>
  )
}

export default Home