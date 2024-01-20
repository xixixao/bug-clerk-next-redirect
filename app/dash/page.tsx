import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Dash() {
  // simulate getting token, which
  // we could use to determine where
  // to redirect the user to.
  console.log(await auth().getToken());
  // simulate more delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  redirect("/dash/private");
}
