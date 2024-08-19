 

 <script>
  import { Tabs, TabItem, ListgroupItem, Badge, Tooltip, Popover, Datepicker } from 'flowbite-svelte';
  import { Listgroup } from "flowbite-svelte";
  import { AdjustmentsHorizontalSolid, ArrowDownOutline, DownloadSolid, MessagesSolid, ShoppingBagOutline, ShoppingBagSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let placement;
  let icons = [
    // { name: 'Food', icon: UserCircleSolid },
   
    { name: 'Food',    iconify:'fluent:food-32-filled' },
      { name: 'Shopping', icon: ShoppingBagSolid },
    { name: 'Travel', iconify: "zondicons:travel-walk" },
    {name:'Entertainment',iconify:"streamline:tickets-solid"},
    {name:'Miscellaneous',iconify:"eos-icons:miscellaneous"}
  ];
var transactionData = {
  "2024-08-01": [
    { description: "PAYTM 9876543210", amount: -100, category: "Food", type: "Debit", balance: 10000 },
    { description: "UBER INVOICE 123456", amount: -50, category: "Transportation", type: "Debit", balance: 9950 },
  ],
  "2024-08-02": [
    { description: "BIG BASKET", amount: -200, category: "Shopping", type: "Debit", balance: 9750 },
    { description: "GIFT", amount: -100, category: "Miscellaneous", type: "Debit", balance: 9650 },
    { description: "MOVIE TICKET", amount: -150, category: "Entertainment", type: "Debit", balance: 9500 },
  ],
  "2024-08-03": [
    { description: "FOOD DELIVERY", amount: -120, category: "Food", type: "Debit", balance: 9380 },
  ],
  "2024-08-04": [
    { description: "PETROL PUMP", amount: -150, category: "Transportation", type: "Debit", balance: 9230 },
    { description: "ONLINE SHOPPING", amount: -250, category: "Shopping", type: "Debit", balance: 8980 },
  ],
  "2024-08-05": [
    { description: "RESTAURANT BILL", amount: -180, category: "Food", type: "Debit", balance: 8800 },
    { description: "CONCERT TICKET", amount: -200, category: "Entertainment", type: "Debit", balance: 8600 },
    { description: "GROCERY", amount: -100, category: "Shopping", type: "Debit", balance: 8500 },
  ],
  "2024-08-06": [
    { description: "CAB FARE", amount: -80, category: "Transportation", type: "Debit", balance: 8420 },
  ],
  "2024-08-07": [
    { description: "ONLINE ORDER", amount: -220, category: "Shopping", type: "Debit", balance: 8200 },
    { description: "SUBSCRIPTION", amount: -150, category: "Miscellaneous", type: "Debit", balance: 8050 },
  ],
      "2024-08-08": [
    { "description": "Grubhub order", "amount": -25, "category": "Food", "type": "Debit", "balance": 10000 },
    { "description": "Movie ticket", "amount": -15, "category": "Entertainment", "type": "Debit", "balance": 9985 },
    { "description": "Uber ride", "amount": -20, "category": "Transportation", "type": "Debit", "balance": 9965 },
    { "description": "Amazon purchase", "amount": -50, "category": "Shopping", "type": "Debit", "balance": 9915 },
    // { "description": "Savings deposit", "amount": 500, "category": "Savings", "type": "Credit", "balance": 9965 },
    { "description": "Coffee shop", "amount": -10, "category": "Food", "type": "Debit", "balance": 9955 },
    { "description": "Netflix subscription", "amount": -12, "category": "Entertainment", "type": "Debit", "balance": 9943 }
  ],"2024-08-09": [
  {
    "description": "COFFEE SHOP",
    "amount": -5.50,
    "category": "Food",
    "type": "Debit",
    "balance": 1000.00
  },
  {
    "description": "LUNCH AT BISTRO",
    "amount": -15.00,
    "category": "Food",
    "type": "Debit",
    "balance": 985.00
  },
  {
    "description": "GAS STATION",
    "amount": -30.00,
    "category": "Transportation",
    "type": "Debit",
    "balance": 955.00
  },
  // {
  //   "description": "SALARY DEPOSIT",
  //   "amount": 2000.00,
  //   "category": "Miscellaneous",
  //   "type": "Credit",
  //   "balance": 2955.00
  // }
],

"2024-08-12": [
{ description: "Coffee Shop", amount: -150, category: "Food", type: "Debit", balance: 9950 },
{ description: "Grocery Store", amount: -500, category: "Shopping", type: "Debit", balance: 9430 }
],

"2024-08-11": [
{ description: "Lunch at Restaurant", amount: -250, category: "Food", type: "Debit", balance: 10380 },
{ description: "Taxi Fare", amount: -100, category: "Transportation", type: "Debit", balance: 10280 }
],

"2024-08-10": [
{ description: "Dinner at Home", amount: -100, category: "Food", type: "Debit", balance: 11330 },
{ description: "Electronics Store", amount: -1200, category: "Shopping", type: "Debit", balance: 10080 },
{ description: "Streaming Service", amount: -100, category: "Entertainment", type: "Debit", balance: 9930 }
]


,  "2024-08-13": [
    {
      "description": "LUNCH AT CAFE",
      "amount": -12.00,
      "category": "Food",
      "type": "Debit",
      "balance": 988.00
    },
    {
      "description": "PET STORE PURCHASE",
      "amount": -15.00,
      "category": "Miscellaneous",
      "type": "Debit",
      "balance": 973.00
    },
    {
      "description": "MOVIE TICKETS",
      "amount": -20.00,
      "category": "Entertainment",
      "type": "Debit",
      "balance": 953.00
    }
  ]


,"2024-08-14": [
{
"description": "COFFEE SHOP",
"amount": -10,
"category": "Food",
"type": "Debit",
"balance": 1000
},
{
"description": "TRANSFER TO SAVINGS",
"amount": 500,
"category": "Transfer",
"type": "Credit",
"balance": 1500
},
{
"description": "ONLINE PURCHASE",
"amount": -200,
"category": "Shopping",
"type": "Debit",
"balance": 1300
}
]

,"2024-08-15": [
{ description: "GROCERY STORE", amount: -50, category: "Food", type: "Debit", balance: 10000 },
{ description: "UBER RIDE", amount: -20, category: "Travel", type: "Debit", balance: 9980 },
{ description: "MOVIE TICKET", amount: -15, category: "Entertainment", type: "Debit", balance: 9965 },
],

"2024-08-16": [
{ description: "PAYTM 9876543210", amount: -100, category: "Shopping", type: "Debit", balance: 9865 },
{ description: "COFFEE SHOP", amount: -10, category: "Food", type: "Debit", balance: 9855 },
],

"2024-08-17": [
{ description: "AMAZON ORDER", amount: -50, category: "Shopping", type: "Debit", balance: 9805 },
{ description: "PETROL PUMP", amount: -30, category: "Travel", type: "Debit", balance: 9775 },
{ description: "RESTAURANT BILL", amount: -25, category: "Food", type: "Debit", balance: 9750 },
]
,
"2024-08-18": [
{ description: "CONCERT TICKET", amount: -40, category: "Entertainment", type: "Debit", balance: 9710 },
{ description: "GIFT SHOP", amount: -20, category: "Miscellaneous", type: "Debit", balance: 9690 },
]
,
"2024-08-19": [
{ description: "SALON SERVICES", amount: -60, category: "Miscellaneous", type: "Debit", balance: 9630 },
{ description: "FOOD DELIVERY", amount: -35, category: "Food", type: "Debit", balance: 9595 },
{ description: "TAXI FARE", amount: -25, category: "Travel", type: "Debit", balance: 9570 },
]

};



   import {  Modal } from 'flowbite-svelte';
 

  import { Chart, Card, A, Button, Dropdown, DropdownItem ,Input} from 'flowbite-svelte';
  import { UsersGroupOutline, ArrowUpOutline, ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
 
var totalsByCategory={};
var listCategory= [];
var rankingList=[];
  let dataModal = false;
  var Statistics={};

   var options = {};

function generateFor90Days(startDate = new Date()) {

     options.title= {
    text: '',
    align: "center",
    offsetX: 0,
    offsetY: 5,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      color: "#333"
    }
  }
      var transactionCount=0;
  const data = [];
  const numPeriods = 3;
  listCategory = [];
rankingList=[];
  for (let i = 0; i < numPeriods; i++) {
    const periodStartDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
    const periodEndDate = new Date(startDate.getFullYear(), startDate.getMonth() + i + 1, 0);
    const periodLength = (periodEndDate.getTime() - periodStartDate.getTime()) / (1000 * 3600 * 24) + 1;

    let periodTotal = 0;
    for (let j = 0; j < periodLength; j++) {
      const dateString = new Date(periodStartDate.getTime() + j * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      periodTotal += transactionData[dateString] ? transactionData[dateString].reduce((acc, transaction) => acc + transaction.amount, 0) : 0;

      // listCategory updation goes here
      transactionData[dateString] && transactionData[dateString].forEach(transaction => {
        const existingCategory = listCategory.find(c => c.category === transaction.category);
        if (existingCategory) {
          existingCategory.value += transaction.amount;
        } else {
          listCategory.push({ category: transaction.category, value: transaction.amount });
        }
      });
    }
    data.push({ x: `Month ${i + 1}`, y: Math.abs(periodTotal) });
  }
  rankingList=[...data].sort((a,b) => Math.abs(b.y)-Math.abs(a.y));
  return data;
}




function generateForMonth(startDate = new Date()) {


     options.title= {
    text: '',
    align: "center",
    offsetX: 0,
    offsetY: 5,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      color: "#333"
    }
  }
  const daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
  const weeksInMonth = Math.ceil(daysInMonth / 7);
  const data = [];
  Statistics={};
listCategory=[];
rankingList=[];
  for (let i = 0; i < weeksInMonth; i++) {
    const weekStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), i * 7 + 1);
    const weekEndDate = new Date(startDate.getFullYear(), startDate.getMonth(), (i + 1) * 7);
    var weekTotal = 0;
   var temporaryCategory=[];
    for (let j = 0; j < 7; j++) {
     
      const dateString = new Date(weekStartDate.getTime() + j * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      weekTotal += transactionData[dateString] ? transactionData[dateString].filter(item=>item["amount"]<0).reduce((acc, transaction) => acc + transaction.amount, 0) : 0;

       transactionData[dateString] && transactionData[dateString].filter(item=>item["amount"]<0).forEach(transaction => {
  const existingCategory = listCategory.find(c => c.category === transaction.category);
  if (existingCategory) {
    existingCategory.value += transaction.amount;
 
  } else {
    listCategory.push({ category: transaction.category, value: transaction.amount });
 
  }
      temporaryCategory.push({ category: transaction.category, value: transaction.amount })

      transactionCount+=1;
});

    }
    console.log(temporaryCategory);
 
    data.push({ x: `Week ${i + 1}`, y: Math.abs(weekTotal) });
    rankingList.push({
  x: `Week ${i + 1}`,
  y: Math.abs(weekTotal),
  highlight: temporaryCategory && temporaryCategory.length > 0
    ? temporaryCategory.reduce((max, current) => {
        return current.value > max.value ? current : max;
      }, temporaryCategory[0]).category
    : ""
})

  }
  console.log(listCategory);

 rankingList.sort((a,b) => Math.abs(b.y)-Math.abs(a.y));
 
Statistics.pastWeek = { totalAmount: pastWeekTotal };
Statistics.currentWeek = { totalAmount: currentWeekTotal, transactionCount: transactionCount };
  return data;
}


 function generateForWeek() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const dayOfWeek = today.getDay();
  const data = [];
    totalsByCategory = {};
    listCategory= [];
    rankingList=[];
    Statistics={};
    var transactionCount=0;

    options.title= {
    text: '',
    align: "center",
    offsetX: 0,
    offsetY: 5,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      color: "#333"
    }
  }

  // if(ChartSelected!=="Pie" && ChartSelected!=="Line" && ChartSelected!=="Area"){
  var currentWeekTotal=0;
     for (let i = 1; i <= 7; i++) {
    const dayIndex = (dayOfWeek - i + 7) % 7;
    const day = days[dayIndex];
    const dateString = new Date(today.getTime() - (i - 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    if (transactionData[dateString]) {
      totalsByCategory[dateString] = {};

      transactionData[dateString].forEach((transaction) => {
        // Only consider categories with negative amounts
        if (transaction.amount < 0) {
          totalsByCategory[dateString][transaction.category] = (totalsByCategory[dateString][transaction.category] || 0) + transaction.amount;

          transactionCount+=1;

          

        }
      });

      
    }
 

 

    const total = transactionData[dateString]
      ? transactionData[dateString].filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0)
      : 0;
    rankingList.push({
  x: dateString,
  y: Math.abs(total),
  highlight: totalsByCategory[dateString]?Object.keys(totalsByCategory[dateString]).length > 0
    ? Object.keys(totalsByCategory[dateString]).reduce((a, b) => Math.abs(totalsByCategory[dateString][a]) < Math.abs(totalsByCategory[dateString][b]) ? b : a)
    : "":""
})
currentWeekTotal+=total;



    data.push({ x: dateString, y: Math.abs(total) });
  } 


  // }

    for (let date in totalsByCategory) {
    for (let category in totalsByCategory[date]) {
      let existingCategory = listCategory.find(item => item.category === category);
      if (existingCategory) {
        existingCategory.value += totalsByCategory[date][category];
      } else {
        listCategory.push({ category, value: totalsByCategory[date][category] });
      }
    }
  }
var pastWeekTotal =  0;
var pastWeekData=[]
for (let i = 8; i <= 14; i++) {
  const dayIndex = (dayOfWeek - i + 7) % 7;
  const day = days[dayIndex];
  const dateString = new Date(today.getTime() - (i - 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  // ... calculate the total for the past week's day
   const total = transactionData[dateString]
      ? transactionData[dateString].filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0)
      : 0;
  pastWeekTotal+=total;

  pastWeekData.push({ x: dateString, y: Math.abs(total) });
}
 
data.forEach((item,index)=>item.goals= [
                  {
                    name: 'Past',
                    value: pastWeekData[index].y,
                    strokeHeight: 3,
                    strokeColor: '#775DD0'
                  }
                ]);
Statistics.pastWeek = { totalAmount: pastWeekTotal };
Statistics.currentWeek = { totalAmount: currentWeekTotal, transactionCount: transactionCount };


  
rankingList.sort((a,b) => Math.abs(b.y)-Math.abs(a.y));


 
  return data.reverse();
}



function getCurrentDayDataArray( particularDate) {
var today ;
var dateString =particularDate || new Date().toISOString().split('T')[0];;
Statistics={};
 
var currentDayTotal=0;
var transactionCount=0;
  const transactions = transactionData[dateString] || [];
  const data = transactions.filter(item=>item["amount"]<0).reduce((acc, transaction) => {
    const existingCategory = acc.find(item => item.x === transaction.category);
    if (existingCategory) {
      existingCategory.y += transaction.amount;
    } else {
      acc.push({ x: transaction.category, y: transaction.amount });
    }
    transactionCount+=1;
    currentDayTotal+=transaction.amount;
    return acc;
  }, []);

 
 var pastDateString = new Date(dateString);
  pastDateString.setDate(pastDateString.getDate() - 1);
  pastDateString = pastDateString.toISOString().split("T")[0];
  const pastDayTransactions = transactionData[pastDateString] || [];
  const pastDayTotal = pastDayTransactions.filter(item=>item["amount"]<0).reduce(
    (sum, item) => sum + item.amount,
    0
  );

  var pastDayData=pastDayTransactions.filter(item=>item["amount"]<0).reduce((acc, transaction) => {
    const existingCategory = acc.find(item => item.x === transaction.category);
    if (existingCategory) {
      existingCategory.y += transaction.amount;
    } else {
      acc.push({ x: transaction.category, y: transaction.amount });
    }
 
    return acc;
  }, []);
  console.log(pastDayData);


 
Statistics.pastDay = { totalAmount: pastDayTotal };
Statistics.currentDay = { totalAmount: currentDayTotal, transactionCount: transactionCount };

listCategory=data.map(item=>({category:item.x,value:item.y}));
 

data.forEach((currentItem) => {
  const pastItem = pastDayData.find((pastItem) => pastItem.x === currentItem.x);
  if (pastItem) {
    currentItem.goals= [
                  {
                    name: 'Past',
                    value:   pastItem.y ,
                    strokeHeight: 3,
                    strokeColor: '#775DD0'
                  }
                ]
  }
});
console.log(data);
options.title= {
    text: dateString,
    align: "center",
    offsetX: 0,
    offsetY: 5,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      color: "#333"
    }
  }


  return data.map(item => ({ x: item.x, y: Math.abs(item.y) }));
}

 





