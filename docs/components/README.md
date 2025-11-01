# Componentes

## Componentes Base

### ExpandableTable

**Descrição:**
Tabela expansível que suporta linhas principais e sub-linhas com dados detalhados.

**Como Usar:**

```tsx
import ExpandableTable from "@/components/ExpandableTable";

<ExpandableTable
  data={tableData}
  select={true}
  selection={selection}
  setSelection={setSelection}
/>;
```

**Props:**

- `data: TableProps` - Dados da tabela (headers e rows)
- `select?: boolean` - Habilita seleção de linhas
- `selection?: SelectionState` - Estado de seleção
- `setSelection?: React.Dispatch<React.SetStateAction<SelectionState>>` - Função para atualizar seleção

### Layout

**Descrição:**
Layout principal da aplicação com sidebar e header.

**Como Usar:**

```tsx
import { DashboardLayout } from "@/components/Layout";

<DashboardLayout number={1} title="Título da Página">
  {children}
</DashboardLayout>;
```

**Props:**

- `number: number` - Número identificador do menu ativo
- `title: string` - Título da página
- `children: React.ReactNode` - Conteúdo da página

### HeaderActions

**Descrição:**
Componente de ações do cabeçalho com filtros e botões.

**Como Usar:**

```tsx
import HeaderActions from "@/components/HeaderActions";

<HeaderActions handleSubmit={handleSubmit} />;
```

**Props:**

- `handleSubmit: (data: FilterProps) => void` - Função para tratar submissão de filtros

## Componentes da Tabela Expansível

### MainRow

**Descrição:**
Linha principal da tabela expansível.

**Como Usar:**
É usado internamente pelo ExpandableTable.

**Props:**

- `row: RowProps` - Dados da linha
- `hasSubtable: boolean` - Indica se tem subtabela
- `selection: SelectionState` - Estado de seleção
- `open: boolean` - Estado de expansão

### SelectCell

**Descrição:**
Célula de seleção com checkbox.

**Como Usar:**
É usado internamente pelo MainRow.

**Props:**

- `selection: SelectionState` - Estado de seleção
- `row: RowProps` - Dados da linha

### Subtable

**Descrição:**
Componente de subtabela que mostra detalhes expandidos.

**Como Usar:**
É usado internamente pelo ExpandableTable.

**Props:**

- `subtable: SubtableProps` - Dados da subtabela
- `select?: boolean` - Habilita seleção
- `rowId: string` - ID da linha pai
- `selection?: SubtableSelectionState` - Estado de seleção da subtabela

## Componentes UI

A aplicação utiliza componentes do shadcn/ui personalizados:

- `Button` - Botões com diferentes variantes
- `Dialog` - Modais e diálogos
- `Input` - Campos de entrada
- `Select` - Campos de seleção
- `Table` - Componentes base de tabela
- `Card` - Cartões para agrupamento de conteúdo
- `Sidebar` - Barra lateral de navegação

## Boas Práticas de Uso

1. **Estado de Seleção:**

   - Sempre inicialize o estado de seleção como objeto vazio
   - Use o hook `useState` para gerenciar seleções

2. **Tipos e Interfaces:**

   - Importe tipos necessários de `@/components/ExpandableTable/type`
   - Defina tipos personalizados para seus dados

3. **Estilização:**

   - Use classes Tailwind para estilização
   - Mantenha consistência com o design system

4. **Performance:**

   - Use `React.memo()` para componentes que recebem as mesmas props frequentemente
   - Evite re-renders desnecessários

5. **Acessibilidade:**
   - Mantenha foco visível para navegação por teclado
   - Use atributos ARIA apropriados
