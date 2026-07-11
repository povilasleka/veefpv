import { revalidatePath } from "next/cache";

/**
 * Shared afterChange/afterDelete hook: revalidates the given static page
 * paths so a Payload admin save is reflected without a full redeploy.
 */
export function revalidatePaths(paths: string[]) {
  return () => {
    for (const path of paths) {
      revalidatePath(path);
    }
  };
}