function getYesterdayDataArray( ) {
  Statistics={};
  var currentDayTotal=0;
var transactionCount=0;
  const yesterday = new Date(Date.now() - 86400000); // 86400000 = 24 hours in milliseconds
  const dateString = yesterday.toISOString().split('T')[0];
  const transactions = transactionData[dateString] || [];
  const data = transactions.filter(item=>item["amount"]<0).reduce((acc, transaction) => {
    const existingCategory = acc.find(item => item.x === transaction.category);
    if (existingCategory) {
      existingCategory.y += transaction.amount;
    } else {
      acc.push({ x: transaction.category, y: transaction.amount });
    }
        transactionCount+=1;
    currentDayTotal+=transaction.amount;
    return acc;
  }, []);


   
 var pastDateString = new Date(dateString);
  pastDateString.setDate(pastDateString.getDate() - 1);
  pastDateString = pastDateString.toISOString().split("T")[0];
  const pastDayTransactions = transactionData[pastDateString] || [];
  const pastDayTotal = pastDayTransactions.filter(item=>item["amount"]<0).reduce(
    (sum, item) => sum + item.amount,
    0
  );

 
Statistics.pastDay = { totalAmount: pastDayTotal };
Statistics.currentDay = { totalAmount: currentDayTotal, transactionCount: transactionCount };


options.title= {
    text: dateString,
    align: "center",
    offsetX: 0,
    offsetY: 5,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Inter, sans-serif",
      color: "#333"
    }
  }

 listCategory=data.map(item=>({category:item.x,value:item.y}));
  return data.map(item => ({ x: item.x, y: Math.abs(item.y) }));
}



 


   

   let selectedPeriod = 'Last 7 days';

