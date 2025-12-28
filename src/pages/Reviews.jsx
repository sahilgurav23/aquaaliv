import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Link } from "react-router-dom";

import TestimonialCard from "../components/TestimonialCard";
import { firebaseConfigured, getDb } from "../lib/firebase";

const PAGE_SIZE = 9;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!firebaseConfigured) {
      return;
    }

    const db = getDb();
    if (!db) {
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        const q = query(
          collection(db, "reviews"),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        if (cancelled) return;
        const items = snap.docs
          .map((d) => ({
            id: d.id,
            ...d.data(),
          }))
          .filter(
            (item) => item.permission === true || item.permission === "true"
          );
        setReviews(items);
      } catch {
        if (!cancelled) {
          setReviews([]);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Customer Reviews | AquaaLiv</title>
        <meta
          name="description"
          content="Read customer reviews for AquaaLiv water solutions."
        />
      </Helmet>

      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Customer Reviews
          </h1>
          <p className="mt-2 text-slate-600">
            What our customers say about AquaaLiv
          </p>
        </div>

        {reviews.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE).map((t) => (
                <TestimonialCard key={t.id} {...t} />
              ))}
            </div>
            {reviews.length > PAGE_SIZE && (
              <div className="flex justify-between items-center mt-8">
                <button
                  className="btn-secondary"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p-1))}
                >
                  Previous
                </button>
                <span className="text-slate-600 text-sm">
                  Page {page} of {Math.ceil(reviews.length / PAGE_SIZE)}
                </span>
                <button
                  className="btn-secondary"
                  disabled={page === Math.ceil(reviews.length / PAGE_SIZE)}
                  onClick={() => setPage((p) => Math.min(Math.ceil(reviews.length / PAGE_SIZE), p+1))}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-slate-600">
            <p>No reviews available yet.</p>
            <p className="mt-4">
              <Link to="/add-review" className="btn-primary">
                Add Your Review
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  );
}

