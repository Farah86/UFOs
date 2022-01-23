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
