document.getElementById("file").addEventListener("change",function(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
      alert("Got the file\n" +
        "name: " + f.name + "\n" +
        "type: " + f.type + "\n" +
        "size: " + f.size + " bytes\n" +
        "starts with: " + contents.substr(1, contents.indexOf("\n"))
      );
      if (f.size > 4194304) {
        alert('File size Greater then 4MB!');
      }


    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
})

document.getElementById("file1").addEventListener("change",function(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
      alert("Got the file\n" +
        "name: " + f.name + "\n" +
        "type: " + f.type + "\n" +
        "size: " + f.size + " bytes\n" +
        "starts with: " + contents.substr(1, contents.indexOf("\n"))
      );
      if (f.size > 4194304) {
        alert('File size Greater then 4MB!');
      }


    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
})

document.getElementById("file2").addEventListener("change",function(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
      alert("Got the file\n" +
        "name: " + f.name + "\n" +
        "type: " + f.type + "\n" +
        "size: " + f.size + " bytes\n" +
        "starts with: " + contents.substr(1, contents.indexOf("\n"))
      );
      if (f.size > 4194304) {
        alert('File size Greater then 4MB!');
      }


    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
})

document.getElementById("filey").addEventListener("change",function(evt) {
  //Retrieve the first (and only!) File from the FileList object
  var f = evt.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
      alert("Got the file\n" +
        "name: " + f.name + "\n" +
        "type: " + f.type + "\n" +
        "size: " + f.size + " bytes\n" +
        "starts with: " + contents.substr(1, contents.indexOf("\n"))
      );
      if (f.size > 10485760) {
        alert('File size Greater then 10MB!');
        return false;
      }


    }
    r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
})
