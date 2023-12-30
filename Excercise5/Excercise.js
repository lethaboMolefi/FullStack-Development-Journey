function validate() {
  let username = document.forms["theForm"]["username"].value;
  let password = document.forms["theForm"]["password"].value;

  // window.alert(username + " " + password);

  if (username != "" && password != "") {
    window.alert("sending to server");
    return false;
  }

  window.alert("not number");
  return false;
}
