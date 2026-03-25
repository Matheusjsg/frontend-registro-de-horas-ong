# Arquitetura

## Visão geral

O frontend é organizado por responsabilidade e por papel de acesso.

- `pages/auth` contém login e registro.
- `pages/volunteer` contém a experiência do voluntário.
- `pages/admin` contém a experiência administrativa.
- `components/common` reúne layout, proteção de rotas e componentes compartilhados.
- `components/volunteer` concentra componentes reutilizados do fluxo de atividades.
- `service` encapsula chamadas à API.
- `context` mantém autenticação global.
- `hooks` centraliza regras de permissão e reutilização de lógica.
- `utils` reúne constantes, validadores, headers e formatadores.

## Fluxo de autenticação

- O login e o registro usam `src/service/authApi.js`.
- O `AuthContext` persiste `token` e `user` no `localStorage`.
- O componente raiz `App.jsx` redireciona para `/admin/dashboard` ou `/volunteer/dashboard`.
- `PrivateRoute` protege áreas autenticadas e impede acesso indevido a rotas de admin.

## Modelo de navegação

A navegação é guiada pelo `userType`.

### Volunteer

- Dashboard
- Meu Perfil
- Minhas Atividades
- Meus Relatórios

### Admin

- Dashboard
- Meu Perfil
- Minhas Atividades
- Meus Relatórios
- Voluntários
- Aprovações
- Setores

## Rotas reais

### Públicas

- `/login`
- `/register`

### Protegidas do volunteer

- `/volunteer/dashboard`
- `/volunteer/profile`
- `/volunteer/activities`
- `/volunteer/reports`

### Protegidas do admin

- `/admin/dashboard`
- `/admin/profile`
- `/admin/activities`
- `/admin/reports`
- `/admin/volunteers`
- `/admin/approvals`
- `/admin/departments`

## Observações de design

- Algumas telas do admin reutilizam páginas do fluxo de volunteer, como perfil, atividades e relatórios.
- As permissões de interface ficam no frontend, mas a autorização definitiva continua sendo responsabilidade do backend.
- O frontend hoje depende de contratos relativamente implícitos da API. Sempre que houver mudança de payload, a documentação de integração deve ser atualizada junto.

## Estrutura resumida

```text
src/
├── App.jsx
├── main.jsx
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

## Fonte de verdade

Para arquitetura e rotas, esta documentação substitui descrições antigas espalhadas em arquivos legados da raiz.
