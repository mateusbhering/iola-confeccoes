# IOLA Confecções 👗

Um site minimalista, moderno e responsivo para a marca **IOLA Confecções**, especializada em roupas femininas de qualidade.

## 🎨 Características

### Design
- **Minimalista em Preto e Branco** - Design clean e profissional
- **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Menu Hamburger** - Navegação inteligente para dispositivos móveis
- **Footer Completo** - Com informações de contato e redes sociais

### Seções
1. **Home** - Apresentação da empresa
2. **Quem Somos** - Descrição e história da IOLA
3. **Nossas Roupas** - Galeria com 6 fotos em grid responsivo
4. **Onde Estamos** - Mapa integrado do Google Maps
5. **Fale Conosco** - Telefone clicável e ícones de redes sociais

### Funcionalidades
✅ Telefone clicável (tel:)  
✅ Link direto para WhatsApp  
✅ Links para Instagram  
✅ Mapa do Google Maps integrado  
✅ Animações suaves em hover  
✅ Menu mobile com animação hamburger  
✅ Favicon personalizado  
✅ Layout responsivo (desktop, tablet, mobile)  

## 📁 Estrutura do Projeto

```
iola/
├── index.html          # Arquivo principal HTML
├── style.css           # Estilos CSS completos
├── script.js           # JavaScript para menu mobile
├── README.md           # Este arquivo
└── assets/
    ├── logo.jpg        # Logo da empresa
    ├── roupa1.jpg      # Foto 1 de produtos
    ├── roupa2.jpg      # Foto 2 de produtos
    ├── roupa3.jpg      # Foto 3 de produtos
    ├── roupa4.jpg      # Foto 4 de produtos
    ├── roupa5.jpg      # Foto 5 de produtos
    ├── roupa6.jpg      # Foto 6 de produtos
    ├── whatsapp.svg    # Ícone do WhatsApp
    └── instagram.svg   # Ícone do Instagram
```

## 🚀 Como Usar

### Abrir localmente
1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em seu navegador
3. Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server
```

Acesse `http://localhost:8000` no navegador.

## 🎯 Customização

### Alterar Cores
As cores estão definidas em variáveis CSS no arquivo `style.css`:

```css
:root {
    --cor-primaria: #000;        /* Preto */
    --cor-secundaria: #f5f5f5;   /* Cinza claro */
    --cor-clara: #fff;           /* Branco */
}
```

### Adicionar/Alterar Fotos
1. Coloque as imagens na pasta `assets/`
2. Atualize o nome dos arquivos em `index.html`

### Atualizar Contatos
Edite os dados na seção **Fale Conosco**:
- Telefone: Procure por `tel:` no HTML
- WhatsApp: Procure por `api.whatsapp.com`
- Instagram: Procure por `instagram.com`

## 📱 Responsividade

O site é otimizado para todos os tamanhos de tela:

- **Desktop** (1200px+) - Grid de fotos 3 colunas
- **Tablet** (768px-1199px) - Grid de fotos 2 colunas, menu mobile
- **Mobile** (até 767px) - Grid de fotos 1 coluna, menu hamburger

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com Grid, Flexbox e variáveis CSS
- **JavaScript Vanilla** - Interatividade do menu mobile
- **SVG** - Ícones escaláveis

## 🎬 Animações

- **Hover nas fotos** - Zoom (1.05x) com sombra aumentada
- **Hover nos botões de rede social** - Zoom (1.1x) com rotação
- **Menu hamburger** - Transformação do ícone em "X"
- **Links de navegação** - Sublinhado animado ao hover

## 📞 Contato

**Endereço:** Rua Cuiabá, 400 - Prado - Belo Horizonte, MG  
**Telefone:** (31) 3332-9445 / (31) 3332-7963  
**Instagram:** [@iolaconfeccoes](https://www.instagram.com/iolaconfeccoes/)  
**WhatsApp:** [Enviar mensagem](https://api.whatsapp.com/send/?phone=5531999675353)

## 📄 Licença

Este projeto é propriedade da IOLA Confecções. Todos os direitos reservados © 2025.

## 📝 Versão

**v1.0.0** - 12 de novembro de 2025

---

Desenvolvido com ❤️ para IOLA Confecções
