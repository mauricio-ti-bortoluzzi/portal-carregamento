import { z } from "zod";

export const filterSchema = z.object({
  estimatedDeliveryDate: z.string().optional(),
  product: z.string().optional(),
  region: z.string().optional(),
});

export type FilterProps = z.infer<typeof filterSchema>;
