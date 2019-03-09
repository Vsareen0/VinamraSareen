
var socialLogin = {
  signInWithPopup: function(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.   
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  },
  signInWithRedirect: function(provider){
    firebase.auth().signInWithRedirect(provider);
  },
  signOut: function(){
    firebase.auth().signOut().then(function() {
      window.location.assign("./index.html");
    }).catch(function(error) {
      // An error happened.
    });
  }
};


function loginValidator(id){
  if (id.includes("google")) {
    var provider = new firebase.auth.GoogleAuthProvider();
    if (id.includes("Popup")) {
      socialLogin.signInWithPopup(provider);
    }else{
      socialLogin.signInWithRedirect(provider);
    }
  }else if(id.includes("facebook")){
    var provider = new firebase.auth.FacebookAuthProvider();
    if (id.includes("Popup")) {
      socialLogin.signInWithPopup(provider);
    }else{
      socialLogin.signInWithRedirect(provider);
    }
  }else if(id.includes("twitter")){
    var provider = new firebase.auth.TwitterAuthProvider();
    if (id.includes("Popup")) {
      socialLogin.signInWithPopup(provider);
    }else{
      socialLogin.signInWithRedirect(provider);
    }
  }
};


function display(e){
  var signUp = document.querySelector('#sign-up-form');
  signUp.style.display = "none";
  var signIn = document.querySelector('#login-form');
  signIn.style.display = "none";
  console.log(e);
  var element = document.querySelector('#'+e);
  element.style.display = "block";
  document.getElementById('left').style.height = '120vh';
  document.getElementById('right').style.height = '120vh';
}
