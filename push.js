const { execSync } = require("child_process");
const msg = process.argv[2] || "Update";
execSync(`git add . && git commit -m "${msg}" && git push -u origin main`, {
  stdio: "inherit",
});