var periodStats ;
var  pastPeriodStats;

  
 

  function handlePeriodChange(args,dateSelected) {
      dropdownOpen = false;
      PeriodSelected=args;


       if ( args === 'custom' && dateSelected !== 'dateSelected') {
  
  // options.series[0].data =  getCustomDayDataArray();
  dataModal=true;
}

  if ( args === 'custom' && dateSelected === 'dateSelected') {
   dataModal=false;
     options.series[0].data =  getCurrentDayDataArray(document.getElementById("customRange").value);
  // options.series[0].data =  getCustomDayDataArray();
   periodStats=Statistics.currentDay;
   pastPeriodStats=Statistics.pastDay;
   calculateTrend();
}
 
   if (args === 'Yesterday') {
    options.series[0].data = getYesterdayDataArray();
  // ...
  periodStats=Statistics.currentDay;
   pastPeriodStats=Statistics.pastDay;
   calculateTrend();
}
  if (args === 'Today') {
  
  options.series[0].data =  getCurrentDayDataArray();
  periodStats=Statistics.currentDay;
  pastPeriodStats=Statistics.pastDay;
  calculateTrend();
}
 

 if (args === 'Last 7 days') {
  

  if(ChartSelected==="Pie"){
//  options.series =   generateForWeek().map(item=>item.x);
//   options.labels=generateForWeek().map(item=>item.y);
 
  } 
  else{
     options.series[0].data =   generateForWeek();
        periodStats = Statistics.currentWeek;
      pastPeriodStats=Statistics.pastWeek;
      calculateTrend();
  }
  // ...
} 
 if (args === 'Last 30 days') {
  options.series[0].data =   generateForMonth();
  
  // ...
}    
 if (args === 'Last 90 days') {
  options.series[0].data =   generateFor90Days();
  // ...
}  

 
 

 

    // Update the chart with the new options
    // chart.config.options = options;
    // chart.update();
  }


