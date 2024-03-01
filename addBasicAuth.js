var modifiedHeaders = $request.headers;
modifiedHeaders['Authorization'] = 'Basic eHl1bjoxMTEx';

$done({headers: modifiedHeaders});
