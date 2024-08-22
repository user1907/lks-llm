const fs = require("fs");
const { join } = require("path");

fs.writeFileSync(join(process.cwd(), ".env"),
    Object.entries(process.env)
        .map(([key, val]) => `${key}=${val}`)
        .join("\n")
)
