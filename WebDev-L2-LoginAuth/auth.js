
const USERS_KEY = 'oibsip_users';
const SESSION_KEY = 'oibsip_session';

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}


function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Could not read users from storage:', err);
    return [];
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  } catch (err) {
    console.error('Could not save users to storage:', err);
    return false;
  }
}

function findUser(username) {
  const normalized = username.trim().toLowerCase();
  return getUsers().find(u => u.username.toLowerCase() === normalized) || null;
}


function setSession(username) {
  localStorage.setItem(SESSION_KEY, username);
}

function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}


function redirectIfLoggedIn() {
  if (getSession()) {
    window.location.href = 'dashboard.html';
  }
}

function requireAuth() {
  if (!getSession()) {
    window.location.href = 'login.html';
  }
}


function validateUsername(username) {
  if (!username || !username.trim()) {
    return { valid: false, message: 'Username or email is required.' };
  }
  return { valid: true, message: '' };
}

function validatePassword(password) {
  if (!password) {
    return { valid: false, message: 'Password is required.' };
  }
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters long.' };
  }
  if (!/\d/.test(password)) {
    return { valid: false, message: 'Password must contain at least one number.' };
  }
  return { valid: true, message: '' };
}


function showFieldError(fieldEl, message) {
  fieldEl.classList.add('has-error');
  const errorEl = fieldEl.querySelector('.field-error');
  if (errorEl) errorEl.textContent = message;
}

function clearFieldError(fieldEl) {
  fieldEl.classList.remove('has-error');
}

function showAlert(alertEl, message, type) {
  alertEl.textContent = message;
  alertEl.className = 'alert show ' + type;
}

function hideAlert(alertEl) {
  alertEl.className = 'alert';
}