var ChartSelected="";
 

 var  PeriodSelected= "Last 7 days";
var dropdownOpen=false;
var dropdownToggle=false;

 function toggleCharts(type){
 dropdownToggle=false;
if(type==="StartChart"){
 
type="Column";
ChartSelected="Column";
} 
else{
   
  ChartSelected=type;
}
 options={};

if(type==="Column"){
  options= {
     
 
 
    colors: [  '#FDBA8C'],
    series: [
    
      {
        name: 'Current',
        color: '#FDBA8C',
        data:  generateForWeek()
      }
    ],
    chart: {
      type: 'bar',
      height: '320px',
      width:"100%",
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: true
      },
      events: {
        click: function(event, chartContext, config) {

          // console.log(config.dataPointIndex);
          // console.log(options.series[0].data);

          // dataModal=true;
 

        },
     


        
      }

      
      
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        borderRadiusApplication: 'end',
        borderRadius: 8
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: 'Inter, sans-serif'
      },
  //       formatter: function() {
  //         console.log(totalsByCategory);
  //   const dateString = this.x;
  //   const categories = totalsByCategory[dateString];
  //   let tooltipContent = `<span style="font-weight: bold">${dateString}</span><br>`;
  //   for (const category in categories) {
  //     tooltipContent += `Category: ${category}<br>Total: ${categories[category]}<br>`;
  //   }
  //   return tooltipContent;
  // }
 




    

    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1
        }
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    grid: {
      show: true,
      strokeDashArray: 1,
      padding: {
        left: 5,
        right: 5,
        top: -14
      }
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      show: true,position: 'top',      showForSingleSeries: true,
          customLegendItems: ['Current', 'Past'],
          markers: {
            fillColors: ['#FDBA8C', '#775DD0']
          }
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      }
    },
    yaxis: {
      show: true
    },
    fill: {
      opacity: 1
    }
  };

  periodStats=Statistics.currentWeek;
