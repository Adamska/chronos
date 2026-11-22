import { z } from "zod";

export const AskEventSchema = z.object({
  id: z.string().max(80),
  title: z.string().max(160),
  year: z.number(),
  place: z.string().max(160),
  coordinates: z.tuple([z.number(), z.number()]),
  summary: z.string().max(600),
  whyHere: z.string().max(600),
});

export const AskRequestSchema = z.object({
  question: z.string().trim().min(3, "Ask a question in a few words.").max(300),
  campaignTitle: z.string().max(200),
  events: z.array(AskEventSchema).min(1).max(30),
});

export const AskAnswerSchema = z.object({
  answer: z.string().describe("Two to four sentences answering the question with concrete geography, grounded in the listed events."),
  eventIds: z.array(z.string()).describe("Ids of up to three listed events that best support the answer."),
  focus: z
    .object({ lon: z.number(), lat: z.number(), altitude: z.number().describe("Camera altitude in globe radii, 0.8 to 2.2.") })
    .nullable()
    .describe("Where the camera should fly to illustrate the answer, or null."),
});

export const AskResponseSchema = z.object({
  answer: z.string(),
  eventIds: z.array(z.string()),
  focus: z.object({ lon: z.number(), lat: z.number(), altitude: z.number() }).nullable(),
  mode: z.enum(["generated", "offline"]),
});

export type AskRequest = z.infer<typeof AskRequestSchema>;
export type AskResponse = z.infer<typeof AskResponseSchema>;
export type AskEvent = z.infer<typeof AskEventSchema>;
