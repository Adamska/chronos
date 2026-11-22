import { z } from "zod";

export const DifficultySchema = z.enum(["easy", "normal", "hard"]);

export const ClassChallengeInputSchema = z.object({
  campaignId: z.string().min(2).max(80),
  title: z.string().trim().min(2, "Give the challenge a title.").max(80),
  difficulty: DifficultySchema,
  eventIds: z.array(z.string().max(80)).min(3, "Pick at least three events.").max(10, "Pick at most ten events."),
});

export const ClassChallengeSchema = ClassChallengeInputSchema.extend({
  code: z.string(),
  createdAt: z.string(),
});

export const ClassResultInputSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(40),
  score: z.number().int().min(0).max(10_000),
  rounds: z.array(z.object({ eventId: z.string().max(80), distanceKm: z.number().min(0).max(25_000), points: z.number().int().min(0).max(1000) })).max(10),
});

export const ClassResultSchema = ClassResultInputSchema.extend({ submittedAt: z.string() });

export type ClassChallenge = z.infer<typeof ClassChallengeSchema>;
export type ClassResult = z.infer<typeof ClassResultSchema>;
