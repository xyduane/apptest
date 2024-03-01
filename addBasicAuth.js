
/******************************

脚本功能：增加认证用户

*******************************
[mitm]
hostname = www.rtfund.com,wx.rtfund.com

[rewrite_local]
^https://wx.rtfund.com/gbusweb/msitepro/$ url script-response-body https://raw.githubusercontent.com/xyduane/apptest/main/addBasicAuth.js
*******************************/

var modifiedHeaders = $request.headers;
modifiedHeaders['Authorization'] = 'Basic eHl1bjoxMTEx';

$done({headers: modifiedHeaders});
