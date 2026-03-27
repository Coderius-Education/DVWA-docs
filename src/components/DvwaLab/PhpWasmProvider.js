let phpInstance = null;
let loadingPromise = null;

export async function getPhp() {
  if (phpInstance) return phpInstance;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    const { PhpWeb } = await import('php-wasm/PhpWeb.mjs');
    const php = new PhpWeb();
    await php.binary;
    phpInstance = php;
    return php;
  })();

  return loadingPromise;
}

export async function runPhp(code, getData, postData) {
  const php = await getPhp();
  // Inject superglobals
  let injected = code;
  if (getData && Object.keys(getData).length > 0) {
    const assignments = Object.entries(getData)
      .map(([k, v]) => `$_GET['${k}'] = '${v.replace(/'/g, "\\'")}';`)
      .join('\n');
    injected = injected.replace('<?php', `<?php\n${assignments}\n`);
  }
  if (postData && Object.keys(postData).length > 0) {
    const assignments = Object.entries(postData)
      .map(([k, v]) => `$_POST['${k}'] = '${v.replace(/'/g, "\\'")}';`)
      .join('\n');
    injected = injected.replace('<?php', `<?php\n${assignments}\n`);
  }
  const output = await php.run(injected);
  return output.text || output;
}
