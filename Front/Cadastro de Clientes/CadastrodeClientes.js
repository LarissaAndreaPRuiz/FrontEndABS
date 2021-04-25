function createTable1() {
    const elements = [{
            "codigo_cliente": 12345,
            "nome_cliente": "Carlos Roberto",
            "telefone": "4484265132",
            "cidade_estado": "Campinas, SP"
        },
        {
            "codigo_cliente": 54321,
            "nome_cliente": "José Roberto",
            "telefone": "5584862426",
            "cidade_estado": "Jundiaí, SP"
        }
    ];
    let tablehtml = "<table class='table table-striped'>";

    tablehtml += "<thead>";
    tablehtml += "<tr>";
    tablehtml += "  <th>Código do Cliente</th>";
    tablehtml += "  <th>Nome do Cliente</th>";
    tablehtml += "  <th>Telefone</th>";
    tablehtml += "  <th>Cidade / Estado</th>";
    tablehtml += "  <th>Editar</th>";
    tablehtml += "  <th>Remover</th>";
    tablehtml += "</tr>";
    tablehtml += "</thead>";

    for (let element of elements) {
        tablehtml += "<tr>";
        tablehtml += `<td>${element.codigo_cliente}</td>`;
        tablehtml += `<td>${element.nome_cliente}</td>`;
        tablehtml += `<td>${element.telefone}</td>`;
        tablehtml += `<td>${element.cidade_estado}</td>`;
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