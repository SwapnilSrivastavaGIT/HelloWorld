
//Event handler on before and after 

module.exports=(cap)=>(cap.on('hello', req=>'Hello ${req.data.name}'));
//cap.on('hello', req=>'Hello ${req.data.to}');

