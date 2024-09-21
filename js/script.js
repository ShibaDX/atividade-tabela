// cria o array com informações dos clientes
const clientes = [
    {
        id: 1,
        nome: "Ana Clara Souza",
        cpf: "123.456.789-00",
        email: "ana.souza@example.com"
    },
    {
        id: 2,
        nome: "João Pedro Lima",
        cpf: "987.654.321-11",
        email: "joao.lima@example.com"
    },
    {
        id: 3,
        nome: "Beatriz Ferreira",
        cpf: "111.222.333-44",
        email: "beatriz.ferreira@example.com"
    },
    {
        id: 4,
        nome: "Carlos Alberto Santana",
        cpf: "555.666.777-88",
        email: "carlos.santana@example.com"
    },
]

// pega o elemento da tabela
const table = document.getElementById('table');

// constante com o elemento body da tabela
const tableBody = document.getElementById('tableBody');

// A função forEach é um loop que percorre todos os elementos do array clientes, permitindo acessar cada propriedade do array
// Em cada repetição, ele irá preencher apenas uma linha, ou seja, irá inserir todas as informações do cliente 1, e após terminar,
// começará a inserir informações do cliente 2, e assim por diante, até chegar no último cliente do array.
clientes.forEach(
    function (item) {
        var row = document.createElement("tr"); // cria uma nova linha em cada atributo do array
        var idCell = document.createElement("td"); // cria uma coluna para o atributo ID
        idCell.textContent = item.id; // a propriedade textContent define o conteúdo de texto da célula, puxando as informações do array e colocando na coluna ID

        row.appendChild(idCell); // Aqui você está dizendo que essa coluna (idCell) deve ser adicionada como uma "filha" da linha atual (<tr>).
        //Cada linha da tabela (<tr>) pode ter várias células (<td>), e neste caso, você está adicionando a célula de nome à linha.

        //O mesmo processo se repete em cada atributo do array
        var nomeCell = document.createElement("td"); 
        nomeCell.textContent = item.nome;
        row.appendChild(nomeCell);

        var cpfCell = document.createElement("td");
        cpfCell.textContent = item.cpf;
        row.appendChild(cpfCell);

        var emailCell = document.createElement("td");
        emailCell.textContent = item.email;
        row.appendChild(emailCell);

        tableBody.appendChild(row); // após terminar de inserir as informações em cada célula, ele cria a linha (tr) e termina o loop
        // e caso ainda haja mais clientes, prosseguirá até encerrar
    });