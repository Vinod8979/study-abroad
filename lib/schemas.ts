import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),  // Correct email validation
  phone: z.string().min(10).max(15),
  message: z.string().min(1), // Setting minimum length for message
})
