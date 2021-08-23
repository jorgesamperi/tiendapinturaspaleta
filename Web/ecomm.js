<!--
// -----
// item
// -----
function item(url, title, price, image, weight, freight, tax, option1, option2)
{

  this.count = 0;
  this.url = url.substring(0);
  this.title = title.substring(0);
  this.price = (price) ? price : 0;
  this.image = image.substring(0);
  this.weight = (weight) ? weight : 0;
  this.freight = (freight) ? freight : 0;
  this.tax = (tax) ? tax : 0;
  this.option1 = option1.substring(0); 
  this.option2 = option2.substring(0);
}

function addItem()
{
  var url;
  var code;
  var title;
  var price;
  var image;
  var qty;
  var weight;
  var freight;
  var tax;
  var option1;
  var option2;

  for (var i = 0; i < arguments.length; i++)
  {
    if (i == 0) url = arguments[i];
    if (i == 1) code = arguments[i];
    if (i == 2) title = arguments[i];
    if (i == 3) price = arguments[i];
    if (i == 4) image = arguments[i];
    if (i == 5) qty = arguments[i];
    if (i == 6) weight = arguments[i];
    if (i == 7) freight = arguments[i];
    if (i == 8) tax = arguments[i];
    if (i == 9) option1 = arguments[i];
    if (i == 10) option2 = arguments[i];

  }  

  price=fmt_num(price);

  if (list[code] == null){    
    list[code] = new item(url, title, price, image, weight, freight ,tax, option1, option2);
  }
  list[code].count += qty;

  if (parent.shoptrolley != null)
    parent.shopregister.showBasket();
}

function removeItem(code)
{  
  for (i in list){     
       if (i.indexOf(code) != -1 && list[i] != null && list[i].count > 0) {
          list[i].count--;
          break;
       }  
  }
  parent.shopregister.showBasket();
}

function changeQty(key)
{
  var qty = list[key].count;

  if ((qty = prompt("Enter new quantity", qty)) != null)
    if (isNaN(qty = parseInt(qty)))
      alert("Invalid number.");
    else if (qty < 0)
      alert("Quantity must be zero or greater.");
    else {
      list[key].count = qty;
      showBasket();
    }
}


function formatDescription(str)
{
  var newStr = unescape(str);

  if (newStr.length > descrLength)
    newStr = newStr.substring(0, descrLength - 3) + "...";

  newStr += "</A>";

  while (newStr.length < descrLength + 4)
    newStr += " ";

  return newStr;
}

function formatPrice(price, width)
{
  var newPrice = "" + price;

  if (newPrice.lastIndexOf('.') == -1)
    newPrice += '.';
  else
    newPrice = newPrice.substring(0, newPrice.lastIndexOf('.') + 3);

  while ((c = newPrice.lastIndexOf('.')) > newPrice.length - 3 && c > -1)
    newPrice += '0';

  while (newPrice.length < width)
    newPrice = ' ' + newPrice;

  return newPrice;
}


function sche(ALINK_COLOR, BGCOLOR, FRAME_COLOR, HEADING2, VLINK_COLOR, LIST_COLOR, TEXT_COLOR, LINK_COLOR,S_CELLCOLOR,S_CELLBORDER,S_BORDER,S_BORDER2,S_HEADING,S_BACKGROUND,CURRENCY)
{
  this.ALINK_COLOR = ALINK_COLOR;
  this.BGCOLOR = BGCOLOR;
  this.FRAME_COLOR = FRAME_COLOR;
  this.HEADING2 = HEADING2;
  this.VLINK_COLOR = VLINK_COLOR;
  this.LIST_COLOR = LIST_COLOR;
  this.TEXT_COLOR = TEXT_COLOR;
  this.LINK_COLOR = LINK_COLOR;
  this.S_CELLCOLOR = S_CELLCOLOR;
  this.S_CELLBORDER= S_CELLBORDER;
  this.S_BORDER= S_BORDER;
  this.S_BORDER2= S_BORDER2;
  this.S_HEADINGCOLOR= S_HEADING;
  this.S_BACKGROUND= S_BACKGROUND;
  this.CURRENCY=CURRENCY;
}


function showBasket()
{
// need for history 
// register.html -> showBasket() -> trolley.html -> displayBasket()
//
  if (parent.shoptrolley != null)
     if (parent.shoptrolley.location != null)
         parent.shoptrolley.location = "trolley.html"; 
}


