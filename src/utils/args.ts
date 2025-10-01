export function getArgs() {
  const args = process.argv.slice(2);
  const input = args.find(arg => arg.startsWith("--input="))?.split("=")[1];
  const format = args.find(arg => arg.startsWith("--format="))?.split("=")[1];
  return { input, format };
}
