'use strict';
const ContactTemplate = async (data) => {
  const template = `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Correo de Contacto</title>
</head>

<style>
    /* -------------------------------------
            GLOBAL RESETS
        ------------------------------------- */

    /*All the styling goes here*/

    img {border: none;-ms-interpolation-mode: bicubic;max-width: 100%;width: 50%;margin: 20px;}

    body {background-color: #efefef;font-family: sans-serif;-webkit-font-smoothing: antialiased;font-size: 14px;line-height: 1.4;margin: 0;padding: 0;-ms-text-size-adjust: 100%;webkit-text-size-adjust: 100%;}

    table {border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;}

    table td {font-family: sans-serif;font-size: 14px;vertical-align: top;}

    /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */
    .body {background-color: #efefef;width: 100%;}

    /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
    .container {display: block;margin: 0 auto !important;/* makes it centered */max-width: 580px;padding: 10px;width: 580px;}

    /* This should also be a block element, so that it will fill 100% of the .container */
    .content {box-sizing: border-box;display: block;margin: 0 auto;max-width: 580px;padding: 10px;}

    /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
    .main {background: #ffffff;border-radius: 6px;width: 100%;}

    .wrapper {box-sizing: border-box;padding: 20px;}

    .content-block {padding-bottom: 10px;padding-top: 10px;}

    .footer {clear: both;margin-top: 10px;text-align: center;width: 100%;}

    .footer td,
    .footer p,
    .footer span,
    .footer a {color: #999999;font-size: 12px;text-align: center;}

    /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
    h1,
    h2,
    h3,
    h4 {color: #000000;font-family: sans-serif;font-weight: 400;line-height: 1.4;margin: 0;margin-bottom: 30px;}

    h1 {font-size: 35px;font-weight: 700;text-align: center;text-transform: capitalize;}

    h3 {color: #363895;font-size: 20px;font-weight: 700;text-align: center;}

    p,
    ul,
    ol {font-family: sans-serif;font-size: 16px;font-weight: normal;margin: 0;margin-bottom: 15px;color: #999999;}

    p li,
    ul li,
    ol li {list-style-position: inside;margin-left: 5px;}

    a {color: #3498db;text-decoration: underline;}

    /* -------------------------------------
            BUTTONS
        ------------------------------------- */
    .btn {box-sizing: border-box;width: 100%;}

    .btn>tbody>tr>td {padding-bottom: 15px;}

    .btn table {width: 100%;}

    .btn table td {background-color: #f8981c;border-radius: 40px;text-align: center;cursor: pointer;}

    .btn a {background-color: transparent;border: solid 1px transparent;border-radius: 5px;box-sizing: border-box;color: #3498db;cursor: pointer;display: inline-block;font-size: 14px;font-weight: bold;margin: 0;padding: 12px 25px;text-decoration: none;}

    .btn-primary table td {background-color: #f8981c;}

    .btn-primary a {background-color: transparent;border-color: transparent;color: #ffffff;}

    /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
    .last {margin-bottom: 0;}

    .first {margin-top: 0;}

    .align-center {text-align: center;}

    .align-right {text-align: right;}

    .align-left {text-align: left;}

    .clear {clear: both;}

    .mt0 {margin-top: 0;}

    .mb0 {margin-bottom: 0;}

    .preheader {color: transparent;display: none;height: 0;max-height: 0;max-width: 0;opacity: 0;overflow: hidden;mso-hide: all;visibility: hidden;width: 0;}

    .powered-by a {text-decoration: none;}

    hr {border: 0;border-bottom: 1px solid #f6f6f6;margin: 20px 0;}

    .icon-rrss {width: 15px;}

    .td-icon {width: 80px;cursor: pointer;filter: invert(26%) sepia(60%) saturate(720%) hue-rotate(201deg) brightness(93%) contrast(109%);}

    .td-icon:hover {filter: invert(9%) sepia(30%) saturate(7378%) hue-rotate(236deg) brightness(110%) contrast(104%);}

    /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
    @media only screen and (max-width: 620px) {
        table[class=body] h1 {font-size: 28px !important;margin-bottom: 10px !important;}

        table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important;}

        table[class=body] .wrapper,
        table[class=body] .article {padding: 10px !important;}
        table[class=body] .content {padding: 0 !important;}
        table[class=body] .container {padding: 0 !important;width: 100% !important;}
        table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important;}
        table[class=body] .btn table {width: 100% !important;}
        table[class=body] .btn a {width: 100% !important;}
        table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important;}
    }

    /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
    @media all {
        .ExternalClass {width: 100%;
        }

        .ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%;}

        .apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important;}

        #MessageViewBody a {color: inherit;text-decoration: none;font-size: inherit;font-family: inherit;font-weight: inherit;line-height: inherit;}

        .btn-primary table td:hover {background-color: #d48216 !important;}
    }
</style>


<body class="" style="background-color: #efefef;font-family: sans-serif;-webkit-font-smoothing: antialiased;font-size: 14px;line-height: 1.4;margin: 0;padding: 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;background-color: #efefef;">
        <tr>
            <td style="font-family: sans-serif;font-size: 14px;vertical-align: top;">&nbsp;</td>
            <td class="container" style="font-family: sans-serif;font-size: 14px;vertical-align: top;display: block;max-width: 580px;padding: 10px;width: 580px;margin: 0 auto !important;">
                <div class="content" style="box-sizing: border-box;display: block;margin: 0 auto;max-width: 580px;padding: 10px;">
                     <!-- START CENTERED WHITE CONTAINER -->
                    <table role="presentation" class="main" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;background: #ffffff;border-radius: 6px;">

                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper" style="font-family: sans-serif;font-size: 14px;vertical-align: top;box-sizing: border-box;padding: 20px;">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;">
                                    <tr>
                                        <td style="font-family: sans-serif;font-size: 14px;vertical-align: top;">
    
                                            <h3 style="margin-bottom: 20px;color: #1f8f45;font-family: sans-serif;font-weight: 700;line-height: 1.4;margin: 0;margin-bottom:15px;font-size: 20px;text-align: center;">${data.nombre} (${data.email}) Ha enviado un correo.</h3>

                                            <p style="padding: 0 30px;text-align: center;font-family: sans-serif;font-size: 16px;font-weight: normal;margin: 0;margin-bottom: 15px;color: #999999;"><b>Teléfono: </b>${data.telefono} </p>
                                            <p style="padding: 0 30px;text-align: center;font-family: sans-serif;font-size: 16px;font-weight: normal;margin: 0;margin-bottom: 15px;color: #999999;"><b>Empresa: </b>${data.empresa} </p>
                                            <p style="padding: 0 30px;text-align: center;font-family: sans-serif;font-size: 16px;font-weight: normal;margin: 0;margin-bottom: 15px;color: #999999;"><b>Mensaje: </b>${data.mensaje} </p>
                                            
                                            
                                        </td>

                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- END MAIN CONTENT AREA -->
                    </table>
                    <!-- END CENTERED WHITE CONTAINER -->


                </div>
            </td>
            <td style="font-family: sans-serif;font-size: 14px;vertical-align: top;">&nbsp;</td>
        </tr>
    </table>
</body>

</html>`;

  return template;
}

export default {
  ContactTemplate
};