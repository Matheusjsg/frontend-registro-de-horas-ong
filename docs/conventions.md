# Convenções

## Objetivo

Este documento resume as convenções práticas que devem orientar novas alterações no frontend.

## Organização de arquivos

- Páginas em `src/pages`, separadas por domínio de acesso.
- Componentes compartilhados em `src/components/common`.
- Componentes específicos reutilizáveis em subpastas próprias.
- Chamadas HTTP em `src/service`.
- Regras de autenticação e sessão em `src/context`.
- Hooks reutilizáveis em `src/hooks`.
- Helpers, validadores e constantes em `src/utils`.

## Nomenclatura

- Componentes React: `PascalCase`.
- Funções e variáveis: `camelCase`.
- Constantes globais: `UPPER_SNAKE_CASE` quando fizer sentido.
- Arquivos de componente: mesmo nome do componente.
- Arquivos CSS por página ou componente quando o escopo for local.

## Idioma

- Código em inglês.
- Textos de interface podem seguir o idioma do produto.
- Comentários podem ser em português quando ajudarem a explicar regra de negócio.

## Serviços e API

- Toda integração HTTP deve passar por `src/service`.
- Evite chamadas `fetch` diretamente dentro de páginas quando já existir serviço relacionado.
- Erros devem preservar a mensagem do backend sempre que possível.
- Contratos de payload devem ser documentados em `docs/api-integration.md`.

## Permissões

- Controle de acesso visual no frontend não substitui validação no backend.
- Regras de role devem continuar centralizadas em `AuthContext`, `PrivateRoute`, `usePermissions` e `utils/constants`.
- Novas áreas administrativas devem usar a base `/admin`.
- Novas áreas de voluntário devem usar a base `/volunteer`.

## Formulários

- Validar no frontend antes do envio quando houver regra clara de formato.
- Usar mensagens de erro objetivas.
- Para campos de data, preferir `YYYY-MM-DD` no estado quando houver integração com `input[type=date]`.

## Evolução da documentação

- `README.md` deve continuar curto e focado em onboarding.
- `docs/architecture.md` é a referência de estrutura e rotas.
- `docs/api-integration.md` é a referência de contratos usados no frontend.
- Documentos antigos da raiz devem ser tratados como legado até migração completa para `docs/archive/`.
