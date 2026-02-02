// ----------------------------------------------------------------------------------------------

const inicioH = document.getElementById('inicioH') // palavra inicio do header
const inicio = document.getElementById('inicio') // div que o auto scroll puxa para o inicio

const sobreH = document.getElementById('sobreH') // palavra sobre do header
const sobre = document.getElementById('sobre') // div que o auto scroll puxa para o sobre
const sobreText = document.getElementById('sobreText') // texto do sobre

const servicoH = document.getElementById('servicoH') // palavra servico do header
const servico = document.getElementById('servico') // div que o auto scroll puxa para o servico
const contServ = document.getElementById('contServ') // div utilizada para trocar a cor do header

const equipeH = document.getElementById('equipeH') // palavra equipe do header
const equipe = document.getElementById('equipe') // div que o auto scroll puxa para a equipe
const contEquipe = document.getElementById('contEquipe') // div utilizada para trocar a cor do header

// ---------------------------------------------------------------------------------------------- OBSERVER


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            switch (entry.target.id) {
                case 'inicio':
                    inicioH.style.color = "#d49b9b";
                    break
                case 'sobreText':
                    sobreH.style.color = "#d49b9b";
                    break
                case 'contServ':
                    servicoH.style.color = "#d49b9b";
                    break
                case 'contEquipe':
                    equipeH.style.color = "#d49b9b";
                    break
            }

        } else {
            switch (entry.target.id) {
                case 'inicio':
                    inicioH.style.color = "#424141";

                    break;
                case 'sobreText':
                    sobreH.style.color = "#424141";
                    break;
                case 'contServ':
                    servicoH.style.color = "#424141";
                    break;
                case 'contEquipe':
                    equipeH.style.color = "#424141";
                    break;
            }
        }
    }) 
}, { threshold: 0.5 });
observer.observe(inicio)
observer.observe(sobreText)
observer.observe(contServ)
observer.observe(contEquipe)

// ---------------------------------------------------------------------------------------------- SCROLL


function rolarServico(local) {
    local.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}