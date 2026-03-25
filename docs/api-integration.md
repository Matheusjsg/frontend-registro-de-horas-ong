# Integração com API

## Base URL

A aplicação usa:

```env
VITE_API_URL=http://localhost:8080
```

Todas as URLs abaixo são relativas a `VITE_API_URL`.

## Autenticação

### `POST /auth/login`

Uso: login do usuário.

Payload esperado pelo frontend:

```json
{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### `POST /auth/register`

Uso: criação de usuário.

Payload esperado pelo frontend:

```json
{
  "name": "Nome Completo",
  "email": "novo@email.com",
  "password": "senha123",
  "departmentId": 1,
  "userType": "VOLUNTEER"
}
```

## Perfil

### `GET /volunteer/profile`

Uso: carregar o perfil do usuário autenticado.

### `PUT /volunteer/profile`

Uso: atualizar o perfil do usuário autenticado.

Payload usado pelo frontend:

```json
{
  "phone": "(11) 99999-9999",
  "address": "Rua X, 123",
  "city": "Sao Paulo",
  "state": "SP",
  "zipCode": "00000-000",
  "birthDate": "2026-03-24",
  "cpf": "000.000.000-00"
}
```

### `GET /volunteer/profile/{volunteerId}`

Uso: admin consultar o perfil de um voluntário específico.

## Voluntários

### `GET /volunteer/list`

Uso: listagem administrativa de voluntários.

### `GET /volunteer/{volunteerId}`

Uso: buscar voluntário por id.

### `PATCH /volunteer/{volunteerId}/usertype?userType=ADMIN|VOLUNTEER`

Uso: promover ou rebaixar tipo de usuário.

### `DELETE /volunteer/delete/{volunteerId}`

Uso: exclusão de voluntário.

## Departamentos

### `GET /departments/list`

Uso: carregar departamentos para formulários e gestão administrativa.

### `GET /departments/{id}`

Uso: buscar um departamento específico.

### `POST /departments/create`

Uso: criar departamento.

### `PUT /departments/update/{id}`

Uso: atualizar departamento.

### `DELETE /departments/delete/{id}`

Uso: excluir departamento.

## Atividades

### `GET /activity/listAll`

Uso: listagem geral de atividades.

### `GET /activity/list/{id}`

Uso: buscar atividade por id.

### `GET /activity/volunteer/{volunteerId}`

Uso: atividades do voluntário.

### `GET /activity/status/{status}`

Uso: filtrar por `PENDING`, `APPROVED` ou `REJECTED`.

### `POST /activity/create`

Uso: criar atividade.

Payload usado pelo frontend:

```json
{
  "date": "2026-03-24",
  "description": "Descricao da atividade",
  "durationMinutes": 120,
  "volunteerId": 1
}
```

### `PUT /activity/update/{id}`

Uso: atualizar atividade.

### `PATCH /activity/{id}/status?status=APPROVED|REJECTED|PENDING`

Uso: alterar status da atividade.

### `DELETE /activity/delete/{id}`

Uso: excluir atividade.

## Relatórios e certificados

### `GET /activity/report/{volunteerId}?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

Uso: buscar relatório de atividades por período.

### `GET /certificate/generate/{volunteerId}?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`

Uso: gerar certificado em PDF.

## Headers

### Requisições autenticadas

```http
Authorization: Bearer <token>
Content-Type: application/json
```

Observações:

- Alguns endpoints de leitura de departamentos aceitam token opcional no frontend.
- Alguns endpoints retornam `204 No Content`; o frontend já trata esse caso em partes da aplicação.
- Para `input[type=date]`, o frontend trabalha com `YYYY-MM-DD`.

## Responsabilidade de contrato

Quando payloads, nomes de campos ou rotas mudarem no backend, esta documentação deve ser atualizada junto com `service/` e com as telas impactadas.
