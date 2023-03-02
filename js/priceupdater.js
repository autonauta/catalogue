const packages = {
  iluminacion: {
    basic: [
      {
        sysId: "171282",
        quantity: 1,
        service: 25,
      },
      {
        sysId: "171284",
        quantity: 1,
        service: 25,
      },
      {
        sysId: "192924",
        quantity: 5,
        service: 25,
      },
    ],
    mid: [
      {
        sysId: "171282",
        quantity: 2,
        service: 25,
      },
      {
        sysId: "171284",
        quantity: 3,
        service: 25,
      },
      {
        sysId: "192924",
        quantity: 5,
        service: 25,
      },
    ],
    pro: [
      {
        sysId: "171282",
        quantity: 4,
        service: 25,
      },
      {
        sysId: "171284",
        quantity: 6,
        service: 25,
      },
      {
        sysId: "192924",
        quantity: 7,
        service: 25,
      },
    ],
  },
  seguridad: {
    basic: [
      {
        sysId: "191682",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189894",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189881",
        quantity: 1,
        service: 15,
      },
      {
        sysId: "189858",
        quantity: 1,
        service: 10,
      },
      {
        sysId: "189857",
        quantity: 2,
        service: 10,
      },
    ],
    mid: [
      {
        sysId: "191682",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189894",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189881",
        quantity: 1,
        service: 15,
      },
      {
        sysId: "189858",
        quantity: 2,
        service: 10,
      },
      {
        sysId: "189857",
        quantity: 2,
        service: 10,
      },
      {
        sysId: "191817",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189889",
        quantity: 1,
        service: 0,
      },
    ],
    pro: [
      {
        sysId: "191682",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189894",
        quantity: 2,
        service: 30,
      },
      {
        sysId: "189881",
        quantity: 2,
        service: 15,
      },
      {
        sysId: "189858",
        quantity: 3,
        service: 10,
      },
      {
        sysId: "189857",
        quantity: 5,
        service: 10,
      },
      {
        sysId: "191817",
        quantity: 1,
        service: 30,
      },
      {
        sysId: "189889",
        quantity: 2,
        service: 0,
      },
    ],
  },
  vigilancia: {
    basic: [
      {
        sysId: "194832",
        quantity: 1,
        service: 40,
      },
      {
        sysId: "195032",
        quantity: 2,
        service: 50,
      },
      {
        sysId: "204207",
        quantity: 1,
        service: 10,
      },
      {
        sysId: "174448",
        quantity: 1,
        service: 0,
      },
    ],
    mid: [
      {
        sysId: "194832",
        quantity: 1,
        service: 40,
      },
      {
        sysId: "195032",
        quantity: 3,
        service: 50,
      },
      {
        sysId: "204207",
        quantity: 1,
        service: 10,
      },
      {
        sysId: "174448",
        quantity: 1,
        service: 0,
      },
    ],
    pro: [
      {
        sysId: "194832",
        quantity: 1,
        service: 40,
      },
      {
        sysId: "195032",
        quantity: 4,
        service: 50,
      },
      {
        sysId: "204207",
        quantity: 1,
        service: 10,
      },
      {
        sysId: "174448",
        quantity: 1,
        service: 0,
      },
    ],
  },
  conectividad: {
    basic: [
      {
        sysId: "167823",
        quantity: 1,
        service: 50,
      },
    ],
    mid: [
      {
        sysId: "159281",
        quantity: 1,
        service: 75,
      },
    ],
    pro: [
      {
        sysId: "167823",
        quantity: 1,
        service: 50,
      },
      {
        sysId: "159281",
        quantity: 1,
        service: 75,
      },
    ],
  },
  videoportero: {
    basic: [
      {
        sysId: "190988",
        quantity: 1,
        service: 50,
      },
      {
        sysId: "170761",
        quantity: 1,
        service: 25,
      },
    ],
    mid: [
      {
        sysId: "190988",
        quantity: 1,
        service: 50,
      },
      {
        sysId: "170761",
        quantity: 2,
        service: 25,
      },
    ],
    pro: [
      {
        sysId: "190988",
        quantity: 1,
        service: 50,
      },
      {
        sysId: "170761",
        quantity: 3,
        service: 25,
      },
    ],
  },
  tax: 1.16,
  markup: 0.45,
  markupClient: 0.15,
};
var packagePrices = {
  iluminacion: {
    pro: 0,
    mid: 0,
    basic: 0,
  },
  seguridad: {
    pro: 0,
    mid: 0,
    basic: 0,
  },
  vigilancia: {
    pro: 0,
    mid: 0,
    basic: 0,
  },
  conectividad: {
    pro: 0,
    mid: 0,
    basic: 0,
  },
  videoportero: {
    pro: 0,
    mid: 0,
    basic: 0,
  },
};
const iluminacionPro = document.getElementById("iluminacion-pro");
const iluminacionMid = document.getElementById("iluminacion-mid");
const iluminacionBasic = document.getElementById("iluminacion-basic");
//SEGURIDAD ELEMENTS
const seguridadPro = document.getElementById("seguridad-pro");
const seguridadMid = document.getElementById("seguridad-mid");
const seguridadBasic = document.getElementById("seguridad-basic");
//VIGILANCIA ELEMENTS
const vigilanciaPro = document.getElementById("vigilancia-pro");
const vigilanciaMid = document.getElementById("vigilancia-mid");
const vigilanciaBasic = document.getElementById("vigilancia-basic");
//VIDEOPORTERO ELEMENTS
const videoporteroPro = document.getElementById("videoportero-pro");
const videoporteroMid = document.getElementById("videoportero-mid");
const videoporteroBasic = document.getElementById("videoportero-basic");
//CONECTIVIDAD ELEMENTS
const conectividadPro = document.getElementById("conectividad-pro");
const conectividadMid = document.getElementById("conectividad-mid");
const conectividadBasic = document.getElementById("conectividad-basic");

