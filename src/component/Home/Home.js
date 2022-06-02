import React from 'react'
import Featured from '../Featured/Featured';
import {data} from "../../chartdata";
import Chart from '../Chart/Chart';
import Widgetssm from '../Widgets/Widgetssm';
import Widgetslg from '../Widgets/Widgetslg';

function Home() {
  return (
    <>
    <div className='home'>
      <Featured/>
      <Chart data={data} title="User Analytics" grid dataKey="Actiive User"/>
      <div className="homewidgets">
    <Widgetssm/>
     <Widgetslg/>
     
  </div>
    </div>
    </>
  )
}

export default Home