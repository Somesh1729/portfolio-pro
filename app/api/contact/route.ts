import { NextResponse } from "next/server"
import { storage } from "../../../lib/storage"
import { contactFormSchema } from "../../../shared/schema"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validated = contactFormSchema.parse(body)
    const message = await storage.createContactMessage(validated)
    return NextResponse.json({ success: true, message: "Message sent successfully!", id: message.id }, { status: 200 })
  } catch (err: unknown) {
    const error = err as Error
    return NextResponse.json({ success: false, error: error.message ?? "Failed to send message" }, { status: 400 })
  }
}

export async function GET() {
  try {
    const messages = await storage.getAllContactMessages()
    return NextResponse.json(messages, { status: 200 })
  } catch {
    return NextResponse.json({ success: false, error: "Failed to fetch messages" }, { status: 500 })
  }
}