const category = [
  "iluminacion",
  "seguridad",
  "vigilancia",
  "videoportero",
  "conectividad",
];
const version = ["pro", "mid", "basic"];

// FUNCTIONS
async function getProducts() {
  try {
    const response = await fetch("https://arq.highdatamx.com/api/v1/products");
    const res = await response.json();
    if (!res) console.log("No products received");
    else {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
}

function createPricelist(products) {
  let priceList = {
    iluminacion: {},
    seguridad: {},
    vigilancia: {},
    videoportero: {},
    conectividad: {},
    musica: {},
  };
  for (let i = 0; i < products.length; i++) {
    const category = products[i].category;
    const sysId = products[i].sysId;
    const price = products[i].price;
    priceList[category][sysId] = price;
  }
  return priceList;
}

async function calculatePackages(pl, pk) {
  for (let i = 0; i < category.length; i++) {
    for (let j = 0; j < version.length; j++) {
      for (let k = 0; k < pk[category[i]][version[j]].length; k++) {
        //----------- ACTION ----------------------
        const cat = category[i];
        const ver = version[j];
        const sysId = pk[cat][ver][k].sysId;
        const quantity = pk[cat][ver][k].quantity;
        //Price of packages including service fee and markup and markup of client
        packagePrices[cat][ver] +=
          pk.tax *
          quantity *
          (pl[cat][sysId] * (1 + pk.markup) + pk[cat][ver][k].service);
        //Adds clients markup at the end of the array
        if (k === pk[category[i]][version[j]].length - 1) {
          packagePrices[cat][ver] *= 1 + pk.markupClient;
        }
        //--------- END ACTION
      }
    }
  }
  return packagePrices;
}

async function populate(upk) {
  iluminacionPro.innerHTML = "$ " + upk.iluminacion.pro.toFixed() + " USD";
  iluminacionMid.innerHTML = "$ " + upk.iluminacion.mid.toFixed() + " USD";
  iluminacionBasic.innerHTML = "$ " + upk.iluminacion.basic.toFixed() + " USD";
  seguridadPro.innerHTML = "$ " + upk.seguridad.pro.toFixed() + " USD";
  seguridadMid.innerHTML = "$ " + upk.seguridad.mid.toFixed() + " USD";
  seguridadBasic.innerHTML = "$ " + upk.seguridad.basic.toFixed() + " USD";
  vigilanciaPro.innerHTML = "$ " + upk.vigilancia.pro.toFixed() + " USD";
  vigilanciaMid.innerHTML = "$ " + upk.vigilancia.mid.toFixed() + " USD";
  vigilanciaBasic.innerHTML = "$ " + upk.vigilancia.basic.toFixed() + " USD";
  videoporteroPro.innerHTML = "$ " + upk.videoportero.pro.toFixed() + " USD";
  videoporteroMid.innerHTML = "$ " + upk.videoportero.mid.toFixed() + " USD";
  videoporteroBasic.innerHTML =
    "$ " + upk.videoportero.basic.toFixed() + " USD";
  conectividadPro.innerHTML = "$ " + upk.conectividad.pro.toFixed() + " USD";
  conectividadMid.innerHTML = "$ " + upk.conectividad.mid.toFixed() + " USD";
  conectividadBasic.innerHTML =
    "$ " + upk.conectividad.basic.toFixed() + " USD";
  return 1;
}
// EN OF FUNCTIONS
//MAIN FUNCTION
async function main() {
  //Connect to HighData API to get the products of the proyect
  let products = await getProducts();
  //Create relationship of price and ID with createPriceList function
  let priceList = createPricelist(products);
  //create the package prices with calculatePackages function
  let updatedPackages = await calculatePackages(priceList, packages);
  console.log(JSON.stringify(updatedPackages, null, 4));
  const elements = await populate(updatedPackages);
  if (elements === 1)
    console.log("Elements: " + JSON.stringify(elements, null, 4));
}
//EXECUTING THE MAIN FUNCTION
main();
