const { spawnSync } = require("child_process");

console.log(
    new Buffer.from(
        spawnSync("tsc", ["--build", "--verbose"]).stdout
    ).toString()
);

console.log(
  new Buffer.from(
    spawnSync("zip", ["-r", "build/forwardMessage.zip", "node_modules"]).stdout
  ).toString()
);

console.log(
  new Buffer.from(
    spawnSync("zip", ["-j", "build/forwardMessage.zip", "build/forwardMessage.js"]).stdout
  ).toString()
);

console.log(
  new Buffer.from(
    spawnSync("cp", ["api-template.yaml", "build/api-template.yaml"]).stdout
  ).toString()
);

console.log(
  new Buffer.from(
    spawnSync("cp", ["api-template-config.json", "build/api-template-config.json"]).stdout
  ).toString()
);
