var shelly = $("#shelly");
var shelly2 = $("#shelly2");
var shellyDimm = $("#shellydimm");
var totalIluminacion = $("#total-iluminacion");
var instalacion = $("#instalacion");

const iluminacionId = ["171282", "171284", "192924"];
var iluminacionPrices = [];
var paqueteIluminacion = {
  shelly1: 1,
  shelly2: 1,
  shellyDimm: 5,
  instalacion: 0,
  shelly1Price: 0,
  shelly2Price: 0,
  shellyDimmPrice: 0,
  totalPrice: 0,
};

async function refresh() {
  const resTipoCambio = await fetch(
    "https://developers.syscom.mx/api/v1/tipocambio",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY2MWIzYjE2NTBjMzA4ZDFlYzU2NWJhYTZjZDdjMmZjOTJhN2I3NWIzNDZkMGVkZDAxMDVjNGJhZmJlODJiMDY4MGJlOGNjZTlmYzQ1MDM3In0.eyJhdWQiOiJrOGlWTVoxQ2traWRveE14bE9QQm1KOGM0Wk80YmJrRSIsImp0aSI6ImY2MWIzYjE2NTBjMzA4ZDFlYzU2NWJhYTZjZDdjMmZjOTJhN2I3NWIzNDZkMGVkZDAxMDVjNGJhZmJlODJiMDY4MGJlOGNjZTlmYzQ1MDM3IiwiaWF0IjoxNjY4NTQxODU3LCJuYmYiOjE2Njg1NDE4NTcsImV4cCI6MTcwMDA3Nzg1Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.t-1qkhVeL_2n-SFLwyuz5Dy-FHdPIAg3rD_z5yarjAxFquz-nbqb2vHXu_fgOXwHAPZJOKDc60Vm2VnsymXmu2nZ6pb1MMyBBsjeuzC4j6cY-9OT2V_HMQ3Ym7fYoKTe7IahlObelTi3oQ31AOE57KxXlyeaVo8B7qS0aQjpGt2Icdt9CIWReR3z_k57XCWcDH_220iNPC7FRFq89vHeoBcs26z7kZmdNZxjaryjGTiS1rXLCGt-WEYEmA5ZGXMEncokV7SnCTpDgSJqaeEvTAp--nF2V0oghtQiFhG30swPDU4ZmICH02ucbeVK-YQ7ZhHXN1Fnayuzumf4wdoOSGvHDrwPmY66AF9WhHbpTAJf9vaO7kImwtU1SLehLtdvtVB7bEMFMfqUXef3_Mz70siUd__2iKcGIb7Dm2eyEM5WXMRgYaexXFdwEvrKAmgZS8SmCmz0ZD_nH4D1WEmwesnYuuY-6PixcgBQZOM6IAPsvAgVAXUSWS5kN0h_7aiR5bRk5KFVMYw0r2OTZMx6u5i7Yqdjr5c1YxrB8XyojHu4itqz-kAtUUJIEiND3Iq9s5gt_kO-EO-cYQE-ckNFT4WxCO4OpoCkQK15xLyHb-CekZoWVJyEMRV3vbIZiJo_x_d3-NE9TK7lHyapfiK6Qat3AgBQ2MkNE4Pc_BVZCmM",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  const tipoCambio = await resTipoCambio.json();
  if (tipoCambio) {
    const res = await fetch(
      `https://developers.syscom.mx/api/v1/productos/${iluminacionId[0]},${iluminacionId[1]},${iluminacionId[2]}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY2MWIzYjE2NTBjMzA4ZDFlYzU2NWJhYTZjZDdjMmZjOTJhN2I3NWIzNDZkMGVkZDAxMDVjNGJhZmJlODJiMDY4MGJlOGNjZTlmYzQ1MDM3In0.eyJhdWQiOiJrOGlWTVoxQ2traWRveE14bE9QQm1KOGM0Wk80YmJrRSIsImp0aSI6ImY2MWIzYjE2NTBjMzA4ZDFlYzU2NWJhYTZjZDdjMmZjOTJhN2I3NWIzNDZkMGVkZDAxMDVjNGJhZmJlODJiMDY4MGJlOGNjZTlmYzQ1MDM3IiwiaWF0IjoxNjY4NTQxODU3LCJuYmYiOjE2Njg1NDE4NTcsImV4cCI6MTcwMDA3Nzg1Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.t-1qkhVeL_2n-SFLwyuz5Dy-FHdPIAg3rD_z5yarjAxFquz-nbqb2vHXu_fgOXwHAPZJOKDc60Vm2VnsymXmu2nZ6pb1MMyBBsjeuzC4j6cY-9OT2V_HMQ3Ym7fYoKTe7IahlObelTi3oQ31AOE57KxXlyeaVo8B7qS0aQjpGt2Icdt9CIWReR3z_k57XCWcDH_220iNPC7FRFq89vHeoBcs26z7kZmdNZxjaryjGTiS1rXLCGt-WEYEmA5ZGXMEncokV7SnCTpDgSJqaeEvTAp--nF2V0oghtQiFhG30swPDU4ZmICH02ucbeVK-YQ7ZhHXN1Fnayuzumf4wdoOSGvHDrwPmY66AF9WhHbpTAJf9vaO7kImwtU1SLehLtdvtVB7bEMFMfqUXef3_Mz70siUd__2iKcGIb7Dm2eyEM5WXMRgYaexXFdwEvrKAmgZS8SmCmz0ZD_nH4D1WEmwesnYuuY-6PixcgBQZOM6IAPsvAgVAXUSWS5kN0h_7aiR5bRk5KFVMYw0r2OTZMx6u5i7Yqdjr5c1YxrB8XyojHu4itqz-kAtUUJIEiND3Iq9s5gt_kO-EO-cYQE-ckNFT4WxCO4OpoCkQK15xLyHb-CekZoWVJyEMRV3vbIZiJo_x_d3-NE9TK7lHyapfiK6Qat3AgBQ2MkNE4Pc_BVZCmM",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const response = await res.json();
    if (response) {
      console.log(response);
      const precioShelly = response[0].precios.precio_descuento;
      const precioShelly2 = response[1].precios.precio_descuento;
      const precioShellyDimm = response[2].precios.precio_descuento;
      paqueteIluminacion.shelly1Price = (Number(precioShelly) * 1.3).toFixed(2);
      paqueteIluminacion.shelly2Price = (Number(precioShelly2) * 1.3).toFixed(
        2
      );
      paqueteIluminacion.shellyDimmPrice = (
        Number(precioShellyDimm) * 1.3
      ).toFixed(2);
      paqueteIluminacion.instalacion =
        (paqueteIluminacion.shelly1 +
          paqueteIluminacion.shelly2 +
          paqueteIluminacion.shellyDimm) *
        250;
      paqueteIluminacion.totalPrice = (
        ((paqueteIluminacion.shelly1Price * paqueteIluminacion.shelly1 +
          paqueteIluminacion.shelly2Price * paqueteIluminacion.shelly2 +
          paqueteIluminacion.shellyDimmPrice * paqueteIluminacion.shellyDimm) *
          tipoCambio.normal +
          paqueteIluminacion.instalacion) *
        1.16
      ).toFixed(2);
      shelly.html(`$${paqueteIluminacion.shelly1Price} USD`);
      shelly2.html(`$${paqueteIluminacion.shelly2Price} USD`);
      shellyDimm.html(`$${paqueteIluminacion.shellyDimmPrice} USD`);
      instalacion.html(`$${paqueteIluminacion.instalacion} MXN`);
      totalIluminacion.html(`$${paqueteIluminacion.totalPrice} MXN`);
    } else {
      console.log("error");
    }
  }
}
