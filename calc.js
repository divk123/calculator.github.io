function back() {
    var value = document.getElementById("output").value;
    document.getElementById("output").value = value.substr(0, value.length - 1);
}