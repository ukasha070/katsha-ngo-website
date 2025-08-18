// third parties
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// utils
import { donationSchema } from "@/schemes/schemes";

// components
import CustomBtn from "@/components/buttons/CustomBtn";

const DonationInformationForm = () => {
  const informationFormSchema = donationSchema.pick({
    preferred_donor_name: true,
    donor_email: true,
  });

  type TInformationFormSchema = z.infer<typeof informationFormSchema>;

  const form = useForm<TInformationFormSchema>({
    resolver: zodResolver(informationFormSchema),
  });

  const formErrors = form.formState.errors;

  function onSubmit(data: TInformationFormSchema) {
    console.log(data);
  }

  return (
    <section>
      <div className="mb-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* form input */}
          <div className="form-input-container flex-col items-start">
            <label htmlFor="desired-name">Desired Name</label>
            <input
              type="text"
              className="form-input"
              {...form.register("preferred_donor_name")}
              placeholder="ukasha "
            />
            {formErrors.preferred_donor_name && (
              <div className="form-input-error-container">
                <p>{formErrors.preferred_donor_name.message}</p>
              </div>
            )}
          </div>

          {/* form input */}
          <div className="form-input-container flex-col items-start">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              {...form.register("donor_email")}
              className="form-input"
              placeholder="ukasha@mail.com"
            />
            {formErrors.donor_email && (
              <div className="form-input-error-container">
                <p>{formErrors.donor_email.message}</p>
              </div>
            )}
          </div>

          <CustomBtn
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600  font-semibold py-3 transition-colors duration-200"
          >
            <span>Donate Now</span>
          </CustomBtn>
        </form>
      </div>
    </section>
  );
};

export default DonationInformationForm;
