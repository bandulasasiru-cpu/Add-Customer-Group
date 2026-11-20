function viewCustomers() {

    let customerList = JSON.parse(localStorage.getItem("customers")) || [];

    let table = document.getElementById("customerTable");

    table.innerHTML = "";

    for (let i = 0; i < customerList.length; i++) {

        table.innerHTML += `
            <tr>
                <td>${customerList[i].id}</td>
                <td>${customerList[i].name}</td>
                <td>${customerList[i].age}</td>
                <td>${customerList[i].address}</td>
                <td>${customerList[i].salary}</td>
            </tr>
        `;
    }

}

viewCustomers();