pastPeriodStats=Statistics.pastWeek;
calculateTrend();

}

if(type==="Bar"){
options = {
          series: [
          {
            name: 'Total',
            data:   generateForWeek()
          }
        ],
          chart: {
          height: 320,
          type: 'bar',width:"100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
         show: true,
          // formatter: function(val, opt) {
          //   const goals =
          //     opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          //       .goals
        
          //   if (goals && goals.length) {
          //     return `${val} / ${goals[0].value}`
          //   }
          //   return val
          // }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
        };

}
if(type==="Pie"){
  
 
     options = {
    series:  generateForWeek().map(item=>item.y),
        colors: ['#fdba8c', '#FDBA8C',"#fdba8c","#fdba8c","#fdba8c","#fdba8c","#fdba8c"],
    chart: {
      height: 350, width:"100%",
    
      type: 'pie'
    },
    stroke: {
      colors: ['white'],
      lineCap: ''
    },
    plotOptions: {
      pie: {
        labels: {
          show: true
        },
        size: '100%',
        dataLabels: {
          offset: -25
        }
      }
    },
    labels: generateForWeek().map(item=>item.x),
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    legend: {
      position: 'bottom',
      fontFamily: 'Inter, sans-serif'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      }
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    }
  };
}
if(type==="Line"){
 options = {
    chart: {
      height: '320px',
      maxWidth: '100%',
      type: 'line',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6,
      curve: 'smooth'
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      }
    },
    series: [
      {
        name: 'Clicks',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB'
      },
      {
        name: 'CPC',
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: '#7E3AF2'
      }
    ],
    legend: {
      show: false
    },
    xaxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
}
if(type==="Area"){

  options = {
    chart: {
      height: '320px',
      width:"100%",
      maxWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2']
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0
      }
    },
    series: [
      {
        name: 'New users',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB'
      }
    ],
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
    
}

}
toggleCharts("StartChart");


 
var trend;

