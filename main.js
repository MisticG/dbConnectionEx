//funktion för flera requests
function makeRequest(url, method, formdata, callback) {
fetch(url, {
    method: method,
    body: formdata,

    //funktion som tar in data och returnerar json data. -> förstå vad js får tillbaka (json)
}).then((data) => {
    return data.json();

    //funktion som kallas när fetch är färdig
}).then((result) => {
    callback(result)

}).catch((error) => {
    console.log(error)
})

}


function getAllData() {

    var getAllData = new FormData();
    //...append('nyckel', 'värde') <- man tilldelar en nyckel och ett värde som skapas i den nya formdatan
    getAllData.append('getType', 'getAll');

    makeRequest("requestHandler.php", "POST", getAllData, (response) => {console.log(response) })

}
