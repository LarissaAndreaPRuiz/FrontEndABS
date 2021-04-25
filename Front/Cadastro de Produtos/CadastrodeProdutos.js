function createTable1() {
    const elements = [{
            "codigo_produto": 123,
            "descricao_produto": "produtoA",
            "preco_venda": "1.023,54",
        },
        {
            "codigo_produto": 321,
            "descricao_produto": "produtoB",
            "preco_venda": "2.024,55",
        }
    ];
    let tablehtml = "<table class='table table-striped'>";

    tablehtml += "<thead>";
    tablehtml += "<tr>";
    tablehtml += "  <th>Código do Produto</th>";
    tablehtml += "  <th>Descrição do Produto</th>";
    tablehtml += "  <th>Preço de Venda</th>";
    tablehtml += "  <th>Editar</th>";
    tablehtml += "  <th>Remover</th>";
    tablehtml += "</tr>";
    tablehtml += "</thead>";

    for (let element of elements) {
        tablehtml += "<tr>";
        tablehtml += `<td>${element.codigo_produto}</td>`;
        tablehtml += `<td>${element.descricao_produto}</td>`;
        tablehtml += `<td>${element.preco_venda}</td>`;
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