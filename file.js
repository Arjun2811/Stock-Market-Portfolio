const list=document.querySelector("#list");
const details=document.querySelector("#details h2");
const chart=document.querySelector("#chartarea");
const time=document.querySelectorAll(".time");

 async function getlist()
 {
    const response=await fetch("https://stock-market-api-k9vl.onrender.com/api/stocksstatsdata");
    const data=await response.json();
    console.log(data.stocksStatsData);
    console.log(data.stocksStatsData[0].AAPL.bookValue);
const stocksarr=["AAPL","MSFT","GOOGL","AMZN","PYPL","TSLA","JPM","NVDA","NFLX","DIS"];
let i=0;
while(i<stocksarr.length)
{
const card=` <div id="innerlist">
                <button id="stockname" type="submit">${stocksarr[i]}</button>
                <h5 id="profit">${data.stocksStatsData[0][stocksarr[i]].profit}</h5>
                <h5 id="bookvalue">${data.stocksStatsData[0][stocksarr[i]].bookValue}</h5>
            </div>`


list.insertAdjacentHTML("beforeend",card);


i++;
}
// Adding event listeners on button
let stockbtn=document.querySelectorAll("#stockname");
let stockarrbtn=Array.from(stockbtn);
 i=0;
while(i<stockarrbtn.length)
{
    stockarrbtn[i].addEventListener("click",stockfunct);
    i++;
}
 
async function Detailsfunct(str)
{

    const response=await fetch("https://stock-market-api-k9vl.onrender.com/api/profiledata")
    const data=await response.json();
    details.textContent=data.stocksProfileData[0][str].summary;

}
async function Chartfunct(str,timeframe)
{


const response=await fetch("https://stock-market-api-k9vl.onrender.com/api/stocksdata");
const data=await response.json();
console.log(data.stocksData[0][str][`${timeframe}`]["value"]);
const values=data.stocksData[0][str][`${timeframe}`]["value"];

const timeStamps=data.stocksData[0][str][`${timeframe}`]["timeStamp"];

// converting timestamps which was given in secondsformat in data to month&yearformat
const labels = timeStamps.map(ts =>
    new Date(ts * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    })
  );
console.log(values);
console.log(labels);



if(window.stockChartInstance)
    {
        window.stockChartInstance.destroy();
    }
    window.stockChartInstance = new Chart(chartarea, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: `${str} ${timeframe}`,
              data: values,
              tension: 0.25,
              pointRadius: 0,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              ticks: { maxTicksLimit: 5 } // avoid too many labels
            }
          }
        }
      });

}







function stockfunct()
{
    console.log(this.textContent);

Detailsfunct(this.textContent);
Chartfunct(this.textContent,"5y");
const str=this.textContent;
const timearr=Array.from(time);
let i=0;
while(i<timearr.length)
{
    timearr[i].addEventListener("click",((e)=>{

        console.log(this.textContent);
        console.log(e.currentTarget.textContent);
        Chartfunct(this.textContent,e.currentTarget.textContent);

    })
);
    i++;
}




}
 }

 getlist();

