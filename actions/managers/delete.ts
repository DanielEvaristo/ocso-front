"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteManager(
  managerId: string,
  formData: FormData
) {
  let manager: any = {};
  for (const key of formData.keys()) {
    manager[key] = formData.get(key);
  }
  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "DELETE",
    headers: { ...authHeaders() },
  });

  if (response.status === 200) {
    revalidateTag("dashboard:managers");
    redirect("dashboard:managers");
  }
}
