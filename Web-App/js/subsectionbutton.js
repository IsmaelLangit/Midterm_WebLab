  function subsectionresult(flr) {
  var myJSON3, text3, objSubsection;

  //Retrieving data(subsection):
  text3 = localStorage.getItem("data3");
  objSubsection = JSON.parse(text3);
  
  var inputsubsec = document.getElementById("floor-mySelect").value;

    for (var i = 0; i < objSubsection.length ; i++ ){
       var sub = objSubsection[i].subsection;
       var midsub = objSubsection[i].mid;
       var colorsub = objSubsection[i].color;

       if (inputsubsec == sub) {
          SetMid(midsub);
          Setcolor(colorsub); 
    }
  }
}