# Dossiê Tomás - Defesa Jurídica Rafael Marvila

Landing Page profissional para apresentação de defesa jurídica em caso de custódia e pensão alimentícia.

## 🎨 Características

- **Design Profissional:** Tema Navy Blue (#1B3A6B) com estética "Legal Authority"
- **Mascote Lobo:** Símbolo de proteção paterna
- **Dados Financeiros:** Breakdown detalhado de custos mensais (R$8.704)
- **Comparativo Visual:** R$27.000 pagos vs R$70.000 cobrados
- **Timeline Cronológica:** Eventos-chave de 2023-2025
- **3 Teses Jurídicas:** Estratégia fundamentada para defesa
- **Área de Downloads:** Organizada para documentos e provas
- **Responsivo:** Otimizado para desktop e mobile

## 🚀 Deploy no Vercel (Manual)

### Opção 1: Deploy via GitHub (Recomendado)

1. **Criar repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dossiê Tomás Landing Page"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/dossie-tomas.git
   git push -u origin main
   ```

2. **Conectar no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe o repositório do GitHub
   - Configure:
     - **Framework Preset:** Vite
     - **Root Directory:** `./` (raiz do projeto)
     - **Build Command:** `cd client && npm run build`
     - **Output Directory:** `client/dist`
     - **Install Command:** `npm install`
   - Clique em "Deploy"

### Opção 2: Deploy via Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Fazer login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy em produção:**
   ```bash
   vercel --prod
   ```

### Opção 3: Upload Manual de Pasta

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta `client/dist` (após build local)
3. Configure o nome do projeto
4. Clique em "Deploy"

## 🛠️ Build Local (Antes do Deploy)

```bash
# Instalar dependências
cd client
npm install

# Build para produção
npm run build

# Preview local do build
npm run preview
```

O build será gerado em `client/dist/`

## 📁 Estrutura do Projeto

```
dossie_tomas/
├── client/                 # Frontend React + Vite
│   ├── public/            # Arquivos estáticos
│   │   └── mascote-lobo.png
│   ├── src/
│   │   ├── components/    # Componentes UI (shadcn/ui)
│   │   ├── pages/         # Páginas (Home.tsx)
│   │   ├── index.css      # Estilos globais + tema
│   │   └── main.tsx       # Entry point
│   ├── index.html         # HTML base
│   └── package.json       # Dependências frontend
├── vercel.json            # Configuração Vercel
├── README.md              # Este arquivo
└── todo.md                # Lista de tarefas
```

## 🎨 Tecnologias Utilizadas

- **React 19** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS 4** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **Google Fonts** - Playfair Display, Lato, Inter

## 🔒 Segurança e Privacidade

**IMPORTANTE:** Este dossiê contém informações confidenciais. Recomendações:

1. **Adicionar proteção por senha** antes de compartilhar publicamente
2. **Usar domínio personalizado** (não o domínio padrão do Vercel)
3. **Configurar variáveis de ambiente** para links sensíveis
4. **Habilitar Analytics** para monitorar acessos

### Adicionar Proteção por Senha (Vercel)

1. No dashboard do Vercel, vá em "Settings"
2. Aba "General"
3. Seção "Password Protection"
4. Ative e defina uma senha
5. Compartilhe a senha apenas com pessoas autorizadas

## 📝 Próximos Passos Recomendados

- [ ] Adicionar links reais do Google Drive nos botões de download
- [ ] Implementar proteção por senha no Vercel
- [ ] Configurar domínio personalizado (ex: dossietomas.com.br)
- [ ] Adicionar funcionalidade de exportação para PDF
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Validar todos os dados financeiros e datas

## 📞 Suporte

Para dúvidas sobre deploy ou ajustes no projeto, consulte:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Vite](https://vitejs.dev/)
- [Documentação React](https://react.dev/)

---

**© 2025 - Dossiê Tomás | Documento confidencial para uso jurídico**
