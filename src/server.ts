import { fastify } from "fastify";
import { prisma } from './lib/prisma'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-videos";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";
const app = fastify();

app.register(fastifyCors, {
  // address where frond-end is at 
  origin: '*',
})
app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log("HTTP Server Running")
})