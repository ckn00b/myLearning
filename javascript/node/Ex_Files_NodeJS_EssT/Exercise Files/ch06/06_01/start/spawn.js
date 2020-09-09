const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("ckn00b \n");
questionApp.stdin.write("the ville \n");
questionApp.stdin.write("rule the world! \n");

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});
