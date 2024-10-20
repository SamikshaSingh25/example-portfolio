$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
})

document.getElementById("myForm").addEventListener("submit", function(event) {
  
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    
    var csvContent = "data:text/csv;charset=utf-8,"
      + "Name,Email,Message\n"
      + name + "," + email + "," + message;

    
    var link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "form_data.csv";
    document.body.appendChild(link);

  link.click();
    form.reset();
    
  });
