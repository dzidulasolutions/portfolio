import type { CodeToken } from "@/content/data/developer-snippet";

interface CodeWindowProps {
  fileName: string;
  lines: CodeToken[][];
}

const TOKEN_COLOR: Record<CodeToken["type"], string> = {
  keyword: "text-[#c586c0]",
  type: "text-[#4ec9b0]",
  string: "text-[#ce9178]",
  comment: "text-neutral-500",
  property: "text-[#9cdcfe]",
  punct: "text-neutral-300",
  plain: "text-neutral-300",
};

export function CodeWindow({ fileName, lines }: CodeWindowProps) {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden border border-accent-300 shadow-2xl">
      {/* Barre de titre */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border border-accent-300">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="font-ui text-xs text-neutral-400 ml-3">{fileName}</span>
      </div>

      {/* Contenu du code */}
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono">
          {lines.map((line, i) => (
            <div key={i}>
              {line.length === 0 || (line.length === 1 && line[0].text === "") ? (
                <br />
              ) : (
                line.map((token, j) => (
                  <span key={j} className={TOKEN_COLOR[token.type]}>
                    {token.text}
                  </span>
                ))
              )}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}