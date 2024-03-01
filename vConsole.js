
/******************************

脚本功能：增加console调试

*******************************
[mitm]
hostname = wx.rtfund.com

[rewrite_local]
^https://wx.rtfund.com/gbusweb/msitepro/$ url script-response-body https://raw.githubusercontent.com/xyduane/apptest/main/vConsole.js
*******************************/


var body = $response.body;

if (body) {
  body = body.replace('</head>',`<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
  var vConsole = new window.VConsole();
</script>
</head>`)
  $done({ body: body });
} else {
  $done({})
}
