/*
  Start of the Visual Representation Code
*/
$.getJSON('data.json', function (data) {
  var bbcone = [];
  var bbctwo = [];
  var bbcthree = [];
  var bbcfour = [];
  var bbcnews24 = [];
  var cbbc = [];
  var cbeebies = [];

  for (i in data){
    bbcone.push(data[i]["bbcone"]);
  }
  for (i in data){
    bbctwo.push(data[i]["bbctwo"]);
  }
  for (i in data){
    bbcthree.push(data[i]["bbcthree"]);
  }
  for (i in data){
    bbcfour.push(data[i]["bbcfour"]);
  }
  for (i in data){
    bbcnews24.push(data[i]["bbcnews24"]);
  }
  for (i in data){
    cbbc.push(data[i]["cbbc"]);
  }
  for (i in data){
    cbeebies.push(data[i]["cbeebies"]);
  }

  var January = {
    "BBC One":bbcone[0],
    "BBC Two":bbctwo[0],
    "BBC Three":bbcthree[0],
    "BBC Four":bbcfour[0],
    "BBC News 24":bbcnews24[0],
    "CBBC":cbbc[0],
    "Cbeebies":cbeebies[0],
  }
  var February = {
    "BBC One":bbcone[1],
    "BBC Two":bbctwo[1],
    "BBC Three":bbcthree[1],
    "BBC Four":bbcfour[1],
    "BBC News 24":bbcnews24[1],
    "CBBC":cbbc[1],
    "Cbeebies":cbeebies[1],
  }
  var March = {
    "BBC One":bbcone[2],
    "BBC Two":bbctwo[2],
    "BBC Three":bbcthree[2],
    "BBC Four":bbcfour[2],
    "BBC News 24":bbcnews24[2],
    "CBBC":cbbc[2],
    "Cbeebies":cbeebies[2],
  }
  var April = {
    "BBC One":bbcone[3],
    "BBC Two":bbctwo[3],
    "BBC Three":bbcthree[3],
    "BBC Four":bbcfour[3],
    "BBC News 24":bbcnews24[3],
    "CBBC":cbbc[3],
    "Cbeebies":cbeebies[3],
  }
  var May = {
    "BBC One":bbcone[4],
    "BBC Two":bbctwo[4],
    "BBC Three":bbcthree[4],
    "BBC Four":bbcfour[4],
    "BBC News 24":bbcnews24[4],
    "CBBC":cbbc[4],
    "Cbeebies":cbeebies[4],
  }
  var June = {
    "BBC One":bbcone[5],
    "BBC Two":bbctwo[5],
    "BBC Three":bbcthree[5],
    "BBC Four":bbcfour[5],
    "BBC News 24":bbcnews24[5],
    "CBBC":cbbc[5],
    "Cbeebies":cbeebies[5],
  }
  var July = {
    "BBC One":bbcone[6],
    "BBC Two":bbctwo[6],
    "BBC Three":bbcthree[6],
    "BBC Four":bbcfour[6],
    "BBC News 24":bbcnews24[6],
    "CBBC":cbbc[6],
    "Cbeebies":cbeebies[6],
  }
  var August = {
    "BBC One":bbcone[7],
    "BBC Two":bbctwo[7],
    "BBC Three":bbcthree[7],
    "BBC Four":bbcfour[7],
    "BBC News 24":bbcnews24[7],
    "CBBC":cbbc[7],
    "Cbeebies":cbeebies[7],
  }
  var September = {
    "BBC One":bbcone[8],
    "BBC Two":bbctwo[8],
    "BBC Three":bbcthree[8],
    "BBC Four":bbcfour[8],
    "BBC News 24":bbcnews24[8],
    "CBBC":cbbc[8],
    "Cbeebies":cbeebies[8],
  }
  var October = {
    "BBC One":bbcone[9],
    "BBC Two":bbctwo[9],
    "BBC Three":bbcthree[9],
    "BBC Four":bbcfour[9],
    "BBC News 24":bbcnews24[9],
    "CBBC":cbbc[9],
    "Cbeebies":cbeebies[9],
  }
  var November = {
    "BBC One":bbcone[10],
    "BBC Two":bbctwo[10],
    "BBC Three":bbcthree[10],
    "BBC Four":bbcfour[10],
    "BBC News 24":bbcnews24[10],
    "CBBC":cbbc[10],
    "Cbeebies":cbeebies[10],
  }
  var December = {
    "BBC One":bbcone[11],
    "BBC Two":bbctwo[11],
    "BBC Three":bbcthree[11],
    "BBC Four":bbcfour[11],
    "BBC News 24":bbcnews24[11],
    "CBBC":cbbc[11],
    "Cbeebies":cbeebies[11],
  }

  var graph1 = document.getElementById("graph1");
  var graph2 = document.getElementById("graph2");
  var graph3 = document.getElementById("graph3");
  var graph4 = document.getElementById("graph4");
  var graph5 = document.getElementById("graph5");
  var graph6 = document.getElementById("graph6");
  var graph7 = document.getElementById("graph7");
  var graph8 = document.getElementById("graph8");
  var graph9 = document.getElementById("graph9");
  var graph10 = document.getElementById("graph10");
  var graph11 = document.getElementById("graph11");
  var graph12 = document.getElementById("graph12");

  var contex = graph1.getContext("2d");

  function drawLine(contex, startX, startY, endX, endY, color){
    contex.save();
    contex.strokeStyle = color;
    contex.beginPath();
    contex.moveTo(startX,startY);
    contex.lineTo(endX,endY);
    contex.stroke();
    contex.restore();
  }
  function drawBar(contex, upperLeftCornerX, upperLeftCornerY, width, height,color){
    contex.save();
    contex.fillStyle=color;
    contex.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    contex.restore();
  }
  var Barchart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.contex = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function(){
      var maxValue = 0;
      for (var categ in this.options.data){
          maxValue = Math.max(maxValue,this.options.data[categ]);
      }
      var canvasActualHeight = this.canvas.height - this.options.padding * 2;
      var canvasActualWidth = this.canvas.width - this.options.padding * 2;

      //Drawing The Grid Lines
      var gridValue = 0;
      while (gridValue <= maxValue){
        var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
        drawLine(
          this.contex,
          0,
          gridY,
          this.canvas.width,
          gridY,
          this.options.gridColor
        );

        //Writing Grid Markers
        this.contex.save();
        this.contex.fillStyle = this.options.gridColor;
        this.contex.font = "bold 10px Arial";
        this.contex.fillText(gridValue, 10,gridY - 2);
        this.contex.restore();

        gridValue+=this.options.gridScale;
      }

      //Drawing The Bars
      var barIndex = 0;
      var numberOfBars = Object.keys(this.options.data).length;
      var barSize = (canvasActualWidth)/numberOfBars;

      for (categ in this.options.data){
        var val = this.options.data[categ];
        var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
        drawBar(
          this.contex,
          this.options.padding + barIndex * barSize,
          this.canvas.height - barHeight - this.options.padding,
          barSize,
          barHeight,
          this.colors[barIndex%this.colors.length]
        );
      barIndex++;
    }
    //Graph's Name
    this.contex.save();
    this.contex.textBaseline="bottom";
    this.contex.textAlign="center";
    this.contex.fillStyle = "#000000";
    this.contex.font = "bold 14px Arial";
    this.contex.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
    this.contex.restore();
  }
}
  //Draw Legend for Graphs
  var leg = {
    "BBC One":"#DC143C",
    "BBC Two":"#4169E1",
    "BBC Three":"#FF8C00",
    "BBC Four":"#9400D3",
    "BBC News 24":"#228B22",
    "CBBC":"#FFD700",
    "Cbeebies":"#FF4500",
  }
  var legend = document.querySelector("legend");
  var ul = document.createElement("ul");
  legend.append(ul);
  for (categ in leg){
    var li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.borderLeft = "20px solid "+leg[categ];
    li.style.padding = "10px";
    li.style.float = "none";
    li.style.display = "inline-block";
    li.textContent = categ;
    ul.append(li);
  }

  //Draw Graphs
  var myBarchart1 = new Barchart(
    {
        canvas:graph1,
        seriesName:"January Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:January,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart1.draw();

  var myBarchart2 = new Barchart(
    {
        canvas:graph2,
        seriesName:"February Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:February,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart2.draw();

  var myBarchart3 = new Barchart(
    {
        canvas:graph3,
        seriesName:"March Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:March,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart3.draw();

  var myBarchart4 = new Barchart(
    {
        canvas:graph4,
        seriesName:"April Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:April,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart4.draw();

  var myBarchart5 = new Barchart(
    {
        canvas:graph5,
        seriesName:"May Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:May,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart5.draw();

  var myBarchart6 = new Barchart(
    {
        canvas:graph6,
        seriesName:"June Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:June,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart6.draw();

  var myBarchart7 = new Barchart(
    {
        canvas:graph7,
        seriesName:"July Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:July,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart7.draw();

  var myBarchart8 = new Barchart(
    {
        canvas:graph8,
        seriesName:"August Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:August,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart8.draw();

  var myBarchart9 = new Barchart(
    {
        canvas:graph9,
        seriesName:"September Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:September,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart9.draw();

  var myBarchart10 = new Barchart(
    {
        canvas:graph10,
        seriesName:"October Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:October,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart10.draw();

  var myBarchart11 = new Barchart(
    {
        canvas:graph11,
        seriesName:"November Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:November,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart11.draw();

  var myBarchart12 = new Barchart(
    {
        canvas:graph12,
        seriesName:"December Records",
        padding:35,
        gridScale:200,
        gridColor:"#808080",
        data:December,
        colors:["#DC143C","#4169E1", "#FF8C00","#9400D3","#228B22","#FFD700","#FF4500"]
    }
  );
  myBarchart12.draw();

});
