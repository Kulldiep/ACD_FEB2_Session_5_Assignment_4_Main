var employees = [
    {
    
    "name": "Kulldiep",
    "age": 25,
    "salary": "5 Lakhs",
    address: {
	 city: 'Chennai',
	 state: 'Tamilnadu',
	 pincode: '600082'	
	}
     },

{
     
    "name": "Josh",
    "age": 32,
    "salary": "12 Lakhs",
    address: {
	 city: 'Chennai',
	 state: 'Tamilnadu',
	 pincode: '600010'	
	}},

{
    
    "name": "Vibe",
    "age": 27,
    "salary": "8 Lakhs",
    address: {
	 city: 'Chennai',
	 state: 'Tamilnadu',
	 pincode: '600003'	
	}
    },

{
   
    "name": "Jim",
    "age": 41,
    "salary": "25 Lakhs",
    address: {
	 city: 'Chennai',
	 state: 'Tamilnadu',
	 pincode: '600012'	
	}
    }
];
document.getElementById("myName").innerHTML = employees[0].name;
document.getElementById("myAge").innerHTML = employees[0].age;
document.getElementById("mySalary").innerHTML = employees[0].salary;
document.getElementById("myCity").innerHTML = employees[0].address.city;;
document.getElementById("myState").innerHTML = employees[0].address.state;
document.getElementById("myPincode").innerHTML = employees[0].address.pincode;
