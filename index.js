const placesInput = document.querySelector('#places')
const speciesInput = document.querySelector('#species')
const button = document.querySelector('#btn-generate')
const tableContainer = document.querySelector('#table-container')
const task1 = document.querySelector('#task-1')
const task2 = document.querySelector('#task-2')
const task3 = document.querySelector('#task-3')
const task4 = document.querySelector('#task-4')
const task5 = document.querySelector('#task-5')

let matrix = []

button.addEventListener('click', onGenerate)
function onGenerate(e) {
  const n = placesInput.valueAsNumber
  const m = speciesInput.valueAsNumber

  matrix = generateMatrix(n, m)
  console.log(matrix);

  tableCreate(matrix, n, m);
  document.getElementById("task-1").innerHTML = "No";
  document.getElementById("task-2").innerHTML = count;
  document.getElementById("task-3").innerHTML = "1";
}

function generateMatrix(n, m) {
  const matrix = []
  for(let i = 0; i<n; i++) {
    const row = []
    for(let j = 0; j<m; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  return matrix
}

function tableCreate(matrix, n, m){
  var body = document.body,
      tbl  = document.createElement('table');
  tbl.style.width  = '100px';
  tbl.style.border = '1px solid black';
  tbl.id = "myTable";
  tbl.addEventListener('click', cellClick);

  for(var i = 0; i < n; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < m; j++){
        
        let td = tr.insertCell();
        let adat = matrix[i][j];
        console.log(adat);

        td.style.border = '1px solid black';
        td.innerHTML = `${adat}`;
      }
  }

  let containerr = document.getElementById("table-container");
  containerr.appendChild(tbl);
}

function cellClick(e)
{   
  if(e.target.matches('td'))
  {
    let x = e.target.parentElement.rowIndex;
    let y = e.target.cellIndex;

    let num = e.target.innerHTML;
    let convert = parseInt(num);
    convert += 1;
    matrix[x][y] = convert;
    e.target.innerHTML = convert;
    console.log("(",x+1,",",y+1,")");
  }
  const n = placesInput.valueAsNumber
  const m = speciesInput.valueAsNumber;
  isThereBird(matrix, m);
  moreThan10(matrix, n, m);
  noBird(matrix, n, m);
}

//1. feladat
function isThereBird(matrix, m)
{
  for(let i=0; i<m; ++i)
  {
    if(matrix[0][i]!="0")
    {
      document.getElementById("task-1").innerHTML = "Yes";
      break;
    }
    else{
      document.getElementById("task-1").innerHTML = "No";
    }
  }
}

//2. feladat
let count = 0;
function moreThan10(matrix, n, m)
{
  for(let i=0; i<n;++i)
  {
    for(let j=0; j<m; ++j)
    {
      if(matrix[i][j]>10)
      {
        count++;
      }
    }
  }
  document.getElementById("task-2").innerHTML = count;
  count =0;
}

//3. feladat
let nBA = [];
function noBird(matrix, n, m)
{
  for(let i=0; i<n;++i)
  {
    for(let j=0; j<m; ++j)
    {
      if(matrix[i][j] != 0)
      {
        nBA[i] = "No";
        break;
      }
      else{
        nBA[i] = i+1;
      }

    }
  }

  for(let i=0; i<nBA.length; ++i)
  {
    if(nBA[i]!="No")
    {
      document.getElementById("task-3").innerHTML = nBA[i];
      break;
    }
    else if(nBA[i]=="No")
    {
      document.getElementById("task-3").innerHTML = "No";
    }
  }
}
