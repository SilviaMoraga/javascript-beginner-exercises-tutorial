
function sing(){
    let est = [];
    for (let i = 0; i < 4; i++){
        est.push("let it be,");
    }
    est.push("there will be an answer, let it be,");
    for (let i = 0; i < 4; i++){
        est.push("let it be,");
    }
    est.push("whisper words of wisdom, let it be");
    return est.join(" ").trim();
}

console.log(sing());