import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string().optional(),
  image: z.string(),
  tags: z.array(z.string()),
  category: z.enum(["Web", "Mobile", "Design", "Other"]),
  demoUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  featured: z.boolean().default(false),
});

export const skillSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["Frontend", "Backend", "Tools", "Design"]),
  proficiency: z.number().min(0).max(100),
  icon: z.string(),
});

export const educationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  field: z.string(),
  startYear: z.string(),
  endYear: z.string(),
  description: z.string().optional(),
  logo: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const socialLinkSchema = z.object({
  id: z.string(),
  platform: z.string(),
  url: z.string().url(),
  icon: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Education = z.infer<typeof educationSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;

export type InsertContactForm = z.infer<typeof contactFormSchema>;
