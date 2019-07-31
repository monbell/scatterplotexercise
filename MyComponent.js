import React, { PureComponent } from 'react';
import DataTable from 'react-data-table-component';
import loanData from './loanData';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Plotly from 'react-plotly.js';

const data = loanData;
const columns = [ // dropdown menu items
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Loan Amount',
    selector: 'loan_amnt',
    sortable: true,
  },
  {
    name: 'Int Rate',
    selector: 'int_rate',
    sortable: true,
  },
  {
    name: 'Annual Inc',
    selector: 'annual_inc',
    sortable: true,
  },
  {
    name: 'DTI',
    selector: 'dti',
    sortable: true,
  },
  {
    name: 'Delinq 2 Years',
    selector: 'delinq_2yrs',
    sortable: true,
  },
  {
    name: 'Fico Range Low',
    selector: 'fico_range_low',
    sortable: true,
  },
  {
    name: 'Fico Range High',
    selector: 'fico_range_high',
    sortable: true,
  },
  {
    name: 'Inq Last 6 Months',
    selector: 'inq_last_6mths',
    sortable: true,
  },
  {
    name: 'Months Since Last Delinq',
    selector: 'mths_since_last_delinq',
    sortable: true,
  },
  {
    name: 'Open Acc',
    selector: 'open_acc',
    sortable: true,
  },
  {
    name: 'Pub Rec',
    selector: 'pub_rec',
    sortable: true,
  },
  {
    name: 'Revol Bal',
    selector: 'revol_bal',
    sortable: true,
  },
  {
    name: 'Revol Util',
    selector: 'revol_util',
    sortable: true,
  },
  {
    name: 'Total Acc',
    selector: 'total_acc',
    sortable: true,
  },
  {
    name: 'Total Payment',
    selector: 'total_pymnt',
    sortable: true,
  },
  {
    name: 'Total Rec Prncp',
    selector: 'total_rec_prncp',
    sortable: true,
  },
  {
    name: 'Total Rec Int',
    selector: 'total_rec_int',
    sortable: true,
  },
  {
    name: 'Total Rec Late Fee',
    selector: 'total_rec_late_fee',
    sortable: true,
  },
  {
    name: 'Collections 12 Months Ex Med',
    selector: 'collections_12_mths_ex_med',
    sortable: true,
  },
  {
    name: 'Months Since Last Major Derog',
    selector: 'mths_since_last_major_derog',
    sortable: true,
  },
  {
    name: 'Acc Now Delinq',
    selector: 'acc_now_delinq',
    sortable: true,
  },
  {
    name: 'Tot Coll Amt',
    selector: 'tot_coll_amt',
    sortable: true,
  },
  {
    name: 'Tot Cur Bal',
    selector: 'tot_cur_bal',
    sortable: true,
  },
  {
    name: 'Total Rev Hi Lim',
    selector: 'total_rev_hi_lim',
    sortable: true,
  },
  {
    name: 'Acc Open Past 24 Months',
    selector: 'acc_open_past_24mths',
    sortable: true,
  },
  {
    name: 'Avg Cur Bal',
    selector: 'avg_cur_bal',
    sortable: true,
  },
  {
    name: 'BC Open to Buy',
    selector: 'bc_open_to_buy',
    sortable: true,
  },
  {
    name: 'BC Util',
    selector: 'bc_util',
    sortable: true,
  },
  {
    name: 'Chargeoff Within 12 Months',
    selector: 'chargeoff_within_12_mths',
    sortable: true,
  },
  {
    name: 'Delinq Amnt',
    selector: 'delinq_amnt',
    sortable: true,
  },
  {
    name: 'Mo Sun Old Rev TL OP',
    selector: 'mo_sin_old_rev_tl_op',
    sortable: true,
  },
  {
    name: 'Mo Sin Rcnt TL OP',
    selector: 'mo_sin_rcnt_rev_tl_op',
    sortable: true,
  },
  {
    name: 'Mo Sin Rcnt TL',
    selector: 'mo_sin_rcnt_tl',
    sortable: true,
  },
  {
    name: 'Mort Acc',
    selector: 'mort_acc',
    sortable: true,
  },
  {
    name: 'Months Since Recent BC',
    selector: 'mths_since_recent_bc',
    sortable: true,
  },
  {
    name: 'Months Since Recent Inq',
    selector: 'mths_since_recent_inq',
    sortable: true,
  },
  {
    name: 'Months Since Recent Revol Delinq',
    selector: 'mths_since_recent_revol_delinq',
    sortable: true,
  },
  {
    name: 'Num Accts Ever 120 PD',
    selector: 'num_accts_ever_120_pd',
    sortable: true,
  },
  {
    name: 'Num Actv BC TL',
    selector: 'num_actv_bc_tl',
    sortable: true,
  },
  {
    name: 'Num Actv Rev TL',
    selector: 'num_actv_rev_tl',
    sortable: true,
  },
  {
    name: 'Num BC Sats',
    selector: 'num_bc_sats',
    sortable: true,
  },
  {
    name: 'Num BC TL',
    selector: 'num_bc_tl',
    sortable: true,
  },
  {
    name: 'Num IL TL',
    selector: 'num_il_tl',
    sortable: true,
  },
  {
    name: 'Num OP Rev TL',
    selector: 'num_op_rev_tl',
    sortable: true,
  },
  {
    name: 'Num Rev Accts',
    selector: 'num_rev_accts',
    sortable: true,
  },
  {
    name: 'Num Rev TL Bal GT 0',
    selector: 'num_rev_tl_bal_gt_0',
    sortable: true,
  },
  {
    name: 'Num Sats',
    selector: 'num_sats',
    sortable: true,
  },
  {
    name: 'Num TL 120DPD 2M',
    selector: 'num_tl_120dpd_2m',
    sortable: true,
  },
  {
    name: 'Num TL 30DPD',
    selector: 'num_tl_30dpd',
    sortable: true,
  },
  {
    name: 'Num TL 90G DPD 24M',
    selector: 'num_tl_90g_dpd_24m',
    sortable: true,
  },
  {
    name: 'Num TL OP Past 12M',
    selector: 'num_tl_op_past_12m',
    sortable: true,
  },
  {
    name: 'PCT TL NVR DLQ',
    selector: 'pct_tl_nvr_dlq',
    sortable: true,
  },
  {
    name: 'Pub Rec Bankruptcies',
    selector: 'pub_rec_bankruptcies',
    sortable: true,
  },
  {
    name: 'Tax Liens',
    selector: 'tax_liens',
    sortable: true,
  },
  {
    name: 'Tot Hi Cred Lim',
    selector: 'tot_hi_cred_lim',
    sortable: true,
  },
  {
    name: 'Total Bal Ex Mort',
    selector: 'total_bal_ex_mort',
    sortable: true,
  },
  {
    name: 'Total BC Limit',
    selector: 'total_bc_limit',
    sortable: true,
  },
  {
    name: 'Total IL High Credit Limit',
    selector: 'total_il_high_credit_limit',
    sortable: true,
  },
  {
    name: 'Disbursement Method',
    selector: 'disbursement_method',
    sortable: true,
  },
  {
    name: 'Zip Code Prefix',
    selector: 'zip_code_prefix',
    sortable: true,
  }
];

