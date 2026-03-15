import { keepPreviousData, useSuspenseQuery } from '@tanstack/react-query'
import { useReactTable } from '@tanstack/react-table'
import type { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/table-core'
import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getSortedRowModel } from '@tanstack/table-core'
import type { Route } from '@tuyau/core/types'
import { ArrowUpDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { api } from '#/lib/api'

import { DataTable } from '../../components/data-table'

export function ForgesTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const page = pagination.pageIndex + 1
  const limit = pagination.pageSize

  const { data: forges, isFetching } = useSuspenseQuery(
    api.forges.index.queryOptions({ query: { limit, page } }, { placeholderData: keepPreviousData }),
  )

  const table = useReactTable({
    data: forges.data,
    columns,
    rowCount: forges.meta.total,
    state: { pagination, sorting, columnFilters },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    debugTable: true,
  })

  return (
    <div className="bg-surface flex flex-1 flex-col gap-4 rounded-4xl px-3 py-8 md:px-6">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter products..."
          value={table.getColumn('product_name')?.getFilterValue() as string}
          onChange={(event) => table.getColumn('product_name')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <DataTable table={table} isFetching={isFetching} />
    </div>
  )
}

const columnHelper = createColumnHelper<Route.Response<'forges.index'>['data'][number]>()

const columns = [
  columnHelper.accessor('product.name', {
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Produto
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.row.original.product.name,
  }),
  columnHelper.accessor('createdAt', {
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Produto
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const isoDate = row.original.createdAt
      return isoDate ? new Date(isoDate).toLocaleDateString() : null
    },
  }),
]
