import React from 'react'



const Routers = () => {
  return (
        <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/blog' element={<Blog/>}></Route>
                  <Route path='/Find an Agency' element={<FindAnAgency/>}></Route>
                  <Route path='/Floor Plans' element={<FloorPlans/>}></Route>
                  <Route path='/Guides' element={<Guides/>}></Route>
                  <Route path='/Market Intelligence' element={<MarketIntelligence/>}></Route>
                  <Route path='/Agent Portal' element={<AgentPortal/>}></Route>
                  <Route path='/Events' element={<Events/>}></Route>
                  <Route path='*' element={<NotFound/>}></Route>

        </Routes>

    )
}

export default Routers