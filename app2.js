function countVowels(string){
    let count=0;
    for (const char of string){
        // char=char.toLowerCase();
        if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count=count+1;   
        }
    }
        
    console.log(count);

}
countVowels("apna college");
