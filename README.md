# Zolvo

**Zolvo** é um sistema de gerenciamento de chamados para empresas de suporte técnico. Ele permite que os usuários criem e acompanhem chamados de suporte, enquanto técnicos e administradores podem gerenciar, atualizar e resolver essas solicitações.

Este projeto é um **MVP (Minimum Viable Product)** desenvolvido para demonstrar a capacidade de um sistema de atendimento com autenticação JWT e diferentes níveis de permissão de usuários.

---

## Funcionalidades

- **Autenticação de usuários** com JWT (JSON Web Token)
- **Cadastro e login** de usuários com diferentes níveis de permissão:
  - Usuário comum
  - Técnico
  - Administrador
- **Criação de chamados** com títulos e descrições detalhadas
- **Acompanhamento de chamados**:
  - Usuários podem visualizar e acompanhar o status de seus chamados
  - Técnicos e administradores podem ver todos os chamados e atualizá-los
- **Histórico de chamados** com atualização de status (em andamento, resolvido, etc.)
- **Comentários em chamados**, permitindo interações entre usuários e técnicos
- **Dashboard simples** com estatísticas de chamados por status

---

## Tecnologias

### **Front-end**
- **React** - Biblioteca JavaScript para criação de interfaces de usuário.
- **Vite** - Ferramenta de build de front-end rápida e otimizada.
- **Tailwind CSS** - Framework de CSS para estilização de componentes.

### **Back-end**
- **Flask** - Framework Python para desenvolvimento de APIs.
- **Flask-JWT-Extended** - Extensão Flask para autenticação via JWT.
- **Flask-SQLAlchemy** - Extensão Flask para integração com bancos de dados.
- **SQLite** - Banco de dados relacional para armazenamento de dados.

---

## Pré-requisitos

- **Node.js** (para o front-end)
- **npm** (ou **yarn**)
- **Python** (para o back-end)
- **pip** (gerenciador de pacotes do Python)

---

## Como Rodar o Projeto

### 1. Clonando o repositório

Clone o repositório na sua máquina local:

```bash
git clone https://github.com/SEU_USUARIO/zolvo.git
cd zolvo
