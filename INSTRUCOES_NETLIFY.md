# 🌿 Ju Pereira | Alquimia Emocional - Instruções de Hospedagem

## 🚀 Hospedagem no Netlify

Seu site está pronto para ser hospedado no Netlify! Siga os passos abaixo:

### Passo 1: Criar Conta no Netlify
1. Acesse [netlify.com](https://www.netlify.com)
2. Clique em "Sign Up" (Cadastrar)
3. Use seu email ou conecte com GitHub

### Passo 2: Conectar o Repositório GitHub
1. No Netlify, clique em "New site from Git"
2. Selecione "GitHub"
3. Autorize o Netlify a acessar seu GitHub
4. Selecione o repositório `jupereira-alquimia`
5. Clique em "Deploy"

**O Netlify vai:**
- Fazer o build do site automaticamente
- Gerar um link temporário (tipo: `jupereira-alquimia.netlify.app`)
- Atualizar automaticamente cada vez que você fizer mudanças

### Passo 3: Conectar seu Domínio (www.jupereira.com.br)
1. No Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite: `jupereira.com.br`
4. Clique em "Verify"
5. Netlify vai gerar 4 nameservers (NS records)

### Passo 4: Atualizar DNS no Registro.br
1. Acesse [registro.br](https://www.registro.br)
2. Faça login na sua conta
3. Vá em "Meus domínios"
4. Selecione `jupereira.com.br`
5. Clique em "Editar DNS"
6. Copie os 4 nameservers do Netlify e cole lá
7. Salve as mudanças

**Pronto!** Em até 24 horas, seu site estará em `www.jupereira.com.br`

---

## 📝 Como Fazer Mudanças no Site

### Opção 1: Editar via GitHub (Recomendado)
1. Acesse [github.com](https://www.github.com) e faça login
2. Vá para o repositório `jupereira-alquimia`
3. Navegue até a pasta `src/pages/`
4. Clique no arquivo que quer editar (ex: `Home.jsx`)
5. Clique no ícone de lápis (Edit)
6. Faça suas mudanças
7. Clique em "Commit changes"
8. **Pronto!** Netlify vai atualizar o site automaticamente em segundos

### Opção 2: Editar Localmente (Para Mudanças Maiores)
1. Clone o repositório no seu computador
2. Abra a pasta em um editor de texto (VS Code)
3. Edite os arquivos em `src/pages/`
4. Salve as mudanças
5. Faça `git push` para enviar para GitHub
6. Netlify atualiza automaticamente

---

## 📂 Estrutura dos Arquivos para Editar

| Arquivo | O que editar |
| :--- | :--- |
| `src/pages/Home.jsx` | Página inicial, manifesto e CTA |
| `src/pages/About.jsx` | Sua história, burnout e missão |
| `src/pages/Mentoria.jsx` | Descrição das 4 etapas e benefícios |
| `src/pages/Perolas.jsx` | Suas pérolas de milagres |
| `src/components/Navigation.jsx` | Menu de navegação |
| `src/components/Footer.jsx` | Rodapé e links sociais |

---

## 🎨 Cores da Marca (Para Referência)

- **Roxo Profundo:** `#3d1a5c`
- **Roxo Claro:** `#6b3fa0`
- **Verde Esmeralda:** `#1a7c6b`
- **Verde Claro:** `#2ba896`
- **Dourado:** `#d4af37`
- **Dourado Claro:** `#e8c547`

---

## ❓ Dúvidas?

Se tiver dúvidas sobre como editar ou hospedar, entre em contato com Manus AI!

**Seu site está pronto para mudar o mundo! 🌿✨**
