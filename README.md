##
### Calendário World Cup 2022
##


### Pré-Requisitos.
- HTML, CSS, JavaScript.


### Ferramentas do programador.

**Visual Studio Code**
- Site: https://code.visualstudio.com/download

**FrontEnditor**
- (Editor Online): https://www.fronteditor.dev/

### Figma
- Figma do projeto: https://www.figma.com/community/file/1169028052212317700

Front End(Editor Online): https://www.fronteditor.dev/

# Primeiros Passos

Descomplicando a programação

---

## O que é programar?

- Codar, Desenvolver, Programar
    
    Resolver problemas do mundo real através das linhas de código
    
- Falar com o computador
    
    Aprender linguagens para dar ordens ao computador
    

---

## Áreas de atuação e salários

Podemos aprender programação em diversas áreas de atuação como, por exemplo:

- WEB
- Mobile
- Dados
- Inteligência artificial (A.I)
- Negócios
- Analista
- Internet das coisas (IoT) e outras.

<aside>
💡 O **salário** é de acordo com a vaga e a experiência da pessoa. Podem iniciar entre 2 a 3 salários mínimos e chegar a mais de 10, 20 😱

</aside>

---

## Programas e Arquivos

- Programa e aplicativos (apps)
    - Navegadores
    - Mensagens
    - Redes sociais
- Arquivos
    - Foto, vídeo, textos, etc.
    - São interpretados por programas ou apps

---

## Internet

- Rede mundial de computadores
- O computadores estão conectados entre si
- Transferência de dados

---

---

# Front-end e Back-end

Simplificando palavras difíceis

---

## É uma comunicação

Imagina uma farmácia onde você vai pedir um remédio para o atendimento

---

## Cliente x Servidor

- Cliente
    
    Navegador (Browser)
    
- Servidor
    
    Computador em algum lugar do mundo que tem os códigos
    
- Troca de dados (arquivos)
    
    Cliente faz o pedido e Servidor escuta e responde ao pedido
    
    Cliente é o front-end, servidor é o back-end
    

---

## Tecnologias Front-end

- HTML
    
    Linguagem de marcação de texto para estrutura os textos, criar links, imagens, etc...
    
- CSS
    
    Linguagem de estilo para deixar o HTML bonito
    
- JavaScript
    
    Linguagem de programação que funciona no Navegador
    

---

## Tecnologias Back-end

- NodeJS
    
    Rodar o JavaScript no computador
    
- SQL
    
    Banco de dados para proteger os dados do seu programa
    

---

---

# Ambiente Dev

Ferramentas para configurar seu ambiente de desenvolvimento

---

## Ferramentas

- [Microsoft Edge](https://www.microsoft.com/en-us/edge?r=1)
    
    Navegador (Browser)
    
- [Visual Studio Code](https://code.visualstudio.com/)
    
    Editor de código profissional para gerenciar o projeto
    
- [Figma](https://www.figma.com/)
    
    Plataforma online e profissional para Design de projetos
    

[Instalando e configurando o Figma](https://www.notion.so/Instalando-e-configurando-o-Figma-c130d3c1d8a046a1b3f941abf225e03c)

- [Git](https://git-scm.com/)
    
    Rastreamento e histórico do projeto
    
- [Github](https://github.com/)
    
    Seus projetos na nuvem
    

[Instalando o Git e GitHub](https://www.notion.so/Instalando-o-Git-e-GitHub-2a4c9a3d7da148b099df903177843a08)

- [Fronteditor.dev](https://fronteditor.dev/)
    
    Editor de código online
    

---

---

# HTML

Introdução

---

## O que é HTML?

- Estruturar textos, criar links, imagens, vídeo, etc ...
- Hypertext Markup Language
    
    Linguagem de marcação de texto
    

---

## Hypertext

- Hipertexto
- Texto que contém links

---

## Markup

- Marcação do texto
- Elemento HTML ou **`tag`**
    
    Existem inúmeras tags e cada uma deles irá servir para um determinado propósito. Ex.: imagem, texto grande, link, parágrafo, etc...
    

---

## Sintaxe de uma tag

Como escrevemos tags HTML?

```html
<p>conteúdo</p>
<!-- Aqui vem um comentário -->

```

---

## Atributos

Adicionam informações e/ou configurações à uma tag

Como escrevemos atributos?

```html
<a href="<https://github.com/daniel-oliv3/>">Ver site</a>
<img src="image.jpg" />

```

---

---

##

# CSS

Introdução

---

## O que é CSS?

- Estilos para o HTML
- Cascading Style Sheets
    
    Folha de Estilo em Cascata
    
- Apresentação visual para o cliente

---

## Declaration

- **Declaração**
    
    Pedaço de código que irá ditar as propriedades e valores a serem aplicadas a um elemento HTML
    
- Como escrevemos ?
    
    

```css
body {
  background: black;
	/* color: green; Essa linha será ignorada */
}
```

---

## Cascading

- Cascata
    
    Quando há 2 (ou mais) declarações a última será mais relevante
    

```css
body {
  background: red;
}

body {
  background: blue;
}

```

---

## Specificity

- Especificidade
    
    Cada seletor tem um peso e a soma dos pesos, será levada em conta para que determinada declaração seja mais específica
    

```css
#id {
  /* peso 100 */
}

```

```css
.class {
  /* peso 10 */
}

```

```css
element {
  /* peso 1 */
}

```

> *A cascata perde prioridade e é priorizada a especificidade da declaração*
> 

---

## Box Model

- Tudo são caixas
    
    Todos os elementos HTML serão considerados uma caixa, assim como uma caixa de papelão
    
- Caixas possuem determinadas propriedades
    
    Conteúdo, Largura, Altura, Borda, Preenchimento (espaço interno), Espaçamento (espaço externo)
    

![http://espezua.github.io/blog/imgs/boxmodel.png](http://espezua.github.io/blog/imgs/boxmodel.png)

---

---

## Alinhamento de mentalidade

- [ ]  Evolução
- [ ]  Prática
- [ ]  Continue …

---

## Config para o VSCode

**.vscode/settings.json**

```json
{
  // editor
  "editor.wordWrap": "on",
  "editor.fontSize": 18,
  "editor.lineHeight": 30,
  "editor.tabSize": 2,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,

  // explorer
  "explorer.compactFolders": false,

  // workbench
  "workbench.editor.enablePreview": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Omni",

  // prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.enable": true,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.semi": false,

  // terminal
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "source": "Git Bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "window.zoomLevel": 1
}
```

---

---

# CSS

Aplicando ao nosso projeto






















##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

##

