function validarFormulario(event) {
    // Previne o envio do formulário para processar via JavaScript
    event.preventDefault();
    
    // Captura os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Verifica se os campos estão preenchidos
    if (nome && email && assunto && mensagem) {
        // Exibe o alerta
        alert('Formulário enviado com sucesso!');
        
        // Aqui você pode enviar os dados para o servidor ou redirecionar para outra página
        // Exemplo de redirecionamento após o alerta:
        // window.location.href = "pagina_de_sucesso.html"; // Descomente esta linha para redirecionar
        
        // Limpar o formulário (opcional)
        document.querySelector("form").reset(); 
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}