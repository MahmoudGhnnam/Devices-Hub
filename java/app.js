var allData = [];
var formEl = document.getElementById('form');
var tableEl = document.getElementById('table');
function MyDevices(deviceName, quantity , unitPrice , category){
    this.deviceName = deviceName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.category = category;
}




formEl.addEventListener('submit',submitItem );

function submitItem(event){
    event.preventDefault();
    var deviceName = event.target.itemName.value;
    var category = event.target.category.value;
    var quantity = event.target.quantity.value;
    var unitPrice = getRandomNumber(75 , 350);
    new MyDevices(deviceName,category,unitPrice,quantity);
    render();
}

function render(){
    for (var i = 0 ; i < allData.length ; i++ )
    var dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    var tdEl1 = document.createElement('td');
    dataRowEl.appendChild(tdEl1);
    tdEl1.textContent = alldata[i] . deviceName;
    var tdEl2 = document.createElement('td');
    dataRowEl.appendChild(tdEl2);
    tdEl2.textContent = alldata[i] . category;
    var tdEl3 = document.createElement('td');
    dataRowEl.appendChild(tdEl3);
    tdEl3.textContent = alldata[i] . unitPrice;


}
// setItem for local storage
function set(){
    var sendJson = localStorage.setItem(allData);
    localStorage.setItem("all Data", sendJson);
}

function get(){
    var getJson =localStorage.getItem("all Data");
    if(getJson){
        allData = JSON.parse(getJson);
    }
}

// random number function
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }