"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { needHelpSchema } from "@/schemes/schemes";
import CustomBtn from "../buttons/CustomBtn";

type FormData = z.infer<typeof needHelpSchema>;

const NeedHelpForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(needHelpSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form submitted!"); // Replace with API call
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 max-w-md py-16"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Need Help Form</h2>

      {/* Full Name */}
      <div>
        <input
          type="text"
          {...register("full_name")}
          placeholder="Full name"
          className="form-input h-12 rounded-none mb-0"
        />
        {errors.full_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.full_name.message}
          </p>
        )}
      </div>

      {/* Contact (Email or Phone) */}
      <div>
        <input
          type="text"
          {...register("contact")}
          placeholder="Email or Phone"
          className="form-input h-12 rounded-none mb-0"
        />
        {errors.contact && (
          <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
        )}
      </div>

      {/* How did you hear about us */}
      <div>
        <label className="block font-medium text-gray-700">
          How did you hear about us?
        </label>
        <div className="flex gap-4 mt-1">
          {["Friend", "Social Media", "Other"].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                value={option}
                {...register("how_hear")}
                className="accent-blue-500"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.how_hear && (
          <p className="text-red-500 text-sm mt-1">{errors.how_hear.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <input
          type="text"
          {...register("subject")}
          className="form-input h-12 rounded-none mb-0"
          placeholder="Breify message (subject)"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Content (CKEditor) */}
      <div>
        <Controller
          name="content"
          control={control}
          defaultValue="Content"
          render={({ field }) => (
            <CKEditor
              editor={ClassicEditor}
              data={field.value || ""}
              onChange={(event, editor) => {
                field.onChange(editor.getData());
              }}
            />
          )}
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <input
          type="text"
          {...register("location")}
          placeholder="Location (Uganda - Ndejje Kannaba)"
          className="form-input h-12 rounded-none mb-0"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Submit */}
      <CustomBtn
        type="submit"
        className="w-full bg-yellow-600  py-3 rounded-md hover:bg-yellow-700 transition-colors"
      >
        Submit
      </CustomBtn>
    </form>
  );
};

export default NeedHelpForm;
