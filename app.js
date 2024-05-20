
var okay = JSON.parse(localStorage.getItem("user"))

function signIn() {
  var user1 = emAil.value
  var user2 = paSs.value
  var found = false
  if (!user1 || !user2) {
    showAlert("please fill your up Details 😊😂", 'alert alert-danger mt-3 text-center text-light w-50  m-auto')
    setTimeout(() => {
      showAlert("", "")
    }, 3000)
  } else {
    for (let index = 0; index < okay.length; index++) {
      if (user1 == okay[index].email && user2 == okay[index].password) {
        var cur = index
        found = true
        break;
      }

    }
    if (found == true) {
      alert("Welcome To Todo Pro Max")
      console.log(cur);
      localStorage.setItem("curUserindex", JSON.stringify(cur))
      window.location.href = "dash.html"
    } else {
      showAlert("Invalid Email or password  😊😂", 'alert alert-danger mt-3 text-center w-50  m-auto')
      setTimeout(() => {
        showAlert("", "")
      }, 3000)
      alert("Invalid Email or Password")
    }
  }
}