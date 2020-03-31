import styles from './pdfstyles';
var options = {
  border: {
    // default is 0, units: mm, cm, in, px
    right: '1in',
    left: '1in'
  },
  format: 'Letter'
};
const createPdf = async data => {
  let html = `
  <html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body>
  ${styles.styles}
  <div class="container">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="250" height="250" viewBox="0 0 12000 9000">
  <defs>
    <style>
      .cls-1, .cls-2, .cls-3, .cls-4 {
        font-size: 150.379px;
      }

      .cls-2, .cls-4 {
        fill: #005672;
      }

      .cls-2, .cls-3 {
        text-anchor: middle;
      }

      .cls-2, .cls-5 {
        font-family: "Montserrat";
      }

      .cls-2 {
        text-transform: uppercase;
      }

      .cls-4, .cls-6 {
        font-family: "Montserrat-Bold";
      }

      .cls-4 {
        font-weight: bold;
      }

      .cls-6 {
        fill: #f6554d;
      }

      .cls-7 {
        fill: #fff;
        stroke: #f6554d;
        stroke-linejoin: round;
        stroke-width: 133px;
        filter: url(#color-overlay-1);
        fill-rule: evenodd;
      }
    </style>

    <filter id="color-overlay-1" filterUnits="userSpaceOnUse">
      <feFlood flood-color="#005672"/>
      <feComposite operator="in" in2="SourceGraphic"/>
      <feBlend in2="SourceGraphic" result="solidFill"/>
    </filter>
  </defs>
  <g>
    <text transform="translate(5973 5233) scale(1.76)" class="cls-1"><tspan x="0" class="cls-2">Carga y Logística</tspan></text>
    <text transform="translate(7605 4635) scale(8.08)" class="cls-1"><tspan x="0" class="cls-3"><tspan class="cls-4">TOTAL</tspan><tspan class="cls-5"> <tspan class="cls-6">Envíos</tspan></tspan></tspan></text>
    <g style="fill: #fff; filter: url(#color-overlay-1)">
      <path d="M1417.200,3344.082 L2871.320,3344.082 C3094.549,3344.082 3275.512,3525.045 3275.512,3748.274 L3275.512,5202.394 C3275.512,5425.623 3094.549,5606.586 2871.320,5606.586 L1417.200,5606.586 C1193.971,5606.586 1013.008,5425.623 1013.008,5202.394 L1013.008,3748.274 C1013.008,3525.045 1193.971,3344.082 1417.200,3344.082 Z" id="path-1" style="stroke: inherit; filter: none; fill: inherit" class="cls-7"/>
    </g>
    <use xlink:href="#path-1" style="stroke: #f6554d; filter: none; fill: none"/>
    <image xlink:href="data:img/png;base64,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" x="1455" y="3801" width="1385" height="1316"/>
  </g>
</svg>
    <div class="card red">
      <div class="card-body">
        <h5 class="title">Cálculo estimado</h5>
        <table class='price'>
          <tbody>
            <tr><td>Monto flete</td><td>$${data.montoflete}</td></tr>
            <tr><td>Seguro (${data.valorseguro}%) </td><td>$${
    data.seguro
  }</td></tr>
  <tr><td>Impuesto (${data.valorimpuesto}%) </td><td>$${data.impuesto}</td></tr>
            <tr><td>Otros cargos</td><td>$${data.otroscargos}</td></tr>
            <tr class='totalmonto'><td>Total monto</td><td>$${
              data.totalmonto
            } </td></tr>
            <tr class='metodopago'>
              <td>
                <label>Método de pago</label>
                <p>Comisión ${data.metodonombre} (${
    data.metodotipo === 0 ? data.metodovalor + '%' : '$' + data.metodovalor
  })
                </p>
              </td>
              <td>$${data.metodototal}</td>
            </tr>
          </tbody>
        </table>
        <div class="container total">
          <div class='totalpay'>
            <label>Total a pagar</label>
            <h2>$${data.totalpagar}</h2>
            <p>
              Caja de
              <b>
                ${
                  data.tiposistema
                    ? data.ancho +
                      'cm x ' +
                      data.alto +
                      'cm x ' +
                      data.largo +
                      'cm'
                    : data.ancho +
                      'in x ' +
                      data.alto +
                      'in x ' +
                      data.largo +
                      'in'
                }
              </b>
              <b>${
                data.tipopeso === 'volumetrico' ?
                (data.tiposistema ? 
                  ' y un peso de ' + data.pesolb + 'kg':
                  ' y un peso de ' + data.pesolb + 'lb'):''
              }</b>
              ${
                data.tipoenvio === 1
                  ? ', con un peso ' +
                    data.tipopeso +
                    ' de ' +
                    (data.tiposistema === 1
                      ? data.peso + 'kg'
                      : data.peso + 'in')
                  : (', de ' +data.piescubicos+'pies cúbicos')
              }
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top: 20px;">
      <div class="card-body">
        <div class="container total">
          <div class='totalpay'>
            <label>tiempo estimado de entrega</label><h2>${
              data.tiempoentrega
            }</h2>
          </div>
          <table class="resum">
            <tbody>
              <tr><td>Envío</td><td>${
                data.tipoenvio === 1 ? 'Aéreo' : 'Marítimo'
              }</td></tr>
              <tr><td>País </td><td>${data.pais}</td></tr>
              <tr><td>Estado</td><td>${data.estado}</td></tr>
              <tr><td>Ciudad</td><td>${data.ciudad}</td></tr>
            </tbody>
          </table>
          
          <div class="user_data"><label>Nombre y apellido</label><p>${
            data.nombre
          }</p></div>
          <div class="user_data"><label>Correo eléctronico</label><p>${
            data.correo
          }</p></div>
          <div class="user_data"><label>Empresa</label><p>${
            data.empresa
          }</p></div>
        </div>
      </div>
    </div>
    <p class="end">info@totalenvios.com</p>
    <p class="end">Tel. +1 (754) 236-2131 / +1 (305) 200-5481</p>
    <p class="end">10625 nw 122 st, Medley, Florida, Estados Unidos 33178</p>
    <p class="end">Realiza tus envios ingresando a <a href="http://google.com">nuestra pagina web</a></p>
  </div>
</body>

</html>
  `;
  return {
    html,
    options
  };
};

export default {
  createPdf
};