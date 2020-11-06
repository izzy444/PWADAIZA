$(document).ready(function() {

    $('.btn-botaozin').click(function(e) {
        e.preventDefault()

        var cep = $('#numCep').val()
        var pesquisar = `https://viacep.com.br/ws/${cep}/json/`

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: pesquisar,
            success: function(dados) {
                $('#logradouro').val(dados.logradouro)
                $('#localidade').val(dados.localidade)
                $('#bairro').val(dados.bairro)
                $('#estado').val(dados.estado)
            }
        })

    })

})