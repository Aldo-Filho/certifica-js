const prompt = require("prompt-sync")();

let nome;
let idade;

function registrar() {
    do {
        nome = String(prompt("Insira o NOME do participante: "));
        if (nome) {
            console.log("NOME registrado!");
        } else {
            console.log("Insira um NOME!");
        }
        
        if (nome) {
            do {
                idade = Number(prompt("Insira a IDADE do participante: "));
                if (idade) {
                    console.log("IDADE registrada!");
                } else {
                    console.log("Insira uma IDADE!");
                }
            } while (!idade)
        }
    } while (!nome);
}

let presenca;
let atividades;
let nota;
let apresentacaoFinal;

function calcPresenca() {

    do {
        presenca = prompt("Insira um número de 0 - 3 para classificar a presença: ");
        if (presenca && presenca < 4 && presenca > -1) {
            console.log("PRESENÇA registrada!");
        } else {
            console.log("Insira um valor VÁLIDO!");
        }

        if (presenca && presenca < 4 && presenca > -1) {
            do {
                atividades = prompt("Insira a quantidade de atividades realizadas pelo participante (máx 6): ");
                if (atividades && atividades < 7 && presenca > -1) {
                    console.log("ATIVIDADES registradas!");
                } else {
                    console.log("Insira um valor VÁLIDO!");
                }
            } while (!atividades || atividades > 6 || atividades < 0);
        }
    } while (!presenca || presenca > 3 || presenca < 0);

    if (presenca === 3 && atividades >= 5) {
        nota = "Excelente";
        console.log("A nota foi calculada com sucesso!");
    } else if (presenca >= 2 && atividades >= 3) {
        nota = "Boa";
        console.log("A nota foi calculada com sucesso!");
    } else if (presenca >= 1 && atividades >= 1) {
        nota = "Baixa";
        console.log("A nota foi calculada com sucesso!");
    } else {
        nota = "Insuficiente";
        console.log("O participante não conseguiu obter nota.");
    }

    if (nota !== "Insuficiente") {
        do {
            apresentacaoFinal =  String(prompt("Participou da apresentação final? (SIM / NAO): ")).toUpperCase();
            if (apresentacaoFinal === "SIM" || apresentacaoFinal === "NAO") {
                console.log("A PARTICIPAÇÃO foi registrada!");
            } else {
                console.log("Insira uma opção válida!");
            }
        } while (apresentacaoFinal !== "SIM" && apresentacaoFinal !== "NAO");
    }
}

function verifCertificado() {
    if ((nota === "Excelente" || nota === "Boa") && apresentacaoFinal === "SIM") {
        console.log("=============CERTIFICADO=============");
        console.log("O Participante " + nome + " conseguiu");
        console.log("OBTER com ÊXITO O seu CERTIFICADO!!!");
        console.log("====================================");
    } else if (!nome) {
        console.log("Não existem dados suficientes do participante!")
    } else {
        console.log("O Participante " + nome + " NÃO conseguiu obter seu certificado por falta de presença e atividades.");
    }
}

function mostrarRelatorio() {
    if (nome && idade && nota) {
        console.log("=============RELATÓRIO=============");
        console.log("Participante: " + nome);
        console.log("Idade: " + idade);
        console.log("Presença (0 - 3): " + presenca);
        console.log("Atividades realizadas (0 - 6): " + atividades);
        console.log("Nota Final: " + nota);
        console.log("Participou da última apresentação: " + apresentacaoFinal);
        console.log("====================================");
    } else {
        console.log("Não é possível exibir um relatório porque não existem dados suficientes do participante.");
    }
}

function menu() {
    console.log("===========MENU DE OPÇÕES===========");
    console.log("1 - Registrar participante");
    console.log("2 - Calcular nível de participação");
    console.log("3 - Verificar certificado");
    console.log("4 - Mostrar relatório");
    console.log("0 - Sair");
    console.log("=====================================");
}

let opcao;

do{
    menu();
    opcao = prompt("Escolha um número: ");
    switch (opcao) {
        case "0":
            console.log("Você saiu do sistema!");
            break;
        case "1":
            registrar();
            break;
        case "2":
            calcPresenca();
            break;
        case "3":
            verifCertificado();
            break;
        case "4":
            mostrarRelatorio();
            break;
        default:
            console.log("Insira um número de 0 - 4 !!");
            break;
    }
} while (opcao !== "0");

//Não utilizei a formatação de dados para NUMBER porque o JS transforma um espaço vazio "", ou seja nulo ou/e indefinido no número (0 de tipo NÚMERO)
//E isso muitas vezes atrapalha, pois se eu fizer uma verificação de uma variável onde o valor inputado precisa ser 0, e não inputar nada (apertando a tecla ENTER) -
//- a condicional verifica como true e quebra o código.