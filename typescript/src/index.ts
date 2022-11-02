async function log(msg: string): Promise<boolean> {
  try {
    console.log(msg);
    return true;
  } catch(e) {
    console.error(e);
    return false;
  }
}

function main(): void {
  log('hello world')
}

main();
