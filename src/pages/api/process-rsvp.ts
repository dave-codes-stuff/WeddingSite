import type { APIContext, APIRoute } from "astro";
import { appendFile } from "fs";
import fs from 'fs/promises';
import path from 'path';


export const POST = (async ({ request }) => {
  
  // request is now correctly typed
  const data = await request.formData();
  const name = data.get("name");
  const attendence = data.get("attendance");
  let dietary = data.get("dietary");
  if (dietary === '') { dietary = "none"}

  const filePath = path.resolve(process.cwd(), "rsvplist.txt")

  await fs.appendFile(filePath, name + ', ' + attendence + ', ' + dietary + '\n');

  return new Response();
}) satisfies APIRoute;