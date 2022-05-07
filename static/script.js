
function del() {
    alert("are you sure you want to proceed");
}

function printTable() {
    window.frames["print_frame"].document.body.innerHTML = document.getElementById("printNgo").innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  }




