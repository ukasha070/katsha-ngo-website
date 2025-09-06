"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Upload, Link as LinkIcon, User, Briefcase, X } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  function onFileSelect(file: File) {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleFileInput(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onFileSelect(file);
  }

  function handleDragOver(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) setDragActive(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Demo payload — replace with your API call or form action
    const payload = new FormData();
    payload.append("name", name);
    payload.append("jobTitle", jobTitle);
    payload.append("profileUrl", profileUrl);
    if (imageFile) payload.append("image", imageFile);

    try {
      await new Promise((r) => setTimeout(r, 900));
      alert("Testimonial submitted! (demo)");
      setName("");
      setJobTitle("");
      setProfileUrl("");
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-md border border-black-200 bg-white/70 px-4 py-3 outline-none focus:ring-4 focus:ring-yellow-500/30 focus:border-yellow-500 transition";

  return (
    <section className="relative isolate z-30">
      <div className="fixed inset-0 py-8 overflow-auto h-screen">
        <div className="overlay-container -z-10 " />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl p-7 bg-background "
        >
          {/* Header */}
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Share Your <span className="text-yellow-500">Testimonial</span>
              </h2>
              <p className="mt-3 ">
                Add a short testimonial and your details. We may feature it on
                our website to inspire others to support our mission.
              </p>
            </div>
            <span className="max-sm:hidden inline-flex items-center rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-500/20">
              Community Voices
            </span>
          </div>

          {/* Card */}
          <div className="relative overflow-hidden pb-24">
            {/* Accent corners */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-yellow-500/20 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-yellow-500/20 blur-2xl" />

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:p-8"
            >
              {/* Left column */}
              <div className="lg:col-span-3 space-y-5">
                {/* Name */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Full Name
                  </span>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Amina N."
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                </label>

                {/* Job Title */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Job Title
                  </span>
                  <div className="relative">
                    <Briefcase className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      required
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g., Software Engineer"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                </label>

                {/* Profile Link */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Profile Link
                  </span>
                  <div className="relative">
                    <LinkIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="url"
                      inputMode="url"
                      pattern="https?://.*"
                      title="Please enter a valid URL (starting with http or https)"
                      value={profileUrl}
                      onChange={(e) => setProfileUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/your-profile"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                </label>

                {/* Testimonial text */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Testimonial
                  </span>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write a short message about your experience or why you support our mission..."
                    className={`${inputBase} resize-none`}
                  />
                </label>
              </div>

              {/* Right column */}
              <div className="lg:col-span-2 flex flex-col gap-5">
                {/* Image uploader */}
                <label
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`group relative grid place-items-center rounded-2xl border-2 border-dashed p-6 transition ${
                    dragActive
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="sr-only"
                  />
                  {imagePreview ? (
                    <div className="relative w-full">
                      <img
                        src={imagePreview}
                        alt="Selected preview"
                        className="h-52 w-full object-cover rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                        }}
                        className="absolute right-2 top-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow ring-1 ring-gray-200 hover:bg-white"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto h-10 w-10 text-gray-400" />
                      <p className="mt-3 text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Upload a photo
                        </span>{" "}
                        or drag & drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to ~5MB
                      </p>
                      <span className="mt-3 inline-flex items-center justify-center rounded-xl bg-yellow-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:brightness-95">
                        Choose Image
                      </span>
                    </div>
                  )}
                </label>

                {/* Submit */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -1 }}
                  disabled={submitting}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-5 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="relative flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </span>
                  ) : (
                    <>Submit Testimonial</>
                  )}
                </motion.button>

                {/* Helper text */}
                <div className="flex flex-col gap-4">
                  <p className="text-base">
                    You testimonial will first be validated to protected our
                    site.
                  </p>

                  <p className="text-base">
                    By submitting, you agree that we may feature your
                    testimonial and photo on our website and social channels.
                    You can request removal at any time.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        <button
          type="button"
          className="w-16 h-16 flex items-center justify-center fixed bg-accent border-2 border-black/20 rounded-md z-40 top-4 right-4"
        >
          <X />
        </button>
      </div>
    </section>
  );
}
