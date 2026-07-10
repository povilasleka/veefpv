import configPromise from "@payload-config";
import { getPayload } from "payload";
import type { AboutMe, Category, Project, Reel, WorkedWith } from "@/payload/payload-types";

export async function getCategories(): Promise<Category[]> {
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: "categories",
    sort: "_order",
    limit: 0,
  });
  return docs;
}

export async function getProjects(categoryId: Category["id"]): Promise<Project[]> {
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: "projects",
    where: { category: { equals: categoryId } },
    sort: "-createdAt",
    limit: 0,
  });
  return docs;
}

export async function getAllProjects(): Promise<Project[]> {
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: "projects",
    sort: "-createdAt",
    limit: 0,
  });
  return docs;
}

export async function getAboutMe(): Promise<AboutMe> {
  const payload = await getPayload({ config: configPromise });
  return payload.findGlobal({ slug: "about-me" });
}

export async function getWorkedWith(): Promise<WorkedWith> {
  const payload = await getPayload({ config: configPromise });
  return payload.findGlobal({ slug: "worked-with" });
}

export async function getReels(): Promise<Reel[]> {
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: "reels",
    sort: "-rank",
    limit: 10,
  });
  return docs;
}