var dashboardXData = [,];
var dashboardYData = [,];

const cols = [];
var i;
for(i = 0; i < columns.length; i++) {
  cols.push(columns[i].name)
};
/*
const defaultOption = columns[0];

const handleChange = (state) => {
  console.log('Selected Rows: ', state.selectedRows);
  scatterOne = state.selectedRows[state.selectedRows.length - 1];
  if(state.selectedRows.length == 2)
    scatterTwo = state.selectedRows[0];
  if(state.selectedRows.length >= 2)
    state.selectedRows.shift();
};

const handleClearRows = () => {
  this.setState({ toggledClearRows: !this.state.toggledClearRows})
}*/
 
class MyComponent extends PureComponent {

  constructor(props) {
    super(props)
    this.state = { columns: [] };
  }

  handleChange(e) { // first dropdown
    this.setState({ value: e })
    console.log(e)
  }

  handleChange2(e) { // second dropdown
    this.setState({ value2: e })
    console.log(e)
  }

  clicked(value, value2) { // when "Make Scatterplot" button is clicked
    console.log('height', window.innerHeight)
    console.log('width', window.innerWidth)
    console.log(value.label);
    console.log(value2.label);
    console.log(cols[0]);

    var i;
    var keyword;
    for(i = 0; i < cols.length; i++)
    {
      if(value.label == cols[i])
      {
        keyword = columns[i].selector;
      }
    }
    console.log(keyword);

    var keyword2;
    for(i = 0; i < cols.length; i++)
    {
      if(value2.label == cols[i])
      {
        keyword2 = columns[i].selector;
      }
    }
    console.log(keyword2);

    var xData = [];
    for(i = 0; i < data.length; i++) {
      xData.push(data[i][keyword])
    };
    console.log(xData);

    dashboardXData.push(xData);
    //console.log('dashboardXData', dashboardXData);

    var yData = [];
    for(i = 0; i < data.length; i++) {
      yData.push(data[i][keyword2])
    };
    console.log(yData);

    dashboardYData.push(yData);

    var graphData = {
      x: xData,
      y: yData,
      mode: 'markers',
      type: 'scatter',
    };

    var layout = {
      autosize: false,
      width: 600,
      height: 600,
      margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
      }
   };

    var plotData = [graphData];
    var Plotly = require('plotly.js');

    Plotly.newPlot('root', plotData, layout)

    window.onresize = function() {
      Plotly.relayout('root', {
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    console.log('button clicked!');
  }

  showDash() { // when "Dashboard" button is clicked
    var graphData;
    var plotData;
    var Plotly = require('plotly.js');
    var i;
    console.log(dashboardXData);
    console.log(dashboardYData);
    var plotData = [];
    for(i = 0; i < dashboardXData.length; i++)
    {
      graphData = {
        x: dashboardXData[i],
        y: dashboardYData[i],
        xaxis: 'x' + i,
        yaxis: 'y' + i,
        mode: 'markers',
        type: 'scatter'
      };
      plotData.push(graphData);
      console.log('plotData', plotData);
    }

    var widthSize = parseInt(window.innerHeight/200);
    var heightSize = parseInt(window.innerHeight/200);

    console.log(widthSize)
    console.log(heightSize)

    var layout = {
      grid: {rows: heightSize, columns: widthSize, pattern: 'independent'},
      autosize: false,
      width: 1000,
      height: 1000,
      margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 4
      }
    };

    Plotly.newPlot('root', plotData, layout)

    window.onresize = function() {
      Plotly.relayout('root', {
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }

  render() { 
    return (
      <div>
        <h1> Hello, Fiddler. 👋</h1>
        <h2>
          choose two variables to compare from the dropdown menus below:
        </h2>
        <Dropdown // first dropdown menu
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          options = {cols}
        />

        <Dropdown // second dropdown menu
          value={this.state.value2}
          onChange={this.handleChange2.bind(this)}
          options = {cols}
        />
        
        <button onClick={ (e) => this.clicked(this.state.value, this.state.value2)}> 
            Make Scatterplot
        </button>

        <button onClick={ (e) => this.showDash() }>
            Dashboard
        </button>
      </div>
    )
  }
};

export default MyComponent;