//função para pegar somente a parte do nome do usuario que voce precisa

// entre [] é vetor, ou seja qual a parte do nome preciso
// vetor começa a contar as partes em 0
// SPLIT indica pra funçao qual o caractere eu vou separar oo
//vetores. no exemplo abaixo o caractere é "espaço"

let userName = getFirstName ("Fernanda Bicalho")

console.log("Seja Bem vindo " + userName)


function getFirstName (name){
    let firstName = name.split(" ")[0]
    return firstName

}
