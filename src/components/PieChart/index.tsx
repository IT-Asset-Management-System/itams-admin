import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];

const Root = (props: any) => (
  <Legend.Root
    {...props}
    sx={{
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  />
);
const Item = (props: any) => (
  <Legend.Item sx={{ maxWidth: '120px' }} {...props} />
);
const Label = (props: any) => (
  <Legend.Label {...props} sx={{ whiteSpace: 'wrap' }} />
);

export default function PieChart() {
  return (
    <Paper>
      <Chart data={data}>
        <PieSeries valueField="area" argumentField="country" />
        <Title text="Area of Countries" />
        <Legend
          position="bottom"
          rootComponent={Root}
          itemComponent={Item}
          labelComponent={Label}
        />
        <Animation />
      </Chart>
    </Paper>
  );
}
