/*************************************
xyduane
**************************************
[rewrite_local]

http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(album\/v2\/trackRecord\/queryTrackRecordsByAlbumIdAndUid|queryByParentId).*$ url script-response-body https://raw.githubusercontent.com/xyduane/apptest/main/ximalaya.js
#^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))(queryTrackRecordsByAlbumIdAndUid|album\/trackRecord\/querySampleTrack|album\/trackRecord\/palyTrack).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/xmettk.js

hostname = 113.62.116.232,61.243.13.91,*xima*,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com

*************************************/

let body = $request.body;

body = body.replace(/\"authorized":false/g, '\"authorized":true');
console.log(body)

$done({body});
