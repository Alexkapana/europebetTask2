var numJewelsInStones=function (J,S){
    let map={};
    let output=0;
    
    for(let i=0; i<J.length;i++){
        map[J[i]]=true;
    }
    
    for(let j=0; j<S.length;j++){
        if(map[S[j]]===true){
            output++;
        }
    }
    
    return output;
    };
    
console.log(numJewelsInStones("aa","Aa"));