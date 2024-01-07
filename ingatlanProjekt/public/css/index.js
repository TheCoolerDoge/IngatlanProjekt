function openInNewTab(url) {
  window.open(url, '_self').focus();
}

function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    addElement(src)

    //var preview = document.getElementById("file-ip-1-preview");
    //preview.src = src;
    preview.style.display = "block";
  }
}

function addElement(src) {
  // create a new div element
  const newDiv = document.createElement("img");
  newDiv.setAttribute("id", src);
  newDiv.setAttribute("class", "kep");
  // and give it some content
  newDiv.src = src;

  // add the text node to the newly created div
  //newDiv.appendChild(preview);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("preview");
  const newDiv3 = document.createElement("div");
  newDiv3.setAttribute("class", "parentimgdiv");
  currentDiv.append(newDiv3)
  newDiv3.append(newDiv)

  const newDiv2 = document.createElement("img");
  newDiv2.setAttribute("id", "x");
  newDiv2.setAttribute('onclick','deletethisimg(this);');
  newDiv2.src = "../public/css/img/delete-button.png";
  newDiv3.append(newDiv2)


}

function deletethisimg(event){
  event.parentElement.remove()
}

var listHir = false;

function showListHir() {
  listHir = true;
}

function hideListHir() {
  listHir = false;
}

function openLogForm() {
  teszthivas();
  document.getElementById("logForm").style.display = "block";
  document.getElementById("szlogen").style.display = "none";
  document.getElementById("kereses").style.display = "none";
  document.getElementById("regForm").style.display = "none";
  
}

function closeLogForm() {
  document.getElementById("logForm").style.display = "none";
  document.getElementById("szlogen").style.display = "block";
  document.getElementById("kereses").style.display = "block";
}

function openRegForm() {
  document.getElementById("regForm").style.display = "block";
  document.getElementById("szlogen").style.display = "none";
  document.getElementById("kereses").style.display = "none";
  document.getElementById("logForm").style.display = "none";
}

function closeRegForm() {
  document.getElementById("regForm").style.display = "none";
  document.getElementById("szlogen").style.display = "block";
  document.getElementById("kereses").style.display = "block";
}


function passwordCheck(event) {
  console.log('aaaa')
  let pw = document.getElementById("password").value;
  let pwa = document.getElementById("passwordAgain").value;

  if (pw !== pwa) {
    event.preventDefault();
    document.getElementById('password-validation-text').style.display = "block";
    // alert("Nem egyezik a jelszó");
  }
}


  function addIngatlan(arvar, varos, utca,hazszam,emelet,ajto,tartalom) {

  const ingatlanpreview = document.createElement("div");
  ingatlanpreview.setAttribute("class", "ingatlanpreview");

  const ingatlanbox = document.createElement("div");
  ingatlanbox.setAttribute("id", ingatlanbox);

  ingatlanpreview.append(ingatlanbox)

  const ingatlanimgdiv = document.createElement("div");
  ingatlanimgdiv.setAttribute("class", "ingatlanimgdiv");

  ingatlanbox.append(ingatlanimgdiv)


  const Row = document.createElement("div");
  Row.setAttribute("class", "Row");  

  ingatlanbox.append(Row)

  const Columnar = document.createElement("div");
  Columnar.setAttribute("class", "Column");
  Columnar.setAttribute("id", "ingatlanar");
  const ar = document.createElement("div");
  ar.innerHTML = "Ár:";

  Row.append(Columnar)
  Columnar.append(ar)

  const Columnar1 = document.createElement("div");
  Columnar1.setAttribute("class", "Column");
  Columnar1.setAttribute("id", "ingatlanar");
  const ar1 = document.createElement("div");
  ar1.innerHTML = arvar;
  Row.append(Columnar1)
  Columnar1.append(ar1)

  
  const Row1 = document.createElement("div");
  Row1.setAttribute("class", "Row");  

  ingatlanbox.append(Row1)


  const Columnar2 = document.createElement("div");
  Columnar2.setAttribute("class", "Column1");
  Columnar2.setAttribute("id", "ingatlanfont");
  const ar2 = document.createElement("div");
  ar2.innerHTML = varos;
  
  Columnar2.append(ar2)


  const Columnar3 = document.createElement("div");
  Columnar3.setAttribute("class", "Column1");
  Columnar3.setAttribute("id", "ingatlanfont");
  const ar3 = document.createElement("div");
  ar3.innerHTML = utca;

  Columnar3.append(ar3)

  const Columnar4 = document.createElement("div");
  Columnar4.setAttribute("class", "Column1");
  Columnar4.setAttribute("id", "ingatlanfont");
  const ar4 = document.createElement("div");
  ar4.innerHTML = hazszam;
  Columnar4.append(ar4)


  const Columnar5 = document.createElement("div");
  Columnar5.setAttribute("class", "Column1");
  Columnar5.setAttribute("id", "ingatlanfont");
  const ar5 = document.createElement("div");
  ar5.innerHTML = emelet;
  Columnar5.append(ar5)

  const Columnar6 = document.createElement("div");
  Columnar6.setAttribute("class", "Column1");
  Columnar6.setAttribute("id", "ingatlanfont");
  const ar6 = document.createElement("div");
  ar6.innerHTML = ajto;
  Columnar6.append(ar6)

  Row1.append(Columnar2)
  Row1.append(Columnar3)
  Row1.append(Columnar4)
  Row1.append(Columnar5)
  Row1.append(Columnar6)

  const Row2 = document.createElement("div");
  Row2.setAttribute("class", "Row");  

  ingatlanbox.append(Row2)

  const ingatlantartalom = document.createElement("div");
  ingatlantartalom.setAttribute("id", "ingatlantartalom");
  ingatlantartalom.innerHTML = tartalom;

  Row2.append(ingatlantartalom)
  
  var ingatlantalalatok=document.getElementById("ingatlantalalatok")
  
  ingatlantalalatok.append(ingatlanpreview)
}
  function teszthivas()
  {
    addIngatlan("15M", "Budapest","Vitéz utca","24","3","6","Ide pedig bármit lehet írni")
  }
 
