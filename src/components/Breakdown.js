import React from 'react'
import { Flex, Panel, PanelHeader, PanelFooter, Text, Box, Subhead } from 'rebass'
import { VictoryChart, VictoryContainer, VictoryPie, VictoryTheme, VictoryTransition, VictoryLabel, VictoryTooltip } from 'victory'
import PieChart from './PieChart'

const Breakdown = props => {

  let total = props.data.length

  let min = props.data.filter(inmate => inmate.custody_level === 'MIN').length
  let med = props.data.filter(inmate => inmate.custody_level === 'MED').length
  let max = props.data.filter(inmate => inmate.custody_level === 'MAX').length
  let custodyChartData = [
          { x: 'Min \n' + Math.round(min/total*100) + '%', y: min },
          { x: 'Med \n' + Math.round(med/total*100) + '%', y: med },
          { x: 'Max \n' + Math.round(max/total*100) + '%', y: max }
        ]

  let black = props.data.filter(inmate => inmate.race === 'B').length
  let white = props.data.filter(inmate => inmate.race === 'W').length
  let asian = props.data.filter(inmate => inmate.race === 'A').length
  let hispanic = props.data.filter(inmate => inmate.race === 'O').length
  // let other = props.data.filter(inmate => inmate.race !== 'B' || 'W' || 'A' || 'O').length
  let raceChartData = [
        { x: 'Black \n' + Math.round(black/total*100) + '%', y: black },
        { x: 'Asian \n' + Math.round(asian/total*100) + '%', y: asian },
        { x: 'Hispanic \n' + Math.round(hispanic/total*100) + '%', y: hispanic },
        { x: 'White \n' + Math.round(white/total*100) + '%', y: white }
      ]

  return(
    <div>

      <Flex wrap>

        <PieChart
          title={'Race'}
          chartData={raceChartData} 
        />

        <PieChart
          title={'Custody Level'}
          chartData={custodyChartData} 
        />
      
        </Flex>

    </div>
  ) 
}

export default Breakdown