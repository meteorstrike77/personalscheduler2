function createevent1() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event1").innerHTML = combined;
}
function createevent2() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event2").innerHTML = combined;
}
function createevent3() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event3").innerHTML = combined;
}
function createevent4() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event4").innerHTML = combined;
}
function createevent5() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event5").innerHTML = combined;
}
function createevent6() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event6").innerHTML = combined;
}
function createevent7() {
    var time =  document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var name = document.getElementById("event_name").value;

    var combined = time + " " + date + " " + name;
    
    document.getElementById("event7").innerHTML = combined;
}
function removeevent() {
    document.getElementById("event1").innerHTML = "You currently do not have any scheduled events.";
    document.getElementById("event2").innerHTML = "";
    document.getElementById("event3").innerHTML = "";
    document.getElementById("event4").innerHTML = "";
    document.getElementById("event5").innerHTML = "";
    document.getElementById("event6").innerHTML = "";
    document.getElementById("event7").innerHTML = "";
}