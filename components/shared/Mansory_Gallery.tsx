"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import GalleryItem from "./Gallery_Item"
import type { GalleryItemType, GalleryState } from "@/types/gallery"
import { fetchMediaFromCloud } from "@/services/media-service"
import { AlertCircle } from "lucide-react"

export default function MasonryGallery({ filter = "all" }: { filter?: string }) {
  const [state, setState] = useState<GalleryState>({
    items: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
  })
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  const { items, loading, error, page, hasMore } = state
  const observer = useRef<IntersectionObserver | null>(null)

  // Wrap loadMoreItems inside useCallback to prevent re-creation on every render
  const loadMoreItems = useCallback(async () => {
    if (loading || !hasMore) return

    setState((prev) => ({ ...prev, loading: true }))

    try {
      const result = await fetchMediaFromCloud(page)

      // Filter the items based on the selected filter
      const filteredItems =
        filter === "all"
          ? result.items
          : result.items.filter((item) => (filter === "images" ? item.type === "image" : item.type === "video"))

      setState((prev) => ({
        items: [...prev.items, ...filteredItems],
        loading: false,
        error: null,
        page: result.nextPage,
        hasMore: result.hasMore && filteredItems.length > 0,
      }))
    } catch {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: "Failed to load media. Please try again.",
      }))
    }
  }, [loading, hasMore, page, filter])

  const loadingRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems()
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore, loadMoreItems], // Added loadMoreItems to dependencies
  )

  // Reset state when filter changes
  useEffect(() => {
    setState({
      items: [],
      loading: false,
      error: null,
      page: 1,
      hasMore: true,
    })
  }, [filter])

  // Load items when filter changes or on initial load
  useEffect(() => {
    if (items.length === 0 && !loading && hasMore) {
      loadMoreItems()
    }
  }, [items.length, filter, loading, hasMore, loadMoreItems])


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const getAspectRatio = (item: GalleryItemType): number => {
    if (item.aspectRatio) return item.aspectRatio
    if (item.width && item.height) return item.width / item.height
    return 2 / 3 // recommended 2:3 ratio
  }

  const getColumns = () => {
    let columnCount = 2

    if (windowWidth >= 1280) columnCount = 6
    else if (windowWidth >= 768) columnCount = 4
    else if (windowWidth >= 640) columnCount = 3

    const columns: GalleryItemType[][] = Array.from({ length: columnCount }, () => [])

    items.forEach((item) => {
      let shortestColumnIndex = 0
      let shortestColumnHeight = Number.MAX_VALUE

      columns.forEach((column, colIndex) => {
        const columnHeight = column.reduce((height, item) => height + 1 / getAspectRatio(item), 0)
        if (columnHeight < shortestColumnHeight) {
          shortestColumnHeight = columnHeight
          shortestColumnIndex = colIndex
        }
      })

      columns[shortestColumnIndex].push(item)
    })

    return columns
  }

  return (
    <>
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {getColumns().map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="flex flex-col gap-4 cursor-pointer border-none">
            {column.map((item, index) => (
              <div key={`${item.id}-${index}`} className="mb-2">
                <GalleryItem item={item} />
                <div>
                  <h3 className="font-medium text-sm truncate dark:text-white py-2 px-4">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {hasMore && (
        <div ref={loadingRef} className="flex justify-center items-center h-24 w-full mt-4">
          {loading && <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 dark:border-white"></div>}
        </div>
      )}

      {!hasMore && items.length > 0 && (
        <div className="text-center dark:text-white mt-8 mb-4">You&apos;ve reached the end of the gallery</div>
      )}
    </>
  )
}
