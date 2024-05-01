import { strongPasswordRegex } from "@/utils/regex";
import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),

  password: z.string().regex(strongPasswordRegex),
});

export type LoginValues = z.infer<typeof LoginSchema>;

export { LoginSchema };
