( ()=>{const criarEvento= (evento)=>{    
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const txt = input.value;
    

    const lista = document.querySelector('[data-list]');
    const conteudo = `<p class="content">${txt}</p>`
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = conteudo;
    task.appendChild(botaoConcluir());
    task.appendChild(botDeleta());
    lista.appendChild(task);
    input.value=" ";
    

}

const tarefa = document.querySelector('[data-form-button]');  

tarefa.addEventListener('click', criarEvento);

const botaoConcluir = ()=>
{
    
    const bt = document.createElement('button');
    bt.classList.add('check-button');
    bt.innerText = 'concluir';
    bt.addEventListener('click',concluirTarefa)
    return bt;
}

const concluirTarefa = (evento)=>
{
    const botaoConcluir = evento.target;

    const tarefaCompleta = botaoConcluir.parentElement;

    tarefaCompleta.classList.toggle('done');
}
const botDeleta = ()=>
{
    const botDeleta = document.createElement('button');
    botDeleta.innerText = 'deletar';
    botDeleta.addEventListener('click', deletarTarefa)
    return botDeleta;
}

const deletarTarefa = (evento)=>
{
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    return botDeleta;
}
})()