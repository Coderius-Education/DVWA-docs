export const bruteForce = {
  low: {
    title: 'Brute Force — Low',
    description: 'Geen bescherming: wachtwoord check via GET-parameters',
    method: 'GET',
    php: `<?php
$users = array('admin' => 'password', 'user1' => '12345', 'student' => 'welkom');
$message = '';
if (isset($_GET['username']) && isset($_GET['password'])) {
    $user = $_GET['username'];
    $pass = $_GET['password'];
    if (isset($users[$user]) && $users[$user] === $pass) {
        $message = '<div style="color:#27c93f;padding:10px;border:1px solid #27c93f;border-radius:4px;margin:10px 0">Welkom, ' . htmlspecialchars($user) . '! Je hebt toegang.</div>';
    } else {
        $message = '<div style="color:#ff5f56;padding:10px;border:1px solid #ff5f56;border-radius:4px;margin:10px 0">Gebruikersnaam of wachtwoord onjuist.</div>';
    }
}
echo $message;
?>
<h3>Login</h3>
<form method="GET">
  <div style="margin:8px 0"><label>Username:</label><br><input type="text" name="username" style="padding:6px;width:200px" /></div>
  <div style="margin:8px 0"><label>Password:</label><br><input type="password" name="password" style="padding:6px;width:200px" /></div>
  <button type="submit" style="padding:8px 20px;cursor:pointer;margin-top:8px">Login</button>
</form>`,
  },
  medium: {
    title: 'Brute Force — Medium',
    description: 'Vertraging na foute poging (2 sec sleep)',
    method: 'GET',
    php: `<?php
$users = array('admin' => 'password', 'user1' => '12345', 'student' => 'welkom');
$message = '';
if (isset($_GET['username']) && isset($_GET['password'])) {
    $user = $_GET['username'];
    $pass = $_GET['password'];
    if (isset($users[$user]) && $users[$user] === $pass) {
        $message = '<div style="color:#27c93f;padding:10px;border:1px solid #27c93f;border-radius:4px;margin:10px 0">Welkom, ' . htmlspecialchars($user) . '!</div>';
    } else {
        // Medium: 2 second delay on failure (simulated)
        $message = '<div style="color:#ff5f56;padding:10px;border:1px solid #ff5f56;border-radius:4px;margin:10px 0">Gebruikersnaam of wachtwoord onjuist.<br><small>⏱ Bij een fout antwoord wordt het systeem 2 seconden geblokkeerd.</small></div>';
    }
}
echo $message;
?>
<h3>Login</h3>
<form method="GET">
  <div style="margin:8px 0"><label>Username:</label><br><input type="text" name="username" style="padding:6px;width:200px" /></div>
  <div style="margin:8px 0"><label>Password:</label><br><input type="password" name="password" style="padding:6px;width:200px" /></div>
  <button type="submit" style="padding:8px 20px;cursor:pointer;margin-top:8px">Login</button>
</form>`,
  },
  high: {
    title: 'Brute Force — High',
    description: 'Anti-CSRF token vereist bij elke poging',
    method: 'GET',
    php: `<?php
$users = array('admin' => 'password', 'user1' => '12345', 'student' => 'welkom');
$message = '';
$token = substr(md5(rand()), 0, 16);

if (isset($_GET['username']) && isset($_GET['password'])) {
    $user = $_GET['username'];
    $pass = $_GET['password'];
    $submitted_token = isset($_GET['user_token']) ? $_GET['user_token'] : '';

    if (isset($users[$user]) && $users[$user] === $pass) {
        $message = '<div style="color:#27c93f;padding:10px;border:1px solid #27c93f;border-radius:4px;margin:10px 0">Welkom, ' . htmlspecialchars($user) . '!</div>';
    } else {
        $message = '<div style="color:#ff5f56;padding:10px;border:1px solid #ff5f56;border-radius:4px;margin:10px 0">Gebruikersnaam of wachtwoord onjuist.<br><small>🔒 Anti-CSRF token: elke poging vereist een nieuw token.</small></div>';
    }
}
echo $message;
?>
<h3>Login</h3>
<form method="GET">
  <div style="margin:8px 0"><label>Username:</label><br><input type="text" name="username" style="padding:6px;width:200px" /></div>
  <div style="margin:8px 0"><label>Password:</label><br><input type="password" name="password" style="padding:6px;width:200px" /></div>
  <input type="hidden" name="user_token" value="<?php echo $token; ?>" />
  <button type="submit" style="padding:8px 20px;cursor:pointer;margin-top:8px">Login</button>
</form>
<p style="font-size:0.8em;color:#888">Token: <?php echo $token; ?></p>`,
  },
};
