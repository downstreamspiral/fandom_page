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

const selectedcountry = document.querySelectorAll(".countryselect");
selectedcountry.forEach(item => {
    item.addEventListener("click", function () {
        const activecountry = this.textContent;
        renderTankList(activecountry);
    });
});


async function fetchData() {
    let catchJson = await fetch('info/render.json');
    return await catchJson.json();
}


async function renderTankList(activecountry) {
    const recievedData = await fetchData();
    const tankListEl = document.querySelector(".tank-list ul");

    // get the keys for the selected country e.g ["T90A", "T72B", ...]
    const tankKeys = Object.keys(recievedData[activecountry]);

    // clear old list items and rebuild
    tankListEl.innerHTML = "";

    tankKeys.forEach(key => {
        const li = document.createElement("li");
        li.textContent = recievedData[activecountry][key].Tankname; // display friendly name
        li.classList.add("tank-item");
        li.dataset.tankKey = key; // store the key for lookup

        li.addEventListener("click", function () {
            // remove active class from all items then set on clicked
            document.querySelectorAll(".tank-item").forEach(t => t.classList.remove("active-tank"));
            this.classList.add("active-tank");

            renderMedia(activecountry, key);
        });

        tankListEl.appendChild(li);
    });


    if (tankKeys.length > 0) {
        tankListEl.firstChild.classList.add("active-tank");
        renderMedia(activecountry, tankKeys[0]);
    }
}


async function renderMedia(activecountry, tankoption) {
    const recievedData = await fetchData();
    const tank = recievedData[activecountry][tankoption];

    // image and video render
    showimageone.setAttribute("src", tank.img);
    showimagetwo.setAttribute("src", tank.img2);
    showvid.setAttribute("src", `https://www.youtube.com/embed/${tank.videoemb}`);

    // text render
    tankname.textContent = tank.Tankname;
    countryname.textContent = tank.Countryname;
    tanktype.textContent = tank.Tanktype;
    servicetype.textContent = tank.Service;
    companyname.textContent = tank.Companyname;
    caliber.textContent = tank.caliber;
    penTank.textContent = tank.pen;
    armorTurret.textContent = tank.tarmor;
    armorHull.textContent = tank.harmor;
}

renderTankList("Russia");