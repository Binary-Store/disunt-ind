
document.getElementById('notification').style.display = 'none';
document.getElementById('submitting').style.display = 'none';
function sendData(event){
    event.preventDefault();
    
    var formData = {
        name: document.forms["myForm"]["name"].value,
        number: document.forms["myForm"]["number"].value,
        email: document.forms["myForm"]["email"].value,
        message: document.forms["myForm"]["message"].value
    };

    document.getElementById('submitting').style.display='block';
     
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {

            document.forms["myForm"].reset();
            document.getElementById('submitting').style.display = 'none';
            document.getElementById('notification').style.display = 'block';
            setTimeout(function() {
                document.getElementById('notification').style.display = 'none';
            }, 3000);
        }
    };
    xhr.send(JSON.stringify(formData));
}
