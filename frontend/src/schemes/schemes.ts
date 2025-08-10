import * as Z from "zod"

export const DonationFormSchema = Z.object({
    donation_ammount: Z.string()
})