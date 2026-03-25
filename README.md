# ABCAA Frontend

Frontend do sistema ABCAA para gerenciamento de atividades de voluntariado.

## Stack

- React 19
- Vite 7
- React Router DOM 7
- React Toastify
- Lucide React

## Como rodar

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar ambiente

Crie um arquivo `.env` na raiz:

```env
VITE_API_URL=http://localhost:8080
```

### 3. Subir o projeto

```bash
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

## Scripts

- `npm run dev` - ambiente de desenvolvimento
- `npm run build` - build de produção
- `npm run lint` - análise estática
- `npm run preview` - preview local da build

## Estrutura atual

```text
src/
├── assets/
├── components/
│   ├── common/
│   └── volunteer/
├── context/
├── hooks/
├── pages/
│   ├── admin/
│   ├── auth/
│   └── volunteer/
├── service/
├── styles/
└── utils/
```

## Rotas principais

### Públicas

- `/login`
- `/register`

### Volunteer

- `/volunteer/dashboard`
- `/volunteer/profile`
- `/volunteer/activities`
- `/volunteer/reports`

### Admin

- `/admin/dashboard`
- `/admin/profile`
- `/admin/activities`
- `/admin/reports`
- `/admin/volunteers`
- `/admin/approvals`
- `/admin/departments`

## Organização funcional

- `App.jsx` redireciona o usuário autenticado para o dashboard correto conforme `userType`.
- `AuthContext` centraliza autenticação, token e dados básicos do usuário.
- `PrivateRoute` protege rotas autenticadas e restringe áreas administrativas.
- `Sidebar` muda a navegação de acordo com o papel do usuário.
- `service/` concentra integração HTTP com o backend.

## Documentação oficial

- [Arquitetura](docs/architecture.md)
- [Integração com API](docs/api-integration.md)
- [Convenções](docs/conventions.md)

## Documentação

A documentação oficial do projeto está concentrada nos arquivos listados acima. Documentos antigos e redundantes foram removidos para manter o repositório mais limpo e confiável.
