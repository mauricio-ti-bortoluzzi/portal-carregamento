# Páginas da Aplicação

## Estrutura de Páginas

```
app/
  ├── operacional/
  │   ├── gestao-de-producao/
  │   ├── gestao-de-requisicao/
  │   ├── ordem-de-carregamento/
  │   └── requisicoes-finalizadas/
  ├── paginas/
  └── temp/
```

## Páginas Operacionais

### Gestão de Requisição (`/operacional/gestao-de-requisicao`)

**Componentes Utilizados:**

- `DashboardLayout` - Layout principal com sidebar
- `HeaderActions` - Ações do cabeçalho (filtros e botões)
- `ExpandableTable` - Tabela expansível para exibição dos dados

**Funcionalidade:**

- Exibe lista de requisições
- Permite seleção múltipla de itens
- Mostra detalhes expandíveis por requisição
- Suporta filtros e ações em lote

### Requisições Finalizadas (`/operacional/requisicoes-finalizadas`)

**Componentes Utilizados:**

- `DashboardLayout`
- `HeaderActions`
- `ExpandableTable`

**Funcionalidade:**

- Lista requisições completadas
- Permite visualização de detalhes
- Oferece filtros por período e status
- Exibe histórico de operações

### Gestão de Produção (`/operacional/gestao-de-producao`)

**Componentes Utilizados:**

- `DashboardLayout`
- `HeaderActions`
- `ExpandableTable`

**Funcionalidade:**

- Gerencia produção atual
- Mostra status de produção por item
- Permite acompanhamento de lotes
- Oferece ações de gestão de produção

### Ordem de Carregamento (`/operacional/ordem-de-carregamento`)

**Componentes Utilizados:**

- `DashboardLayout`
- `HeaderActions`
- `ExpandableTable`

**Funcionalidade:**

- Gerencia ordens de carregamento
- Permite criação de novas ordens
- Acompanha status de carregamento
- Exibe detalhes por ordem
