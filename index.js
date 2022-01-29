function loadjson(file,callback){
    var xhr= new XMLHttpRequest();
    xhr.open("GET",file,true)
    xhr.overrideMimeType("application/json");
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null)
}
loadjson.json("data.json",function(text){

    var data = JSON.parse(text);
    console.log(data)
    }

)