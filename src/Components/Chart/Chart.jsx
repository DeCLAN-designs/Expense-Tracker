import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'


const Chart = (props ) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>

        {props.dataPoints.map((dataPoint)=>(//Rendering the chart bar components
            <ChartBar
            key={dataPoint.label}//key is the label helps react render list efficiently
            value={dataPoint.value} 
            maxValue={totalMaximum}
            label={dataPoint.label}
            />
        ))}
    </div>
  )
}

export default Chart

