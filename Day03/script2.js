var req=new XMLHttpRequest()
req.open("GET","https://restcountries.com/v3.1/all")
req.send()
req.onload=function(){
    res=JSON.parse(req.response)
    for(let i in res){
        console.log(res[i].flags.png)
    }
}