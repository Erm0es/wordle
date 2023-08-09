
const response = (inputWord, outputWord) => {
    let input = inputWord.toUpperCase();
    let output = outputWord.toUpperCase();

    for (let i = 0; i < input.length && output.length; i++) {
        console.log(input[i], output[i]);

        if(input[i] == output[i]){
            console.log("RÄTT");
        }
    }
}  


response("Emelie", "Emelie");
export default response;