function calculateTrend() {
 
 
  const pastTotal = pastPeriodStats.totalAmount;
  const currentTotal = periodStats.totalAmount;
  const difference = currentTotal - pastTotal;
  const percentageDifference = (difference / pastTotal) * 100;
 
  if (percentageDifference > 0) {
    trend = { result: 'increased', percentage: percentageDifference.toFixed(2) };
  } else if (percentageDifference < 0) {
    trend = { result: 'decreased', percentage: Math.abs(percentageDifference).toFixed(2) };
  } else {
    trend = { result: 'same', percentage: 0 };
  }
 
}



</script>

<svelte:head>
	<title>PE | Dashboard</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex w-full h-full gap-x-2">
<Modal title="Pick a date or a range" bind:open={dataModal} autoclose >
 <form  on:submit={ () =>  handlePeriodChange("custom","dateSelected")}>
 
  

   <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <!-- <Label for="first_name" class="mb-2">First name</Label> -->
         <Input type="date" name="customDateForChart" id="customRange" required />
    </div>
    <div>
      <!-- <Label for="last_name" class="mb-2">Last name</Label> -->
        <Input type="submit"  value="Confirm" />
    </div>
  </div>
</form>

   
   
   
  <svelte:fragment slot="footer">
    
    <!-- <Button color="alternative">Decline</Button> -->
  </svelte:fragment>
