export async function sendContactFormData(data: Record<string, unknown>) {
  const response = await fetch(`/api/forms/contact-me/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send contact form data");
  }
}
