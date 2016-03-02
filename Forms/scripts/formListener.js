function showPopup(){
    alert("Data posted to server)");
}

function doPost() {
    var data = location.search.substring(1).split('&'), s = '';
    while(d = data.shift()) {
        d = d.split('=');
        s += 'Key: ' + d[0] + ', value: ' + d[1] + '<br>';
    }
    document.getElementById('name').innerHTML = s;
}

function validate_form ( )
{
    var valid = true;
    if ( document.order.Name.value == "" )
    {
        vis("usernameError");
        valid = false;
    }

    if ( document.order.eMail.value == "" )
    {
        vis("emailError");
        valid = false;
    }

    if ( !document.order.License.checked ) {
        vis("licenseError");
        valid = false;
    }

    return valid;
}

function vis(elementId) {
    var d = document.getElementById(elementId);
    d.style.display = 'block';
}

function unVis(elementId) {
    var d = document.getElementById(elementId);
    d.style.display = 'none';
}