</Modal>
<div class="chart flex-col h-full   w-2/3">
<Card  size="xl" class="  h-full" >
 
  <div class="flex  justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center">
      <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
	<defs>
		<filter id="svgSpinnersGooeyBalls20">
			<feGaussianBlur in="SourceGraphic" result="y" stdDeviation={1}></feGaussianBlur>
			<feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"></feColorMatrix>
			<feBlend in="SourceGraphic" in2="z"></feBlend>
		</filter>
	</defs>
	<g filter="url(#svgSpinnersGooeyBalls20)">
		<circle cx={5} cy={12} r={4} fill="#5ebc67">
			<animate attributeName="cx" calcMode="spline" dur="30s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5"></animate>
		</circle>
		<circle cx={19} cy={12} r={4} fill="#5ebc67">
			<animate attributeName="cx" calcMode="spline" dur="30s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19"></animate>
		</circle>
		<animateTransform attributeName="transform" dur="3.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
	</g>
</svg>
      </div>
      <div>
        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"> {periodStats?periodStats.transactionCount:""}</h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Transactions per week</p>
      </div>
    </div>
    <div>
      <Tooltip triggeredBy=".trendChange" placement="left" trigger="hover" color="green" class="bg-white text-inherit">Compared to past period</Tooltip>
<div class="trendChange"> {#if options.series[0].data}
        

  {#if  trend.result==="increased"}
 
    <span class="   bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
      <ArrowUpOutline class="w-2.5 h-2.5 me-1.5" />
       {trend.percentage}%
    </span>
  {:else if trend.result==="decreased"}
   
    <span class="   bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-yellow-900 dark:text-yellow-300">
      <ArrowDownOutline class="w-2.5 h-2.5 me-1.5" />
      {trend.percentage}%
    </span>
  {:else}
  
    <span class="   bg-gray-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-red-900 dark:text-red-300">
       <Icon icon="pepicons-pencil:line-x" width="0.625rem" height="0.625rem"  style="color: #5ebc67" />
       
    </span>
  {/if}
{/if}</div>




     
    </div>
  </div>
  <div class="grid grid-cols-2">
    <dl class="flex items-center">
      <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Money spent:</dt>
      <dd class="text-gray-900 text-sm dark:text-white font-semibold">&#8377; { options.series[0].data?options.series[0].data.map(item=>item.y).reduce((accumulator,initialValue)=>accumulator+initialValue,0):""} </dd>
    </dl>
    <dl class="flex items-center justify-end">
      <!-- <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Conversion rate:</dt> -->
      <dd class="text-gray-900 text-sm dark:text-white font-semibold"> </dd>
    </dl>
  </div>
  <Chart   {options}      />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">{PeriodSelected}<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6" bind:open={dropdownOpen} >
          <DropdownItem on:click={(event) => handlePeriodChange("Today")} >Today</DropdownItem>
        <DropdownItem on:click={(event) => handlePeriodChange("Yesterday")} >Yesterday</DropdownItem>
     
        <DropdownItem on:click={(event) => handlePeriodChange("Last 7 days")}>Last 7 days</DropdownItem>
        <DropdownItem on:click={(event) => handlePeriodChange("Last 30 days")}>Last 30 days</DropdownItem>
        <DropdownItem on:click={(event) => handlePeriodChange("Last 90 days")}>Last 90 days</DropdownItem>
         <DropdownItem on:click={(event) => handlePeriodChange("custom")} id="datePicker">Custom...</DropdownItem>
          
          <!-- <Popover  class="w-64 text-sm font-light " title="Popover title" triggeredBy="#datePicker" trigger="hover" transition={slide} on:mouseenter={() => (placement = 'right')}> <Datepicker datepickerButtons /></Popover> -->
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Leads Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>

	 <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">{ChartSelected}<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6" bind:open={dropdownToggle}>
       <DropdownItem on:click={(event) => toggleCharts("Column")}>Column</DropdownItem>
        <DropdownItem on:click={(event) => toggleCharts("Bar")}>Bar</DropdownItem>
        <DropdownItem  on:click={(event) => toggleCharts("Pie")}>Pie</DropdownItem>
        <DropdownItem  on:click={(event) => toggleCharts("Line")}>Line</DropdownItem>
        <DropdownItem  on:click={(event) => toggleCharts("Area")}>Area</DropdownItem>

         
      </Dropdown>
      <!-- <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Leads Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A> -->
    </div>
  </div>
</Card>
</div>
<div class="details flex  flex-col     w-1/3">
<Card  size="xl" class="    h-full" >
 <h3 class="text-gray-900 w-fit text-lg font-semibold dark:text-white">Statistics  - {PeriodSelected}</h3>
 <Tabs  tabStyle="underline"  contentClass="p-0   rounded-lg   mt-4  h-full flex flex-col contentDiv flex flex-col">
  <TabItem open title="Statistics"     >
 
 <p class="text-base font-semibold mb-2">Breakdown per Category</p>
 
       <Listgroup   class="w-full  scrollableList "   >
       
{#each listCategory.sort((a, b) => Math.abs(b.value) - Math.abs(a.value)) as item, index}
<ListgroupItem class={`text-gray-800 gap-1 ${index === 0 ? 'bg-[#fdba8c]' : index === 1 ? 'bg-[#ffd5b1]' : index === 2 ? 'bg-[#fff2e6]' : ''}`} >


    <div class="flex justify-between justify-center items-center" >
      <div>{item.category}</div>
      <div>&#8377; {Math.abs(item.value)}</div>
    </div>
  </ListgroupItem>
{/each}
 

 
</Listgroup>
    
  </TabItem>
  <TabItem title="Ranking" contentClass="p-0 bg-gray-50 rounded-lg dark:bg-gray-800 mt-0">
      <!-- <p class="text-base font-semibold mb-2"> per Category</p> -->
        <Tooltip triggeredBy="#highlight" placement="bottom" trigger="hover" color="green" class="bg-white text-inherit">Observed Biggest Expend <Icon icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" width="1.2rem" height="1.2rem"  class="inline" style="color: #5ebc67" /></Tooltip>
       <Listgroup   class="  scrollableList  "     >
 
{#each  rankingList as item, index}
<ListgroupItem class={`text-gray-800 gap-1  `} >

    <div class="flex justify-between justify-center items-center">
      <div class=""><p class="truncate font-medium text-gray-900 dark:text-white   mb-1">{item.x}</p>
   
   
{#if item.highlight}
    <Badge rounded color="green" class="text-gray-500 mb-1 cursor-pointer" id="highlight">{item.highlight}</Badge>
 
 
  
{/if}

     
         
      </div>
      <div>&#8377; {item.y}</div>
    </div>
  </ListgroupItem>
{/each}
 

 
</Listgroup>
  </TabItem>
  
   
</Tabs>

 
 
 
</Card>
   
</div>
 
  
	<!-- <Counter /> -->
</div>