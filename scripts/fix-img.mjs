import fs from "fs";

let content = fs.readFileSync("app/page.tsx", "utf8");
content = content.replace(/<img\s*"\//g, '<img src="/');
fs.writeFileSync("app/page.tsx", content);
console.log("fixed", content.match(/src="\/assets\//g)?.length ?? 0, "images");
