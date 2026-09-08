<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tarefas</title>

    <style>
        body {
            background: #dff5e7;
            font-family: Arial;
            display: flex;
            justify-content: center;
            padding-top: 70px;
        }

        .site {
            background: white;
            width: 400px;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 0 15px #999;
        }

        h1 {
            text-align: center;
            color: green;
        }

        .cadastro {
            display: flex;
            gap: 8px;
        }

        input {
            flex: 1;
            padding: 10px;
        }

        button {
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .adicionar {
            background: green;
            color: white;
        }

        li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }

        li span {
            flex: 1;
        }

        .concluida {
            text-decoration: line-through;
            color: gray;
        }

        .excluir {
            background: red;
            color: white;
        }
    </style>
</head>

<body>

    <div class="site">
        <h1>Minhas Tarefas</h1>

        <div class="cadastro">
            <input id="tarefa" placeholder="Digite uma tarefa">
            <button class="adicionar" onclick="adicionar()">Adicionar</button>
        </div>

        <ul id="lista"></ul>
    </div>

    <script>
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

        function salvar() {
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
        }

        function adicionar() {
            let campo = document.getElementById("tarefa");
            let texto = campo.value.trim();

            if (texto === "") {
                alert("Digite uma tarefa!");
                return;
            }

            tarefas.push({
                texto: texto,
                concluida: false
            });

            campo.value = "";
            salvar();
            mostrar();
        }

        function concluir(posicao) {
            tarefas[posicao].concluida =
                !tarefas[posicao].concluida;

            salvar();
            mostrar();
        }

        function excluir(posicao) {
            tarefas.splice(posicao, 1);
            salvar();
            mostrar();
        }

        function mostrar() {
            let lista = document.getElementById("lista");
            lista.innerHTML = "";

            tarefas.forEach(function(tarefa, posicao) {
                let item = document.createElement("li");

                item.innerHTML = `
                    <input type="checkbox"
                        ${tarefa.concluida ? "checked" : ""}
                        onclick="concluir(${posicao})">

                    <span class="${tarefa.concluida ? "concluida" : ""}">
                        ${tarefa.texto}
                    </span>

                    <button class="excluir"
                        onclick="excluir(${posicao})">
                        Excluir
                    </button>
                `;

                lista.appendChild(item);
            });
        }

        document.getElementById("tarefa")
            .addEventListener("keydown", function(evento) {
                if (evento.key === "Enter") {
                    adicionar();
                }
            });

        mostrar();
    </script>

</body>
</html>