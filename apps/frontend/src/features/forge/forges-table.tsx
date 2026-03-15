import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useReactTable } from '@tanstack/react-table'
import type { PaginationState } from '@tanstack/table-core'
import { createColumnHelper, getCoreRowModel } from '@tanstack/table-core'
import type { Route } from '@tuyau/core/types'
import { useState } from 'react'

import { api } from '#/lib/api'

import { DataTable } from '../../components/data-table'

const columnHelper = createColumnHelper<Route.Response<'forges.index'>['data'][number]>()

const columns = [
  columnHelper.accessor('productId', {
    header: () => 'Produto',
    cell: (info) => info.row.original.product.name,
  }),
  columnHelper.accessor('createdAt', {
    header: () => 'Created at',
    cell: ({ row }) => {
      const isoDate = row.original.createdAt
      return isoDate ? new Date(isoDate).toLocaleDateString() : null
    },
  }),
]

export function ForgesTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const page = pagination.pageIndex + 1
  const limit = pagination.pageSize

  const { data } = useQuery(
    api.forges.index.queryOptions({ query: { limit, page } }, { placeholderData: keepPreviousData }),
  )

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    rowCount: data?.meta.total,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  return (
    <div className="bg-surface flex-1 rounded-4xl px-3 py-8 md:px-6">
      <DataTable table={table} />
    </div>
  )
}
