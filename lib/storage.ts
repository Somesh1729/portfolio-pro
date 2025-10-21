import { randomUUID } from "crypto"
import type { InsertContactForm } from "../shared/schema"

export interface ContactMessage extends InsertContactForm {
  id: string
  createdAt: Date
}

class MemStorage {
  private contactMessages = new Map<string, ContactMessage>()

  async createContactMessage(insertMessage: InsertContactForm): Promise<ContactMessage> {
    const id = randomUUID()
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    }
    this.contactMessages.set(id, message)
    return message
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }
}

export const storage = new MemStorage()
