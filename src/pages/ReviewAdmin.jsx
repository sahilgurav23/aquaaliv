import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { getDb, firebaseConfigured } from "../lib/firebase";
import TestimonialCard from "../components/TestimonialCard";

const PAGE_SIZE = 10;

function formatDate(value) {
  if (!value) return "";
  try {
    const d =
      typeof value.toDate === "function" ? value.toDate() : new Date(value);
    return d.toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

function getDateKey(value) {
  if (!value) return "";
  try {
    const d =
      typeof value.toDate === "function" ? value.toDate() : new Date(value);
    return d.toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

export default function ReviewAdmin() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const [permissionFilter, setPermissionFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [page, setPage] = useState(1);
  const [updatingId, setUpdatingId] = useState("");
  const [deletingId, setDeletingId] = useState("");

  useEffect(() => {
    if (!firebaseConfigured) {
      setLoading(false);
      setItems([]);
      setError(
        "Firebase is not configured. Add Firebase configuration to manage reviews."
      );
      return;
    }

    const db = getDb();
    if (!db) {
      setLoading(false);
      setItems([]);
      setError("Database is not available.");
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const q = query(
          collection(db, "reviews"),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        if (cancelled) return;
        const list = snap.docs.map((d) => {
          const data = d.data() || {};
          const permission =
            data.permission === true || data.permission === "true";
          const rating =
            typeof data.rating === "number"
              ? data.rating
              : Number(data.rating || 0);
          return {
            id: d.id,
            ...data,
            permission,
            rating,
          };
        });
        setItems(list);
      } catch {
        if (!cancelled) {
          setError("Failed to load reviews.");
          setItems([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      setSearchTerm(searchInput.trim());
    }, 300);

    return () => {
      clearTimeout(handle);
    };
  }, [searchInput]);

  useEffect(() => {
    setPage(1);
  }, [permissionFilter, searchTerm, dateFilter]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (permissionFilter === "true" && !item.permission) {
        return false;
      }
      if (permissionFilter === "false" && item.permission) {
        return false;
      }

      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const phone = String(item.phone || "").toLowerCase();
        const name = String(item.name || "").toLowerCase();
        const text = String(item.text || item.description || "").toLowerCase();
        if (
          !phone.includes(term) &&
          !name.includes(term) &&
          !text.includes(term)
        ) {
          return false;
        }
      }

      if (dateFilter) {
        // Convert both to yyyy-mm-dd (UTC) for comparison with input type="date"
        const itemDate = (() => {
          try {
            const d = typeof item.createdAt?.toDate === "function"
              ? item.createdAt.toDate()
              : new Date(item.createdAt);
            // Adjust for timezone offset to get local date as yyyy-mm-dd
            const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
            return local.toISOString().slice(0, 10);
          } catch {
            return "";
          }
        })();
        if (itemDate !== dateFilter) {
          return false;
        }
      }

      return true;
    });
  }, [items, permissionFilter, searchTerm, dateFilter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  function handleSearchClick() {
    setSearchTerm(searchInput.trim());
  }

  async function togglePermission(id) {
    if (!firebaseConfigured) return;
    const db = getDb();
    if (!db) return;

    const item = items.find((x) => x.id === id);
    if (!item) return;

    const nextPermission = !item.permission;

    setUpdatingId(id);
    try {
      await updateDoc(doc(db, "reviews", id), {
        permission: nextPermission,
      });
      setItems((prev) =>
        prev.map((x) =>
          x.id === id
            ? {
                ...x,
                permission: nextPermission,
              }
            : x
        )
      );
    } catch {
      setError("Failed to update permission.");
    } finally {
      setUpdatingId("");
    }
  }

  async function deleteReview(id) {
    if (!firebaseConfigured) return;
    const db = getDb();
    if (!db) return;

    setDeletingId(id);
    try {
      await deleteDoc(doc(db, "reviews", id));
      setItems((prev) => prev.filter((x) => x.id !== id));
    } catch {
      setError("Failed to delete review.");
    } finally {
      setDeletingId("");
    }
  }

  return (
    <>
      <Helmet>
        <title>Manage Reviews | AquaaLiv</title>
      </Helmet>

      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Manage Reviews
            </h1>
            <p className="mt-2 text-slate-600">
              View, approve, and delete customer reviews.
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {error}
          </div>
        )}

        <div className="mb-6 space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full lg:max-w-md">
              <label className="block text-sm font-medium text-slate-700">
                Search Reviews
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Search by name, phone, or review text"
                />
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:w-auto">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Visibility Status Filter
                </label>
                <select
                  value={permissionFilter}
                  onChange={(e) => setPermissionFilter(e.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                  <option value="all">All</option>
                  <option value="true">Visible</option>
                  <option value="false">Hidden</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Posted Date
                </label>
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-600">
            Loading reviews...
          </div>
        ) : pageItems.length === 0 ? (
          <div className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-600">
            No reviews found.
          </div>
        ) : (
          <>
            <div className="mt-4 space-y-3 md:hidden">
              {pageItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                        {formatDate(item.createdAt)}
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {item.name || "-"}
                      </div>
                      <div className="text-xs text-slate-600">
                        {item.phone || "-"}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-0.5 text-xs">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={
                              item.rating >= star
                                ? "text-yellow-400"
                                : "text-slate-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => togglePermission(item.id)}
                        disabled={updatingId === item.id}
                        role="switch"
                        aria-checked={item.permission}
                        aria-label={
                          item.permission
                            ? "Hide this review on the public site"
                            : "Show this review on the public site"
                        }
                        className={`inline-flex h-8 min-w-[96px] items-center justify-between rounded-full px-3 text-[11px] font-semibold shadow-sm outline-none transition-colors transition-shadow duration-200 ease-out ${
                          item.permission
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                        } ${
                          updatingId === item.id
                            ? "cursor-wait opacity-60"
                            : "cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-1"
                        }`}
                      >
                        <span className="select-none">
                          {item.permission ? "Visible" : "Hidden"}
                        </span>
                        <span
                          className={`relative ml-2 inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full ${
                            item.permission ? "bg-emerald-300" : "bg-slate-500"
                          } transition-colors duration-200 ease-out`}
                        >
                          <span
                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out ${
                              item.permission
                                ? "translate-x-[18px]"
                                : "translate-x-[2px]"
                            }`}
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-700">
                    {item.text || item.description || "-"}
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => deleteReview(item.id)}
                      disabled={deletingId === item.id}
                      className="inline-flex h-8 items-center justify-center rounded-full border border-rose-300 px-3 text-[11px] font-semibold text-rose-700 shadow-sm hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 disabled:opacity-60"
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 hidden w-full overflow-x-auto rounded-lg border border-slate-200 bg-white md:block">
              <table className="w-full min-w-full border-collapse text-xs sm:text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:w-48">
                      Created Date
                    </th>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:w-40">
                      Name
                    </th>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:w-32">
                      Phone
                    </th>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:min-w-[260px]">
                      Review Description
                    </th>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:w-32">
                      Review Star
                    </th>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:w-40">
                      Visibility
                    </th>
                    <th className="border border-slate-200 px-2 py-2 text-left text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs md:text-sm md:w-32">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.map((item) => (
                    <tr key={item.id} className="odd:bg-white even:bg-slate-50">
                      <td className="border border-slate-100 px-2 py-2 align-top whitespace-nowrap text-xs text-slate-700 sm:px-3 sm:text-sm">
                        {formatDate(item.createdAt)}
                      </td>
                      <td className="border border-slate-100 px-2 py-2 align-top text-xs text-slate-700 sm:px-3 sm:text-sm">
                        {item.name || "-"}
                      </td>
                      <td className="border border-slate-100 px-2 py-2 align-top whitespace-nowrap text-xs text-slate-700 sm:px-3 sm:text-sm">
                        {item.phone || "-"}
                      </td>
                      <td className="border border-slate-100 px-2 py-2 align-top text-xs text-slate-700 max-w-[220px] sm:px-3 sm:text-sm md:max-w-md">
                        <div className="line-clamp-3 leading-relaxed">
                          {item.text || item.description || "-"}
                        </div>
                      </td>
                      <td className="border border-slate-100 px-2 py-2 align-top sm:px-3">
                        <div className="flex items-center gap-0.5 text-xs sm:text-sm">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={
                                item.rating >= star
                                  ? "text-yellow-400"
                                  : "text-slate-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="border border-slate-100 px-2 py-2 align-top sm:px-3">
                        <button
                          type="button"
                          onClick={() => togglePermission(item.id)}
                          disabled={updatingId === item.id}
                          role="switch"
                          aria-checked={item.permission}
                          aria-label={
                            item.permission
                              ? "Hide this review on the public site"
                              : "Show this review on the public site"
                          }
                          className={`inline-flex h-8 min-w-[96px] items-center justify-between rounded-full px-3 text-[11px] font-semibold shadow-sm outline-none transition-colors transition-shadow duration-200 ease-out ${
                            item.permission
                              ? "bg-emerald-500 text-white hover:bg-emerald-600"
                              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                          } ${
                            updatingId === item.id
                              ? "cursor-wait opacity-60"
                              : "cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-1"
                          }`}
                        >
                          <span className="select-none">
                            {item.permission ? "Visible" : "Hidden"}
                          </span>
                          <span
                            className={`relative ml-2 inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full ${
                              item.permission ? "bg-emerald-300" : "bg-slate-500"
                            } transition-colors duration-200 ease-out`}
                          >
                            <span
                              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out ${
                                item.permission
                                  ? "translate-x-[18px]"
                                  : "translate-x-[2px]"
                              }`}
                            />
                          </span>
                        </button>
                      </td>
                      <td className="border border-slate-100 px-2 py-2 align-top sm:px-3">
                        <button
                          type="button"
                          onClick={() => deleteReview(item.id)}
                          disabled={deletingId === item.id}
                          className="inline-flex h-8 items-center justify-center rounded-full border border-rose-300 px-3 text-[11px] font-semibold text-rose-700 shadow-sm hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 disabled:opacity-60"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {pageCount > 1 && (
          <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
            <div>
              Page {currentPage} of {pageCount}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 hidden">
          <TestimonialCard
            name="Preview"
            role="Customer"
            text="Sample review preview"
            rating={5}
          />
        </div>
      </section>
    </>
  );
}