function displayBasket(){
  var tablesize = 10;

// just only substitution
  t_sche = parent.shopregister.t_she;

  parent.shoptrolley.document.open();
  parent.shoptrolley.document.writeln('<HTML><HEAD><TITLE>Trolley</TITLE>');
  parent.shoptrolley.document.writeln('<BASE TARGET="shopmain">');
  parent.shoptrolley.document.writeln('</HEAD>');


  parent.shoptrolley.document.writeln('<BODY TEXT="' + t_sche.TEXT_COLOR + 
                                       '" BGCOLOR="' + t_sche.BGCOLOR + 
                                       '" LINK="' + t_sche.LINK_COLOR + 
                                       '" VLINK="' + t_sche.VLINK_COLOR + 
                                       '" ALINK="' + t_sche.ALINK_COLOR +
                                       '" BACKGROUND="' + t_sche.S_BACKGROUND
                                       +'">'
                                       );


  parent.shoptrolley.document.write('<TABLE BORDER='+t_sche.S_BORDER+' CELLPADDING=0 CELLSPACING=0><TR>');
  if (t_sche.HEADING2)
  parent.shoptrolley.document.write('<TD>'+t_sche.HEADING2+'</td></tr><tr>');
  
  parent.shoptrolley.document.write('<TD BGCOLOR="'+t_sche.FRAME_COLOR+'" WIDTH=178> </TD>');
  parent.shoptrolley.document.write(' </TR><TR><TD>');

  parent.shoptrolley.document.write('<TABLE WIDTH=178 BORDER=0 CELLPADDING=1 CELLSPACING=0 BGCOLOR="'+t_sche.FRAME_COLOR+'"><TR><TD>');
  parent.shoptrolley.document.write('<TABLE WIDTH=100% BORDER='+t_sche.S_BORDER2+' CELLPADDING=0 CELLSPACING=0 BGCOLOR="'+t_sche.LIST_COLOR+'"><TR><TD>');
  parent.shoptrolley.document.write('<TABLE WIDTH=100% BORDER='+t_sche.S_CELLBORDER+' CELLPADDING=2 CELLSPACING=4>');
  parent.shoptrolley.document.write('<TR BGCOLOR="'+t_sche.LIST_COLOR+'">');
  parent.shoptrolley.document.write('<TH WIDTH=20><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2 COLOR='+t_sche.S_HEADINGCOLOR+'>&nbsp;QTY&nbsp;</FONT></TH>');
  parent.shoptrolley.document.write('<TH WIDTH=80><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2 COLOR='+t_sche.S_HEADINGCOLOR+'>ITEM</FONT></TH>');
  parent.shoptrolley.document.write('<TH WIDTH=30><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2 COLOR='+t_sche.S_HEADINGCOLOR+'>&nbsp;COST&nbsp;</FONT></TH></TR>');



//
// parent.shopregister.document.forms.inputForm.PrintOrder
//
  var doc = parent.shopregister.document.forms;
  doc.inputForm.PrintOrder.value = "";
  doc.inputForm.PROD.value = "15:";
  doc.inputForm.OrderID.value = "";
  var startIdx = location.href.indexOf("register");
  var productLink = location.href.substring(0,startIdx); 

  for (i in list)
    if (list[i].count > 0) {
      parent.shoptrolley.document.write('<TR BGCOLOR="'+t_sche.S_CELLCOLOR+'">');
      parent.shoptrolley.document.write('<TD ALIGN=CENTER"><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2>');
      parent.shoptrolley.document.write('<A HREF="javascript:parent.shopregister.changeQty(\''+i+'\')">'+list[i].count+'</A></FONT></TD>');

      parent.shoptrolley.document.write('<TD><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2>');
      parent.shoptrolley.document.write('<A HREF="'+list[i].url+'">'+formatDescription(unescape(list[i].title))+'</FONT></TD>');

      parent.shoptrolley.document.write('<TD NOWRAP ALIGN=RIGHT><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2>');
      parent.shoptrolley.document.write(' '+t_sche.CURRENCY + formatPrice(list[i].price * list[i].count, 5) + '</FONT></TD></TR>');

      doc.inputForm.OrderID.value += i + "x" + list[i].count + ",";
      doc.inputForm.PrintOrder.value += list[i].count + " x " + unescape(list[i].title +" "+list[i].option1+" "+list[i].option2+"... "+t_sche.CURRENCY+ formatPrice(list[i].price, 0)) + "<BR>";
      doc.inputForm.PROD.value += list[i].count+"	"+unescape(list[i].title+"	"+i+"	"+formatPrice(list[i].price, 0))+"	"+list[i].weight+"	"+productLink+list[i].url+ "	"+t_sche.CURRENCY+"	"+list[i].freight+"	"+list[i].tax+"	0	0	0	"+list[i].option1+"	"+list[i].option2+"	<BR>"+"	" ;
      tablesize--;
    }

  while (tablesize-- > 0){
    parent.shoptrolley.document.write('<TR BGCOLOR='+t_sche.S_CELLCOLOR+'><TD><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2>&nbsp;</FONT></TD>');
    parent.shoptrolley.document.write('<TD><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2>&nbsp;</FONT></TD>');
    parent.shoptrolley.document.write('<TD><FONT FACE="Arial,Helvetica,sans-serif" SIZE=-2>&nbsp;</FONT>');
  }

  parent.shoptrolley.document.write('</TD></TR></TABLE>');
  parent.shoptrolley.document.write('</TD></TR></TABLE>');
  parent.shoptrolley.document.write('</TD></TR></TABLE>');
//  parent.shoptrolley.document.write('</TD></TR></TABLE>');

  parent.shoptrolley.document.write('</TD></TR></TABLE>');
//  parent.shoptrolley.document.write('</CENTER>');
  parent.shoptrolley.document.write('</BODY></HTML>');
  parent.shoptrolley.document.close();


  doc.inputForm.Total.value = sumTotal();
  doc.inputForm.Weight.value = sumWeight();
  doc.inputForm.AddFreight.value = sumFreight();
  doc.inputForm.TaxVal.value = sumTax();
}

