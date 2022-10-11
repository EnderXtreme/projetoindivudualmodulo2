letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
mensagem = prompt("escreva a mensagem").toLowerCase()

chave = prompt("Informe a chave")
x = parseInt(chave)
crip = []

for ( index = 0; index < mensagem.length; index++) {
    if(mensagem[index]!=" ")
    {
        for (j=0;j<letras.length;j++)
        {
            if (mensagem[index]==letras[j])
            {
                crip[index]=letras[(j+x)%letras.length]
                break
            }
        }
    }
    else
    {
        crip[index]=" "
    }
}

alert(crip.join(""))