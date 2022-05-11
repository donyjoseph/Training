var http = require('http');
http.createServer(function (req, res) {
    var num=5;
    var count=6;
    var result = ''; 
    //forloop upto count
    for(let i=0;i<count;i++){
        //forloop upto current i
        for(let j=0;j<i;j++){
            //result add num + ' '
            result+=num+' ';
        }
        result+='<br />';
    }

    res.write(result); //
    res.end();
    
}).listen(5050); 