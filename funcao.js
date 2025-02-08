// nomes de funçoes nao pode começar com numeros.

hamburguer ("Hamburguer Completo", "Flávio")
hamburguer ("Xtudo", "Fernanda")

// hb e nome dentro dos parenteses abaixo são variavies da função hamburguer, sem a necessidade
// de declarar let.
// nome = cliente é caso a função nao tenha nome do cliente.
function  hamburguer(hb, nome = "Cliente"){
    console.log("O pedido do " + hb)
    console.log("É do(a) cliente, " + nome)


}

