function formValidation() {
  var uname = document.registration.username;
  var naty = document.registration.nationality;
  var uadd = document.registration.address;
  var cty = document.registration.city;
  var couty = document.registration.country;
  var utp = document.registration.tphone;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  if (allLetter(uname)) {
    if (ValidateEmail(uemail)) {
      if (validsex(umsex, ufsex)) {
        if (nationality_validation(naty, 3, 8)) {
          if (alphanumeric(uadd)) {
            if (ctalphanumeric(cty)) {
              if (countryselect(ucouty, 3, 10)) {
                if (allnumeric(utp, 10, 11)) {}
              }
            }
          }
        }
      }
    }
  }
  return false;

}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert('Username must have alphabet characters only and cannot be null');
    uname.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    alert('Select Male/Female');
    umsex.focus();
    return false;
  } else {
    return true;
  }
}

function nationality_validation(naty, mx, my) {
  var naty_len = naty.value.length;
  if (naty_len == 0 || naty_len >= my || naty_len < mx) {
    alert("Nationality should not be empty");
    naty.focus();
    return false;
  }
  return true;
}

function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert('User address must have alphanumeric characters only');
    uadd.focus();
    return false;
  }
}

function ctalphanumeric(cty) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (cty.value.match(letters)) {
    return true;
  } else {
    alert('User city must have alphanumeric characters only');
    cty.focus();
    return false;
  }
}

function countryselect(couty, mx, my) {
  var couty_len = couty.value.length;
  if (couty_len == 0 || couty >= my || couty < mx) {
    alert('please enter your country');
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}

function allnumeric(tphone, mx, my) {
  var utp_len = utp.value.length;

  if (utp_len != 0 || utp_len == mx || utp_len < my) {
    return true;
  } else {
    alert('Mobile number should be about 10 digits only');
    utp.focus();
    return false;
  }
}
