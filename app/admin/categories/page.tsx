'use client'

import { useEffect, useState, type FormEvent } from "react"
import { Pencil, Plus, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Category = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

type CategoriesResult = {
  categories: Category[]
  pagination: {
    page: number
    pageSize: number
    totalCategories: number
    totalPages: number
  }
}

const PAGE_SIZE = 10

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCategories, setTotalCategories] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [newCategoryName, setNewCategoryName] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  async function loadCategories(page = currentPage) {
    setIsLoading(true)
    setError("")
    try {
      const response = await fetch(`/api/categories?page=${page}&pageSize=${PAGE_SIZE}`)
      const result = await response.json() as CategoriesResult & { error?: string }
      if (!response.ok) throw new Error(result.error ?? "Gagal memuat data kategori.")

      setCategories(result.categories)
      setCurrentPage(result.pagination.page)
      setTotalCategories(result.pagination.totalCategories)
      setTotalPages(Math.max(1, result.pagination.totalPages))
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Gagal memuat data kategori.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void loadCategories(1)
  }, [])

  async function handleSaveCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = newCategoryName.trim()
    if (!name) {
      setError("Nama kategori wajib diisi.")
      return
    }

    setIsAdding(true)
    setError("")
    try {
      const response = await fetch(
        editingCategory ? `/api/categories/${editingCategory.id}` : "/api/categories",
        {
          method: editingCategory ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        },
      )
      const result = await response.json() as { error?: string }
      if (!response.ok) throw new Error(result.error ?? "Gagal menyimpan kategori.")

      setNewCategoryName("")
      setEditingCategory(null)
      await loadCategories(editingCategory ? currentPage : 1)
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Gagal menyimpan kategori.")
    } finally {
      setIsAdding(false)
    }
  }

  function startEditing(category: Category) {
    setEditingCategory(category)
    setNewCategoryName(category.name)
    setError("")
  }

  function cancelEditing() {
    setEditingCategory(null)
    setNewCategoryName("")
    setError("")
  }

  async function handleDelete(category: Category) {
    if (!window.confirm(`Hapus kategori "${category.name}"?`)) return

    setError("")
    try {
      const response = await fetch(`/api/categories/${category.id}`, { method: "DELETE" })
      const result = await response.json() as { error?: string }
      if (!response.ok) throw new Error(result.error ?? "Gagal menghapus kategori.")

      await loadCategories(categories.length === 1 && currentPage > 1 ? currentPage - 1 : currentPage)
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Gagal menghapus kategori.")
    }
  }

  return (
    <Card className="m-6 p-4 md:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Kategori</h1>
          <p className="text-sm text-muted-foreground">Kelola data kategori.</p>
        </div>
      </div>

      {error && <p role="alert" className="mb-4 text-sm text-destructive">{error}</p>}

      <form onSubmit={handleSaveCategory} className="mb-5 flex flex-col gap-3 rounded-lg border bg-muted/20 p-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="category-name" className="mb-1.5 block text-sm font-medium">
            {editingCategory ? "Edit nama kategori" : "Nama kategori"}
          </label>
          <Input
            id="category-name"
            value={newCategoryName}
            onChange={(event) => setNewCategoryName(event.target.value)}
            placeholder="Masukkan nama kategori"
            maxLength={191}
            required
          />
        </div>
        <div className="flex gap-2">
          {editingCategory && (
            <Button type="button" variant="outline" onClick={cancelEditing} disabled={isAdding}>
              <X aria-hidden="true" />
              Batal
            </Button>
          )}
          <Button type="submit" disabled={isAdding}>
            {editingCategory ? <Pencil aria-hidden="true" /> : <Plus aria-hidden="true" />}
            {isAdding ? "Menyimpan..." : editingCategory ? "Simpan perubahan" : "Tambah kategori"}
          </Button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nama kategori</TableHead>
              <TableHead>Dibuat</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={4} className="py-8 text-center">Memuat kategori...</TableCell></TableRow>
            ) : categories.length === 0 ? (
              <TableRow><TableCell colSpan={4} className="py-8 text-center">Belum ada kategori.</TableCell></TableRow>
            ) : categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell>{new Date(category.createdAt).toLocaleDateString("id-ID")}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={`Edit ${category.name}`}
                      onClick={() => startEditing(category)}
                    >
                      <Pencil aria-hidden="true" className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={`Hapus ${category.name}`}
                      onClick={() => void handleDelete(category)}
                    >
                      <Trash2 aria-hidden="true" className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {!isLoading && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {totalCategories} kategori · Halaman {currentPage} dari {totalPages}
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => void loadCategories(currentPage - 1)}
            >
              Sebelumnya
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => void loadCategories(currentPage + 1)}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}
