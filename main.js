// --------------------style body-----------------//
document.body.style.backgroundColor = "rgb(236, 236, 236)";
document.body.style.margin = '0px';
document.body.style.fontFamily ="Tahoma , Arial";

// --------------------  header -----------------//

const header = document.createElement("header");
header.className = "website-head";
header.style.cssText = `
display: flex;
padding: 20px;
background-color: rgb(255 , 255 , 255);
justify-content : space-between;
align-items: center;
`;
                //div header
const div = document.createElement("div");
div.className = "logo";
div.setAttribute("title","website Logo");
div.style.cssText = `
font-weight : bold;
color: rgb(35,169,110);
font-size: 26px;
`
header.appendChild(div);

const nameLogo = document.createTextNode("Fati");
div.appendChild(nameLogo);
                  // ul header
const ul = document.createElement("ul");
ul.className = "menu";
ul.style.cssText =`
padding: 0px;
margin: 0px;
display: flex;
list-style: none;
`



let arrList =["Home","About","Service","Contact"]

for( let i=0; i< 4 ; i++){
  const li = document.createElement("li"); 
  let nav = document.createTextNode(arrList[i]);
  li.style.cssText = `
  margin-left: 10px;
  `;

  li.appendChild(nav);
  ul.appendChild(li);
}
header.appendChild(ul);


// -------------------- content -----------------//
                //div content
const divContent = document.createElement("div");
divContent.className = "content";
divContent.style.cssText = `
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
min-height: calc(100vh - 142px);
box-sizing: border-box;
`
for( let i=0; i< 15 ; i++){
  //div product
  const divPro = document.createElement("div");
  const product = document.createTextNode("Product");
  divPro.className = "product";
  divPro.style.cssText = `
  padding:20px;
  background-color: rgb(221, 221, 221 );
  width: calc((100% - 40px)/3);
  box-sizing: border-box;
  text-align: center;
  color: rgb( 136, 136,136);
  border-raduis: 6px;
  `
                    //span ---> div product
  const span = document.createElement("span");
  span.style.cssText =`
  font-size: 40px;
  color: black;
  font-weight: normal;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  `
  span.append(i+1);
  divPro.appendChild(span);
  divPro.append(product);
  divContent.appendChild(divPro);
}  

// --------------------footer -----------------//

const footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText = `
background-color: rgb( 35, 169 , 110);
font-size: 26px;
text-align: center;
padding: 20px;
color: rgb(255 , 255 ,255);
`
const textFooter = document.createTextNode("Copyright 2021");
footer.appendChild(textFooter);

document.body.prepend(footer);
document.body.prepend(divContent);
document.body.prepend(header);



