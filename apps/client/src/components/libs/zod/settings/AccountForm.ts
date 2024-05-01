import { strongPasswordRegex } from "@/utils/regex";
import z from "zod";

const AccountSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),

  username: z
    .string()
    .min(2, { message: "The username has to be longer than 2 characters" }),

  gender: z.union([z.literal("male"), z.literal("female"), z.literal("other")]),

  password: z.string().regex(strongPasswordRegex),
});

export type AccountValues = z.infer<typeof AccountSchema>;

export { AccountSchema };
