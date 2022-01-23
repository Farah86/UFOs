// import the data from data.js
const tableData = data;
// Reference the HTML table using d3(D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.)
var tbody = d3.select("tbody");

  function buildTable(data) {
//first ,clear out any existing data
    tbody.html("");
//forEach function that loops through our data array, and then adds rows of data to the table(using arrow function)
data.forEach((dataRow) => {


//added an argument (dataRow) that will represent each row of the data as we iterate through the array
let row = tbody.append("tr");
//set up another function within our original function for the forEach loop.
Object.values(dataRow).forEach((val) => {

//create a variable to append data to a HTML table
let cell = row.append("td");
// add the values from the object into a cell
cell.text(val);
    }
  );
 });
}
// in here telling D3 to look for the #datetime id in the HTML tags 
function handleClick() {
  let date = d3.select("#datetime").property("value");
  //This is the original data as imported from our data.js file
  //setting the filteredData variable to our raw data, we're basically using it as a blank slate
  let filteredData = tableData;
  //If there is a date already set, then use that date as a filter. If not, then return the default data
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
};
//call the buildtable function
// Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};
//ied to the filter button we'll build on our webpage
//we're linking our code directly to the filter button
//we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
//call our buildTable function once more—this time using the original data we've imported
buildTable(tableData);












