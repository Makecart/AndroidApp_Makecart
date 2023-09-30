console.log('Hellow user thanks for comming at makecart');



  function cancle_order(){
    var conf = confirm("Do you have your order id which was shown after placing the order");
    
    if (conf){
    var uuid = prompt("Please enter your order id for cancle the order");
    //  71107d27-3242-4914-8bbe-638bad534df3
    var msg = "Please cancle the order of the order id : " + uuid;
    
    Email.send({
      SecureToken: "71107d27-3242-4914-8bbe-638bad534df3",
      To: 'Makecart1@gmail.com',
      From: "makecartcommunication@gmail.com",
      Subject: "Order canceleation request",
      Body: msg
    }).then(
      message => alert(message)
    );
    
    alert("Your order will be cancled if you have entered an valid order id , we will mail you at you email quickly when we get your order id is valid")
    }
    else {
      var email = prompt("Enter your email");
      var city = prompt("Enter your city");
      var address = prompt("enter your address");
      var name = prompt("enter your fuill name");
      var pincode = prompt("enter your pincode");
      var phone = prompt("Enter your phone number +91");
      var make_order = "Order cancelation but order id is missed user information is username :" + name + ", email : " + email + ", address of home : " + address + ", city : " + city + ", pincode : " + pincode + ", phone number : " + phone + ", now match this information with any previous order and if this whole information matches with that then cancle that order";
    }
    
    
    Email.send({
      SecureToken: "71107d27-3242-4914-8bbe-638bad534df3",
      To: 'Makecart1@gmail.com',
      From: "makecartcommunication@gmail.com",
      Subject: "New order for shoe1",
      Body: make_order
    }).then(
      message => alert(message)
    );
    alert("Your order will be cancled if there will be any order with this information");
    
    
    
    
  }