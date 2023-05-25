let body = $request.body;

body = body.replace(/\"authorized":false/g, '\"authorized":true');
console.log(body)

$done({body});
