function formValidation() {
  var uhscin = document.registration.hscin;
  var uhscb = document.registration.hscb;
  var uhscp = document.registration.hscp;
  var usscin = document.registration.sscin;
  var usscb = document.registration.sscb;
  var usscp = document.registration.sscp;
  var ucp = document.registration.cp;
  var ucein = document.registration.cein;
  var uop = document.registration.op;
  var ucb = document.registration.cb; if (allLetter(uhscin))
  {
    if (allLetter1(uhscb)){
      if (allnumeric(uhscp,100)){
      if (allLetter2(usscin)){
        if (allLetter3(usscb)){
            if (allnumeric1(usscp,100)){
              if (allLetter4(ucp)){
                if (allLetter5(ucein)){
                  if (allnumeric(uop,100)){
                    if (allnumeric(ucb,5)){
                  }
                }
               }
              }
            }
          }
        }
      }
    }
  }
  return false;

}
function allLetter(uhscin) {
  var letters = /^[A-Za-z]+$/;
  if (uhscin.value.match(letters)) {
    return true;
  } else {
    alert('User HSC Institution name cannot be null');
    uhscin.focus();
    return false;
  }
}
function allLetter1(uhscb) {
  var letters = /^[A-Za-z]+$/;
  if (uhscb.value.match(letters)) {
    return true;
  } else {
    alert('User HSC Board name cannot be null');
    uhscb.focus();
    return false;
  }
}
function allnumeric(uhscp, mx) {
  var hscp_len = uhscp.value.length;
  if (hscp_len != 0 || hscp_len <= mx) {
    return true;
  } else {
    alert('Percentage should be less or eqaul to 100');
    uhscp.focus();
    return false;
  }
}
function allLetter2(usscin) {
  var letters = /^[A-Za-z]+$/;
  if (usscin.value.match(letters)) {
    return true;
  } else {
    alert('User SSC Institution name cannot be null');
    usscin.focus();
    return false;
  }
}

function allLetter3(usscb) {
  var letters = /^[A-Za-z]+$/;
  if (usscb.value.match(letters)) {
    return true;
  } else {
    alert('User SSC Board name cannot be null');
    usscb.focus();
    return false;
  }
}

function allnumeric1(usscp, mx) {
  var hscp_len = usscp.value.length;
  if (hscp_len != 0 || hscp_len <= mx) {
    return true;
  } else {
    alert('Percentage should be less or eqaul to 100');
    usscp.focus();
    return false;
  }
}

function allLetter4(ucp) {
  var letters = /^[A-Za-z]+$/;
  if (ucp.value.match(letters)) {
    return true;
  } else {
    alert('Current education Name cannot be null');
    ucp.focus();
    return false;
  }
}

function allLetter5(ucein) {
  var letters = /^[A-Za-z]+$/;
  if (ucein.value.match(letters)) {
    return true;
  } else {
    alert('Current education Institution Name cannot be null');
    ucein.focus();
    return false;
  }
}
function allnumeric2(uop, mx) {
  var uop_len = uop.value.length;
  if (uop_len != 0 || uop_len <= mx) {
    return true;
  } else {
    alert('Overall Percentage should be less or eqaul to 100');
    uop.focus();
    return false;
  }
}
function allnumeric3(ucb, mx) {
  var ucb_len = ucb.value.length;

  if (ucb_len != 0 || ucb_len > mx) {
    alert('too many back logs!!');
    ucb.focus();
    return false;
  } else {
    alert('Form Succesfully Submitted');
    window.location.reload()
    return true;
  }
}
