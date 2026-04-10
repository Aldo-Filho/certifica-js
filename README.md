# 🎓 Sistema de Certificação de Participantes

## 📌 Descrição
O **Sistema de Certificação** é uma aplicação de console desenvolvida em Node.js. O projeto visa gerenciar o registro de participantes, calcular o desempenho com base em critérios de presença e atividades, e verificar a elegibilidade para a emissão de certificados.

---

## 🎯 Objetivo do Projeto
O sistema funciona como uma ferramenta de gestão acadêmica simples, onde é possível:

- Registrar dados básicos de participantes (nome e idade).
- Calcular o nível de aproveitamento (Excelente, Boa, Baixa ou Insuficiente).
- Validar se o aluno cumpriu os requisitos mínimos para obter um certificado final.

O projeto foca na validação rigorosa de entradas de dados, garantindo que campos vazios ou valores fora do escopo não corrompam a lógica do sistema.

---

## 🛠️ Tecnologias Utilizadas
- JavaScript (Node.js)
- Biblioteca `prompt-sync`

---

## ⚙️ Funcionalidades

### 📋 Gerenciamento de Dados
- **Registro de Participante:** Coleta de nome e idade com loops de validação.
- **Cálculo de Participação:** Atribuição de notas baseada no cruzamento de presença (0-3) e atividades entregues (0-6).
- **Emissão de Relatório:** Exibição detalhada de todos os dados salvos do participante.

### 📜 Critérios de Certificado
- Verificação automática baseada na nota final e na presença na apresentação final.
- Apenas notas "Excelente" ou "Boa" em conjunto com a participação na apresentação garantem o certificado.

---

## ⚠️ Observações Importantes
- O sistema utiliza a biblioteca `prompt-sync`, que já está configurada nas dependências do projeto.
- As validações de tipos numéricos foram tratadas manualmente para evitar que o JavaScript converta entradas vazias (`""`) em zero (`0`) automaticamente, garantindo maior integridade aos dados inseridos.
- Os dados são mantidos em memória durante a execução; ao fechar o programa, as informações não são persistidas.

---

## ▶️ Como executar

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Clone este repositório ou baixe a pasta do projeto.
3. No terminal, acesse a pasta do projeto e execute:
```bash
node index.js
```
## 📚 Contexto Acadêmico
- Projeto desenvolvido como exercício de lógica de programação, focado em estruturas de repetição, condicionais e tratamento de inputs em JavaScript.

## 👨‍💻 Autor
- Aldo José Rodrigues de Oliveira e Silva Filho
