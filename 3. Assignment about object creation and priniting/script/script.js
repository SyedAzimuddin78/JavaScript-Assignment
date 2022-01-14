var myDetails = {
    firstName: "Azimuddin",
    middleName:"Sharifuddin",
    lastName: "Syed",
    designation: "Intern Consulting",
    contact:7219103687,
    address: {
        houseNo: 303,
        area: "mahal",
        cityName: "Nagpur",
        pinCode: 440001,
        state:"Maharashtra",
        country: "India",
    }
};

document.getElementById("myDetails").innerHTML = "My name is " + " " +myDetails.firstName + " " + myDetails.middleName +
" " + myDetails.lastName + " . " + "I am " + myDetails.designation + " at Perficient." + "You can reach out to me on "+ 
myDetails.contact + " and I live at " + myDetails.address.houseNo + " , " +  myDetails.address.area +
" , " + myDetails.address.cityName + " , " + myDetails.address.pinCode +" , " +  myDetails.address.country +" .";