var result=document.getElementById("result").value



    function getNumb(num){
        // document.getElementById("result").value+=num
        document.getElementById("result").value+=num
    
    
    }
    
    
    function clearNum(){
        document.getElementById("result").value=" "
        // console.log("djodh")
    }
    
    function getResult(){
    
    document.getElementById("result").value= eval(document.getElementById("result").value)
    
    }