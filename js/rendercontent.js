let showimageone = document.getElementById('image1');
let showimagetwo = document.getElementById('image2');
let showvid = document.getElementById('videoplayer');

// text render

let tankname = document.getElementById('Tname');
let countryname = document.getElementById('cname');
let tanktype = document.getElementById('typeT');
let servicetype = document.getElementById('serviceT');
let companyname = document.getElementById('Tcompany');
let caliber = document.getElementById('caliberT');
let penTank = document.getElementById('penT');
let armorTurret = document.getElementById('armorTT');
let armorHull = document.getElementById('armorHT');

// function renderCountry(id) {



//     const renderData = fetch("info/render.json").then(Response => Response.json())

//     const container = document.getElementById("videoplayer");

//     container.src = renderData.videoemb;

// }

async function renderMedia() {

    let catchJson = await fetch('info/render.json');
    let recievedData = await catchJson.json();

    let activecountry = "Russia"; // holds object under a countryname
    // change tank name dynamically
    let tankoption = "T90A"; // holds keys under a tank name

    // console.log(recievedData);
    // console.log(activecountry);
    // console.log(tankoption);
    // console.log(recievedData[activecountry][tankoption].img);
    // console.log(recievedData.Russia.Tankname);


    // image and video render
    showimageone.setAttribute("src", recievedData[activecountry][tankoption].img);
    showimagetwo.setAttribute("src", recievedData[activecountry][tankoption].img2);
    showvid.setAttribute("src", `https://www.youtube.com/embed/${recievedData[activecountry][tankoption].videoemb}`);

    // text render
    tankname.textContent = recievedData[activecountry][tankoption].Tankname;
    countryname.textContent = recievedData[activecountry][tankoption].Countryname;
    tanktype.textContent = recievedData[activecountry][tankoption].Tanktype;
    servicetype.textContent = recievedData[activecountry][tankoption].Service;
    companyname.textContent = recievedData[activecountry][tankoption].Companyname;

    caliber.textContent = recievedData[activecountry][tankoption].caliber;
    penTank.textContent = recievedData[activecountry][tankoption].pen;
    armorTurret.textContent = recievedData[activecountry][tankoption].tarmor;
    armorHull.textContent = recievedData[activecountry][tankoption].harmor;






}

renderMedia();