function sumTotal()
{
  var total = 0.0;
  for (i in list) total += (list[i].price * list[i].count);
  return formatPrice(total, 7);
}

function sumWeight()
{
  var total = 0.0;
  for (i in list) total += (list[i].weight * list[i].count);
  if (total > 0 && total < 0.01)
     total = 0.01;
  return total;
}

function sumFreight()
{
  var total = 0.0;
  for (i in list) total += (list[i].freight * list[i].count);
  return total;
}

function sumTax()
{
  var total = 0.0;
  for (i in list) total += (list[i].price * list[i].count * list[i].tax/100);
  return total;
}

function inTrolley()
{
   var q = 0;
       
   for (i in list){
       if (list[i] != null && list[i].count > 0)
          q += list[i].count;
   } 
   if (q > 0)
      return true; 
   else
      return false; 
}

//--
// is str number?
//--
 function isNum(str) {
   if(!str) return false;
   for(var i=0; i<str.length; i++){
     var ch=str.charAt(i);
     if ("0123456789 .,".indexOf(ch) ==-1) return false;
   }
   return true;
 } 

//--
// change format of price:
// 1,2.34,567.89  --> 1234567.89
// 1,2.34,567,89  --> 1234567.89
// 1,2.3 4,567,89 --> 1234567.89
// 1,2.3a 4,567,89--> 0
// 12.343         --> 12.343
// 12,34          --> 12.34
// 123            --> 123
 function fmt_num(str) {
var value=0.0;
var x= str.lastIndexOf(".");
var y= str.lastIndexOf(",");
 
 if ( !isNum(str) )
   return(value);


 if ( x == -1  && y == -1 ){
   value = parseInt(str);
   return(value);
 }

 if ( x < y )
    x=y;

 txt1=str.substring(0,x);
 if (txt1 == '') txt1 = '0';
 txt1=replace(txt1,',',''); 
 txt1=replace(txt1,'.',''); 
 txt1=replace(txt1,' ',''); 
   
 txt=txt1+'.'+str.substring(x+1);
 value = (parseInt(txt1) + parseFloat('.'+str.substring(x+1)));

return(value);
}

//-- replace 
function replace(string,pattern,insert) {
 var strLength = string.length, txtLength = pattern.length;

 if ((strLength == 0) || (txtLength == 0)) 
    return string;

 var i = string.indexOf(pattern);
 if ((!i) && (pattern != string.substring(0,txtLength))) 
     return string;
 if (i == -1) 
    return string;

 var newstr = string.substring(0,i) + insert;

 if (i+txtLength < strLength)
    newstr += replace(string.substring(i+txtLength,strLength),pattern,insert);

return newstr;
}


// --- MAIN ---
var descrLength = 16;
var t_she='1';
list = new Array();

// -->
