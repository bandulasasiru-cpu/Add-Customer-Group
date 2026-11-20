let customerList = [];

function addCustomer() {

    let id = document.getElementById("txtId").value;
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let address = document.getElementById("txtAddress").value;
    let salary = document.getElementById("txtSalary").value;

    let customer = {
        id: id,
        name: name,
        age: age,
        address: address,
        salary: salary
    };

    customerList.push(customer);

    localStorage.setItem("customers", JSON.stringify(customerList));

    alert("Customer Added Successfully!");

}