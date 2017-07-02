import React, { Component } from "react"
import { Pie } from 'react-chartjs-2'
import ChartSelector from './ChartSelector'

class Charts extends React.Component {
constructor(props){
   super(props)

   this.selectData = this.selectData.bind(this)

   this.state= {

      chartData: {
         labels: [],
         datasets: [
            {
               label: '# of Votes',
               data: [12, 19, 3, 5, 2, 3],
               backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
               ]
            }
         ]
      }
   }
}

   componentWillMount(){
      this.selectData('userRole')
   }

   selectData = (selector) => {
      console.log('I AM SELECTOR:', selector)
      let fetchLabels = []
      let fetchData = []
      fetch(`api/${selector}`)
         .then(data => data.json())
         .then((data) => {
            for (var info of data){
               if (info.role_id) fetchLabels.push(info.role_id)
               if (info.solution_id) fetchLabels.push(info.solution_id)
               if (info.affliction_id) fetchLabels.push(info.affliction_id)
               if (info.disorder_id) fetchLabels.push(info.disorder_id)
               fetchData.push(info.count)
            }
            let stateChartData = this.state.chartData
            stateChartData.labels = fetchLabels
            stateChartData.datasets[0].data =fetchData
            this.setState({chartData: stateChartData})
         })
   }


render(){
   console.log('state', this.state);
   return (
      <div>
         <div className="GraphTitle"> Data Analytics</div>
         <ChartSelector selectData={this.selectData} />
         <div className="chart">
            <Pie
              data={this.state.chartData}
              height={400}
              width={400}
              options={{
                    maintainAspectRatio: false
                }}
             />
          </div>
       </div>
   )
}

}


export default Charts
