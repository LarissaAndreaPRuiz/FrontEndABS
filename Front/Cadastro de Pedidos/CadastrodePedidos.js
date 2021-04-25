function createTable1() {
    const elements = [{
            "codigo_cliente": 12345,
            "codigo_produto": "123",
            "data_entrega": "10/03/2021",
        },
        {
            "codigo_cliente": 54321,
            "codigo_produto": "321",
            "data_entrega": "15/02/2021",
        }
    ];
    let tablehtml = "<table class='table table-striped'>";

    tablehtml += "<thead>";
    tablehtml += "<tr>";
    tablehtml += "  <th>Código do Cliente</th>";
    tablehtml += "  <th>Código do Produto</th>";
    tablehtml += "  <th>Data de Entrega</th>";
    tablehtml += "  <th>Status do Pedido</th>";
    tablehtml += "  <th>Editar</th>";
    tablehtml += "  <th>Remover</th>";
    tablehtml += "</tr>";
    tablehtml += "</thead>";

    for (let element of elements) {
        tablehtml += "<tr>";
        tablehtml += `<td>${element.codigo_cliente}</td>`;
        tablehtml += `<td>${element.codigo_produto}</td>`;
        tablehtml += `<td>${element.data_entrega}</td>`;
        tablehtml += `<td><select class="form-select" aria-label="selecione o tipo de pessoa"><option selected>Selecione a opção</option><option value="1">PJ</option><option value="2">PF</option></select></td>`;
        tablehtml += `<td><button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editardados">Editar</button></td>`;
        tablehtml += `<td><button  type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#excluirdados">Excluir</button></td>`;
        tablehtml += "</tr>";
    }


    tablehtml += "</table>";

    document.getElementById("tablediv").innerHTML = tablehtml;
}
window.onload = function() {
    createTable1()
}