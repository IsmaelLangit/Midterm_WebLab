  var myJSON1, text1, objBlock, myObj2, myJSON2, text2, objRange, index, mid, color, floor;

  //Retrieving data(block):
  text1 = localStorage.getItem("data1");
  objBlock = JSON.parse(text1);

  //Retrieving data(range):
  text2 = localStorage.getItem("data2");
  objRange = JSON.parse(text2);

  function SetMid(end){
    var start;
    if (floor == 6){
      start = "601, 338 601, 212";
    } else if (floor == 5) {
      start = "601, 338 601, 212";
    } else if (floor == 4) {
      start = "614.8,364.5 614.8,197";
    }
    
    var x = end.split(",").slice(0,1);
    var y = start.split(",").slice(2);
    var coor = " " + x + ", " + y + " "; 
    var comb = start + " " + coor + " " + end;
    document.getElementsByTagName("polyline")[0].setAttribute("points", comb)
    }


    function Setcolor(c) {
    document.getElementsByTagName("polyline")[0].setAttribute("stroke", c);
    }

    function result(flr) {
    index = localStorage.getItem("index");
    mid = objBlock[index].mid;
    color = objBlock[index].color;
    floor = objBlock[index].floor;

    if (flr == floor){
    SetMid(mid);
    Setcolor(color); 
    }
  }

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
           floor = flr;

       if (inputsubsec == sub) {
          SetMid(midsub);
          Setcolor(colorsub); 
    }
  }
}



