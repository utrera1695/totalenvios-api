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
    <h4 class="brand" style=" text-align: center;
    margin-bottom: 20px;
    color: #fc3c3d;"><div>Total</div>Envios</h4>
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
              </b>${
                data.tipoenvio === 1
                  ? 'con un peso ' +
                    data.tipopeso +
                    ' de ' +
                    (data.tiposistema === 1
                      ? data.peso + 'kg'
                      : data.peso + 'in')
                  : ''
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
    <p class="end">Realiza tus envios ingresando a <a href="http://google.com">nuestra pagina web</a> o utilizando <a href="http://google.com">nuestra app</a> </p>
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