"use server";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";

export const send = (values: z.infer<typeof formSchema>) => {
  console.log(values);
};
