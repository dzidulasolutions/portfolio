import type { ProfileType } from "@/content/types";

export type CodeTokenType = "keyword" | "type" | "string" | "comment" | "property" | "punct" | "plain";

export interface CodeToken {
  text: string;
  type: CodeTokenType;
}

export const DEVELOPER_SNIPPETS: Record<ProfileType, CodeToken[][]> = {
  front: [
    [{ text: "class ", type: "keyword" }, { text: "Developer", type: "type" }, { text: " {", type: "punct" }],
    [{ text: "  readonly ", type: "keyword" }, { text: "name", type: "property" }, { text: ": ", type: "punct" }, { text: "string", type: "type" }, { text: " = ", type: "punct" }, { text: '"Gamatho Joel Dzidula Koffi"', type: "string" }, { text: ";", type: "punct" }],
    [{ text: "", type: "plain" }],
    [{ text: "  readonly ", type: "keyword" }, { text: "stack", type: "property" }, { text: ": ", type: "punct" }, { text: "string[]", type: "type" }, { text: " = [", type: "punct" }],
    [{ text: '    "React",', type: "string" }, { text: "        // Front-End", type: "comment" }],
    [{ text: '    "Next.js",', type: "string" }, { text: "      // Front-End", type: "comment" }],
    [{ text: '    "TypeScript",', type: "string" }, { text: "   // Front-End", type: "comment" }],
    [{ text: '    "Tailwind CSS",', type: "string" }, { text: " // Front-End", type: "comment" }],
    [{ text: "  ];", type: "punct" }],
    [{ text: "", type: "plain" }],
    [{ text: "  get ", type: "keyword" }, { text: "available", type: "property" }, { text: "(): ", type: "punct" }, { text: "boolean", type: "type" }, { text: " {", type: "punct" }],
    [{ text: "    return ", type: "keyword" }, { text: "true", type: "type" }, { text: ";", type: "punct" }, { text: " // Recherche active", type: "comment" }],
    [{ text: "  }", type: "punct" }],
    [{ text: "}", type: "punct" }],
  ],
  back: [
    [{ text: "class ", type: "keyword" }, { text: "Developer", type: "type" }, { text: " {", type: "punct" }],
    [{ text: "  readonly ", type: "keyword" }, { text: "name", type: "property" }, { text: ": ", type: "punct" }, { text: "string", type: "type" }, { text: " = ", type: "punct" }, { text: '"Gamatho Joel Dzidula Koffi"', type: "string" }, { text: ";", type: "punct" }],
    [{ text: "", type: "plain" }],
    [{ text: "  readonly ", type: "keyword" }, { text: "stack", type: "property" }, { text: ": ", type: "punct" }, { text: "string[]", type: "type" }, { text: " = [", type: "punct" }],
    [{ text: '    "Node.js",', type: "string" }, { text: "   // Back-End", type: "comment" }],
    [{ text: '    "NestJS",', type: "string" }, { text: "    // Back-End", type: "comment" }],
    [{ text: '    "MongoDB",', type: "string" }, { text: "   // Base de données", type: "comment" }],
    [{ text: '    "Prisma",', type: "string" }, { text: "    // ORM", type: "comment" }],
    [{ text: "  ];", type: "punct" }],
    [{ text: "", type: "plain" }],
    [{ text: "  get ", type: "keyword" }, { text: "available", type: "property" }, { text: "(): ", type: "punct" }, { text: "boolean", type: "type" }, { text: " {", type: "punct" }],
    [{ text: "    return ", type: "keyword" }, { text: "true", type: "type" }, { text: ";", type: "punct" }, { text: " // Recherche active", type: "comment" }],
    [{ text: "  }", type: "punct" }],
    [{ text: "}", type: "punct" }],
  ],
  fullstack: [
    [{ text: "class ", type: "keyword" }, { text: "Developer", type: "type" }, { text: " {", type: "punct" }],
    [{ text: "  readonly ", type: "keyword" }, { text: "name", type: "property" }, { text: ": ", type: "punct" }, { text: "string", type: "type" }, { text: " = ", type: "punct" }, { text: '"Gamatho Joel Dzidula Koffi"', type: "string" }, { text: ";", type: "punct" }],
    [{ text: "", type: "plain" }],
    [{ text: "  readonly ", type: "keyword" }, { text: "stack", type: "property" }, { text: ": ", type: "punct" }, { text: "string[]", type: "type" }, { text: " = [", type: "punct" }],
    [{ text: '    "React",', type: "string" }, { text: "     // Front-End", type: "comment" }],
    [{ text: '    "Next.js",', type: "string" }, { text: "   // Front-End", type: "comment" }],
    [{ text: '    "Node.js",', type: "string" }, { text: "   // Back-End", type: "comment" }],
    [{ text: '    "NestJS",', type: "string" }, { text: "    // Back-End", type: "comment" }],
    [{ text: '    "MongoDB",', type: "string" }, { text: "   // Base de données", type: "comment" }],
    [{ text: "  ];", type: "punct" }],
    [{ text: "", type: "plain" }],
    [{ text: "  get ", type: "keyword" }, { text: "available", type: "property" }, { text: "(): ", type: "punct" }, { text: "boolean", type: "type" }, { text: " {", type: "punct" }],
    [{ text: "    return ", type: "keyword" }, { text: "true", type: "type" }, { text: ";", type: "punct" }, { text: " // Recherche active", type: "comment" }],
    [{ text: "  }", type: "punct" }],
    [{ text: "}", type: "punct" }],
  ],
};