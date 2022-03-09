function verify() {
    const data = new Date()
    const currentYear = data.getFullYear()
    const bornYear = document.getElementById("born").value
    const result = document.getElementById("result")

    if(!bornYear) {
        alert("Ano não informado, digite o ano de nascimento")
     } else if(bornYear > currentYear) {
        alert("Ano informado maior que ano atual, digite um ano válido")          
    } else { 
        const sex = document.getElementsByName("sex")
        let age = Number(currentYear - bornYear)
        let imgResult = document.getElementById("imgResult")
        let paragraphResult = document.getElementById("paragraphResult")
        let gender = ""       

        if(sex[0].checked) {
            gender = "masculino"
            if(age < 13) {
                imgResult.src = "./img/criança-masculino.jpg"
            } else if (age < 19) {
                imgResult.src = "./img/jovem-masculino.jpg"
            } else if(age < 60) {
                imgResult.src = "./img/adulto.jpg"
            } else {
                imgResult.src = "./img/idoso.jpeg"
            }
            }
            if(sex[1].checked) {
                gender = "feminino"
                if(age < 13) {
                    imgResult.src = "./img/criança-feminino.jpg"
                } else if (age < 19) {
                    imgResult.src = "./img/jovem-feminino.jpg"
                } else if(age < 60) {
                    imgResult.src = "./img/adulta.jpg"
                } else {
                    imgResult.src = "./img/idosa.jpeg"
                }
            }
        paragraphResult.textContent = `Detectamos pessoa do sexo ${gender} de ${age} anos.`        
        result.appendChild(paragraphResult)
        result.appendChild(imgResult)
        }           
}          