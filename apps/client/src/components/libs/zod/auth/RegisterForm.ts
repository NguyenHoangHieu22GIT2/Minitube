import { strongPasswordRegex } from "@/utils/regex";
import { z } from "zod";

const registerSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  gender: z.string(),
  password: z.string().regex(strongPasswordRegex),
});

export type registerValues = z.infer<typeof registerSchema>;

export { registerSchema };
