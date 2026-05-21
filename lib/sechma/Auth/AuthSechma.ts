import z from "zod";

const RegisterSchmea = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
export type RegisterSchmea = z.infer<typeof RegisterSchmea>;
export { RegisterSchmea };

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
export type LoginType = z.infer<typeof loginSchema>;
export { loginSchema };
