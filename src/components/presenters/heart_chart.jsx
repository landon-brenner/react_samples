import React, { Component } from 'react';
import moment from 'moment';

// Mui Core imports
import Grid from '@material-ui/core/Grid';

// recharts imports
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import AreaChart from 'recharts/lib/chart/AreaChart';
import Area from 'recharts/lib/cartesian/Area';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';

// import some fixed data to visualize in lieu of API
import { heartRate } from '../../dummy_data/hr';

class HeartChart extends Component {

  // Use moment to format dates and times from ISO strings
  formatXAxis = tickItem => {
    return moment(tickItem).format('M/D H:mm')
  }

  formatLabel = tickItem => {
    return moment(tickItem).format('MMM D h:mma')
  }

  render() {
    return (
      <>
        <Grid container>
          <ResponsiveContainer width="99%" height={320}>
            <AreaChart data={heartRate}>
              <defs>
                <linearGradient id="colorHeartrate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="timestamp" tickFormatter={this.formatXAxis}/>
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip labelFormatter={this.formatLabel}/>
              <Area
                type="monotone"
                dataKey="data"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorHeartrate)"
                activeDot={{ r: 8 }}
                name="Heartrate"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
      </>
    );
  }
}

export default HeartChart;
