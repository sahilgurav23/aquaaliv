import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firebaseConfigured, getDb } from "../lib/firebase";

const initialForm = {
  name: "",
  phone: "",
  review: "",
  rating: 0,
};

function validate(values) {
  const errors = {};

  const name = values.name.trim();
  const phone = values.phone.trim();
  const review = values.review.trim();
  const rating = values.rating;

  if (!name) {
    errors.name = "Please enter your name";
  } else if (name.length < 2) {
    errors.name = "Name should be at least 2 characters";
  }

  if (!/^[0-9]{10}$/.test(phone || "")) {
    errors.phone = "Enter a valid 10-digit mobile number";
  }

  if (!review) {
    errors.review = "Please share your experience";
  } else if (review.length < 10) {
    errors.review = "Review should be at least 10 characters";
  }

  if (!rating || rating < 1 || rating > 5) {
    errors.rating = "Please select a rating";
  }

  return errors;
}

export default function AddReview() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(field, value) {
    if (field === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      value = digitsOnly;
    }

    if (field === "rating") {
      value = Number(value);
    }

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setStatusMessage("");

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    if (!firebaseConfigured) {
      setStatusMessage("Unable to submit review. Firebase is not configured.");
      return;
    }

    const db = getDb();
    if (!db) {
      setStatusMessage("Unable to submit review. Please try again later.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        role: "Customer",
        text: form.review.trim(),
        rating: form.rating,
        permission: false,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "reviews"), payload);

      setForm(initialForm);
      setErrors({});
      setStatusMessage("Thank you for your review!");
    } catch {
      setStatusMessage("Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Add Review | AquaaLiv</title>
        <meta
          name="description"
          content="Share your experience with AquaaLiv water solutions."
        />
      </Helmet>

      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Add Your Review
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Share your experience. Your feedback helps other customers choose
            safe drinking water solutions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto card">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`mt-1 w-full rounded-md border ${
                    errors.name ? "border-red-400" : "border-slate-300"
                  } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`mt-1 w-full rounded-md border ${
                    errors.phone ? "border-red-400" : "border-slate-300"
                  } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
                  placeholder="10-digit number"
                  autoComplete="tel"
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Review
              </label>
              <textarea
                value={form.review}
                onChange={(e) => handleChange("review", e.target.value)}
                className={`mt-1 w-full rounded-md border ${
                  errors.review ? "border-red-400" : "border-slate-300"
                } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300`}
                rows={5}
                placeholder="Tell us about your experience with AquaaLiv"
                required
              />
              {errors.review && (
                <p className="mt-1 text-xs text-red-600">{errors.review}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Rating
              </label>
              <div className="mt-2 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleChange("rating", star)}
                    className={`h-9 w-9 flex items-center justify-center rounded-full ${
                      form.rating >= star ? "text-yellow-400" : "text-slate-400"
                    }`}
                    aria-label={`${star} star`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={form.rating >= star ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-6 w-6"
                    >
                      <path d="M12 2l2.39 6.95H22l-5.45 3.96L18.9 20 12 15.9 5.1 20l2.35-7.09L2 8.95h7.61z" />
                    </svg>
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="mt-1 text-xs text-red-600">{errors.rating}</p>
              )}
            </div>

            {statusMessage && (
              <div
                className={`text-sm ${
                  statusMessage.toLowerCase().includes("thank")
                    ? "text-emerald-700"
                    : statusMessage.toLowerCase().includes("verified")
                    ? "text-emerald-700"
                    : "text-slate-700"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
