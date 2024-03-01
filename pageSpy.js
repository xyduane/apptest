/******************************

脚本功能：增加pygeSpy调试

*******************************
[mitm]
hostname = wx.rtfund.com

[rewrite_local]
^https://wx.rtfund.com/gbusweb/msitepro/$ url script-response-body https://raw.githubusercontent.com/xyduane/apptest/main/pageSpy.js
*******************************/


var body = $response.body;

if (body) {
  body = body.replace('</head>',`<script crossorigin="anonymous" src="https://warp.xylucky.top/page-spy/index.min.js"></script>
<script>
  window.$pageSpy = new PageSpy();
</script>
</head>`)
  $done({ body: body });
} else {
  $done({})
}
