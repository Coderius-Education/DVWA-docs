import React, { useState, useEffect, useRef, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';
import { bruteForce } from './modules/brute_force';
import { commandInjection } from './modules/command_injection';
import { authorizationBypass } from './modules/authorization_bypass';

const modules = {
  brute_force: bruteForce,
  command_injection: commandInjection,
  authorization_bypass: authorizationBypass,
};

/**
 * Simulate PHP execution in JavaScript.
 * Parses the PHP source and the form data, then produces the same HTML
 * output that the PHP code would generate. The PHP source is shown for
 * educational purposes; the simulation runs entirely in JS.
 */
function simulatePhp(phpSource, moduleName, level, formData) {
  const key = `${moduleName}_${level}`;

  // --- Brute Force (low / medium / high) ---
  if (moduleName === 'brute_force') {
    const users = { admin: 'password', user1: '12345', student: 'welkom' };
    let message = '';
    const username = formData.username || '';
    const password = formData.password || '';

    if (username && password) {
      if (users[username] && users[username] === password) {
        message = `<div style="color:#27c93f;padding:10px;border:1px solid #27c93f;border-radius:4px;margin:10px 0">Welkom, ${escapeHtml(username)}!${level === 'low' ? ' Je hebt toegang.' : ''}</div>`;
      } else {
        if (level === 'low') {
          message = '<div style="color:#ff5f56;padding:10px;border:1px solid #ff5f56;border-radius:4px;margin:10px 0">Gebruikersnaam of wachtwoord onjuist.</div>';
        } else if (level === 'medium') {
          message = '<div style="color:#ff5f56;padding:10px;border:1px solid #ff5f56;border-radius:4px;margin:10px 0">Gebruikersnaam of wachtwoord onjuist.<br><small>&#9201; Bij een fout antwoord wordt het systeem 2 seconden geblokkeerd.</small></div>';
        } else {
          message = '<div style="color:#ff5f56;padding:10px;border:1px solid #ff5f56;border-radius:4px;margin:10px 0">Gebruikersnaam of wachtwoord onjuist.<br><small>&#128274; Anti-CSRF token: elke poging vereist een nieuw token.</small></div>';
        }
      }
    }

    const token = Math.random().toString(36).substring(2, 18);
    let tokenFields = '';
    if (level === 'high') {
      tokenFields = `<input type="hidden" name="user_token" value="${token}" />\n`;
    }
    let tokenDisplay = '';
    if (level === 'high') {
      tokenDisplay = `<p style="font-size:0.8em;color:#888">Token: ${token}</p>`;
    }

    return `${message}
<h3>Login</h3>
<form method="GET">
  <div style="margin:8px 0"><label>Username:</label><br><input type="text" name="username" style="padding:6px;width:200px" /></div>
  <div style="margin:8px 0"><label>Password:</label><br><input type="password" name="password" style="padding:6px;width:200px" /></div>
  ${tokenFields}<button type="submit" style="padding:8px 20px;cursor:pointer;margin-top:8px">Login</button>
</form>
${tokenDisplay}`;
  }

  // --- Command Injection (low / medium / high) ---
  if (moduleName === 'command_injection') {
    let message = '';
    const ip = formData.ip || '';

    if (ip) {
      let target = ip;

      // Apply filters based on level
      if (level === 'medium') {
        target = target.replace(/&&/g, '');
        target = target.replace(/;/g, '');
      } else if (level === 'high') {
        target = target.replace(/&&/g, '');
        target = target.replace(/;/g, '');
        target = target.replace(/\|\| /g, '');
        target = target.replace(/\| /g, '');
      }

      const fullCmd = 'ping -c 4 ' + target;
      const output = simulateShellExec(fullCmd);
      message = `<pre style="background:#1e1e1e;color:#d4d4d4;padding:12px;border-radius:4px;overflow-x:auto">${escapeHtml(output)}</pre>`;

      if (level === 'medium') {
        message += '<p style="font-size:0.85em;color:#888">Gefilterde tekens: <code>&&</code> <code>;</code></p>';
      } else if (level === 'high') {
        message += '<p style="font-size:0.85em;color:#888">Gefilterde tekens: <code>&&</code> <code>;</code> <code>|| </code> <code>| </code></p>';
      }
    }

    return `${message}
<h3>Ping een IP-adres</h3>
<form method="POST">
  <div style="margin:8px 0"><label>IP-adres:</label><br><input type="text" name="ip" placeholder="127.0.0.1" style="padding:6px;width:250px" /></div>
  <button type="submit" style="padding:8px 20px;cursor:pointer">Submit</button>
</form>`;
  }

  // --- Authorization Bypass (low / medium / high) ---
  if (moduleName === 'authorization_bypass') {
    if (level === 'high') {
      // High level: session token required
      if (!window.__dvwa_auth_token) {
        window.__dvwa_auth_token = Math.random().toString(36).substring(2, 18);
      }
      const sessionToken = window.__dvwa_auth_token;
      const role = formData.role || 'user';
      const submittedToken = formData.token || '';

      let content = '';
      if (role === 'admin') {
        if (submittedToken === sessionToken) {
          content = `<div style="color:#27c93f;padding:15px;border:2px solid #27c93f;border-radius:8px;margin:10px 0">
            <h4>Admin Dashboard</h4>
            <p>Welkom, admin! Toegang geverifieerd met sessie-token.</p>
            <ul>
                <li>Database wachtwoord: <code>supersecret123</code></li>
                <li>API key: <code>sk-dvwa-demo-key-12345</code></li>
                <li>Sessies actief: 42</li>
            </ul>
        </div>`;
        } else {
          content = `<div style="color:#ff5f56;padding:15px;border:2px solid #ff5f56;border-radius:8px;margin:10px 0">
            <h4>Toegang geweigerd</h4>
            <p>Ongeldig sessie-token. Je hebt niet het juiste token meegestuurd.</p>
        </div>`;
        }
      } else {
        content = `<div style="padding:15px;border:2px solid #ffbd2e;border-radius:8px;margin:10px 0">
            <h4>Gebruiker Dashboard</h4>
            <p>Je hebt beperkte toegang.</p>
            <p style="color:#888">Sessie-token: <code>${escapeHtml(sessionToken)}</code></p>
        </div>`;
      }

      return `${content}\n<p style="font-size:0.85em;color:#888">Hint: de server vereist een geldig sessie-token. Kun je het token vinden en meesturen?</p>`;
    }

    const roleParam = level === 'low' ? 'role' : 'cookie_role';
    const role = formData[roleParam] || 'user';

    let content = '';
    if (role === 'admin') {
      const adminDetails = level === 'low'
        ? `<p>Welkom, admin! Hier zijn de geheime gegevens:</p>
        <ul>
            <li>Database wachtwoord: <code>supersecret123</code></li>
            <li>API key: <code>sk-dvwa-demo-key-12345</code></li>
            <li>Aantal gebruikers: 1337</li>
        </ul>`
        : `<p>Welkom, admin!</p>
        <ul>
            <li>Server status: <span style="color:#27c93f">Online</span></li>
            <li>Backup: laatste backup 2 uur geleden</li>
        </ul>`;
      content = `<div style="color:#27c93f;padding:15px;border:2px solid #27c93f;border-radius:8px;margin:10px 0">
        <h4>Admin Dashboard</h4>
        ${adminDetails}
    </div>`;
    } else {
      const roleDisplay = level === 'low'
        ? `<p style="color:#888">Je bent ingelogd als: <strong>${escapeHtml(role)}</strong></p>`
        : `<p style="color:#888">Cookie role: <code>${escapeHtml(role)}</code></p>`;
      content = `<div style="padding:15px;border:2px solid #ffbd2e;border-radius:8px;margin:10px 0">
        <h4>Gebruiker Dashboard</h4>
        <p>${level === 'low' ? 'Welkom! Je hebt beperkte toegang.' : 'Je hebt beperkte toegang.'}</p>
        ${roleDisplay}
    </div>`;
    }

    const hint = level === 'low'
      ? '<p style="font-size:0.85em;color:#888">Hint: bekijk de URL-parameters...</p>'
      : '<p style="font-size:0.85em;color:#888">Hint: de rol zit in een cookie. Open Developer Tools &rarr; Application &rarr; Cookies...</p>';

    return `${content}\n${hint}`;
  }

  return '<p>Module niet gevonden.</p>';
}

function simulateShellExec(cmd) {
  const parts = cmd.split(/([;]|&&|\|\||\|)/);
  let output = '';

  for (const part of parts) {
    const trimmed = part.trim();
    if ([';', '&&', '||', '|'].includes(trimmed)) continue;
    if (!trimmed) continue;
    output += simulateCommand(trimmed) + '\n';
  }
  return output;
}

function simulateCommand(cmd) {
  const trimmed = cmd.trim();
  if (trimmed.startsWith('ping')) {
    const host = trimmed.replace(/ping\s*(-c\s*\d+\s*)?/, '').trim() || '127.0.0.1';
    return `PING ${host}: 64 bytes, icmp_seq=1 ttl=64 time=0.5ms\n64 bytes from ${host}: icmp_seq=2 ttl=64 time=0.4ms`;
  }
  if (trimmed === 'whoami') return 'www-data';
  if (trimmed === 'id') return 'uid=33(www-data) gid=33(www-data) groups=33(www-data)';
  if (trimmed === 'ls') return 'config\nindex.php\nlogin.php\n.htaccess';
  if (trimmed === 'pwd') return '/var/www/html';
  if (trimmed === 'cat /etc/passwd') return 'root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nstudent:x:1000:1000::/home/student:/bin/bash';
  if (trimmed === 'uname -a') return 'Linux dvwa-lab 5.15.0 #1 SMP x86_64 GNU/Linux';
  if (trimmed === 'hostname') return 'dvwa-lab';
  const firstWord = trimmed.split(' ')[0];
  return `bash: ${firstWord}: command not found`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getLevelColor(level) {
  switch (level) {
    case 'low': return 'levelLow';
    case 'medium': return 'levelMedium';
    case 'high': return 'levelHigh';
    default: return 'levelLow';
  }
}

function DvwaLabInner({ module: moduleName, level, title }) {
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [htmlOutput, setHtmlOutput] = useState('');
  const [showSource, setShowSource] = useState(false);
  const [error, setError] = useState(null);
  const iframeRef = useRef(null);

  const config = modules[moduleName]?.[level];

  const runSimulation = useCallback((formData = {}) => {
    if (!config) return;
    try {
      const output = simulatePhp(config.php, moduleName, level, formData);
      setHtmlOutput(output);
      setError(null);
    } catch (err) {
      setError('Fout bij uitvoering: ' + err.message);
    }
  }, [config, moduleName, level]);

  const handleStart = useCallback(() => {
    setIsStarted(true);
    setIsLoading(true);
    // Small delay to show loading state
    setTimeout(() => {
      runSimulation({});
      setIsLoading(false);
    }, 300);
  }, [runSimulation]);

  useEffect(() => {
    function handleMessage(event) {
      if (event.data && event.data.type === 'dvwa-form') {
        const formData = event.data.data || {};
        // For medium brute force, add a simulated delay
        if (moduleName === 'brute_force' && level === 'medium') {
          const users = { admin: 'password', user1: '12345', student: 'welkom' };
          const isCorrect = users[formData.username] && users[formData.username] === formData.password;
          if (!isCorrect && formData.username && formData.password) {
            setIsLoading(true);
            setTimeout(() => {
              runSimulation(formData);
              setIsLoading(false);
            }, 2000);
            return;
          }
        }
        runSimulation(formData);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [runSimulation, moduleName, level]);

  if (!config) {
    return (
      <div className={styles.lab}>
        <div className={styles.header}>
          <span className={styles.title}>Module niet gevonden: {moduleName}/{level}</span>
        </div>
      </div>
    );
  }

  const displayTitle = title || config.title;

  const iframeSrcDoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 16px;
    background: #1a1a2e;
    color: #e0e0e0;
    font-size: 14px;
  }
  h3 { color: #fff; margin-top: 0; }
  h4 { color: #fff; }
  input[type="text"], input[type="password"] {
    background: #16213e;
    color: #e0e0e0;
    border: 1px solid #0f3460;
    border-radius: 4px;
    padding: 6px;
    font-size: 14px;
  }
  input[type="text"]:focus, input[type="password"]:focus {
    outline: none;
    border-color: #e94560;
  }
  button[type="submit"] {
    background: #e94560;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
  }
  button[type="submit"]:hover {
    background: #c73e54;
  }
  label { color: #b0b0b0; font-size: 0.9em; }
  code {
    background: #16213e;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.9em;
  }
  pre {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  a { color: #e94560; }
</style>
</head>
<body>
${htmlOutput}
<script>
  document.addEventListener('submit', function(e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var data = {};
    fd.forEach(function(value, key) { data[key] = value; });
    window.parent.postMessage({
      type: 'dvwa-form',
      method: (e.target.method || 'GET').toUpperCase(),
      data: data
    }, '*');
  });
</script>
</body>
</html>`;

  return (
    <div className={styles.lab}>
      <div className={styles.header}>
        <span className={styles.title}>{displayTitle}</span>
        <span className={`${styles.levelBadge} ${styles[getLevelColor(level)]}`}>
          {level.toUpperCase()}
        </span>
        {isStarted && (
          <button
            className={styles.sourceToggle}
            onClick={() => setShowSource(!showSource)}
          >
            {showSource ? 'Verberg broncode' : 'Bekijk broncode'}
          </button>
        )}
      </div>

      {!isStarted && (
        <div className={styles.startContainer}>
          <p className={styles.description}>{config.description}</p>
          <button className={styles.startButton} onClick={handleStart}>
            Start Lab
          </button>
        </div>
      )}

      {isStarted && isLoading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Lab wordt geladen...</p>
        </div>
      )}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {isStarted && !isLoading && showSource && (
        <div className={styles.sourceCode}>
          <pre><code>{config.php}</code></pre>
        </div>
      )}

      {isStarted && !isLoading && htmlOutput && (
        <iframe
          ref={iframeRef}
          className={styles.iframe}
          srcDoc={iframeSrcDoc}
          sandbox="allow-scripts allow-forms"
          title={displayTitle}
        />
      )}
    </div>
  );
}

export default function DvwaLab(props) {
  return (
    <BrowserOnly fallback={<div className={styles.loading}>Laden...</div>}>
      {() => <DvwaLabInner {...props} />}
    </BrowserOnly>
  );
}
