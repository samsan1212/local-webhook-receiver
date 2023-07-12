export async function convertRequestBody(
  req: Request,
): Promise<Record<string, unknown> | string> {
  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return await req.json();
  }

  if (
    contentType.match(
      /(application\/x-www-form-urlencoded|multipart\/form-data)/i,
    )
  ) {
    const formData = await req.formData();
    return Object.fromEntries(formData.entries());
  }

  return await req.text();
}
