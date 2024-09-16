import { reactions } from "../db/schema.ts";
import { AppContext } from "../mod.ts";
import { type Resolvable } from "@deco/deco";
import { eq } from "https://esm.sh/drizzle-orm@0.30.10";
import { BlogPost, Reaction } from "../types.ts";
import { logger } from "@deco/deco/o11y";
export async function getRecordsByPath<T>(
  ctx: AppContext,
  path: string,
  accessor: string,
): Promise<T[]> {
  const resolvables: Record<string, Resolvable<T>> = await ctx.get({
    __resolveType: "resolvables",
  });
  const current = Object.entries(resolvables).flatMap(([key, value]) => {
    return key.startsWith(path) ? value : [];
  });
  return (current as Record<string, T>[]).map((item) => item[accessor]);
}

export async function getReactionFromSlug(
  { ctx, slug }: { ctx: AppContext; slug: string },
): Promise<Reaction[]> {
  const records = await ctx.invoke.records.loaders.drizzle();
  try {
    const currentReactions = await records.select({
      postSlug: reactions.postSlug,
      person: reactions.person,
      datePublished: reactions.datePublished,
      dateModified: reactions.dateModified,
      action: reactions.action,
    })
      .from(reactions).where(eq(reactions.postSlug, slug)) as Reaction[];

    return currentReactions;
  } catch (e) {
    logger.error(e);
    return [];
  }
}

export async function getReactions(
  { ctx, post }: { ctx: AppContext; post: BlogPost },
): Promise<BlogPost> {
  const currentReactions = await getReactionFromSlug({
    ctx,
    slug: post.slug,
  });

  return {
    ...post,
    reactions: currentReactions,
  };
}
