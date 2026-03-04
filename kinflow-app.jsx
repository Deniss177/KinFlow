import { useState, useEffect } from "react";

// ── TRANSLATIONS ──
const T = {
  lv: {
    appTagline: "Atrodi savu dvēseles radinieku ar Maiju Tzolkin kalendāra palīdzību ✨",
    chooseLanguage: "Izvēlies valodu", or: "vai",
    continueAsGuest: "Turpināt kā viesis", signInGoogle: "Ieiet ar Google",
    myProfile: "Mans profils", yourName: "Vārds", yourAge: "Vecums", yourCity: "Pilsēta",
    birthdate: "Dzimšanas datums", aboutMe: "Par sevi",
    namePlaceholder: "Tavs vārds...", agePlaceholder: "Tavi gadi...",
    cityPlaceholder: "Kur tu dzīvo?", bioPlaceholder: "Pastāsti par sevi...",
    gender: "Dzimums", genderFemale: "Sieviete", genderMale: "Vīrietis", genderOther: "Nevēlos atklāt",
    calcSign: "Aprēķināt manu Maiju zīmi ✨", myMayanSign: "Tava Maiju zīme", element: "Elements",
    compatible: "Saderīgi", liked: "Patīk", greatMatch: "Lieliska saderība!",
    goodMatch: "Laba saderība", diffEnergy: "Dažādas enerģijas", compatibility: "saderība",
    like: "Patīk", liked2: "Patīk", write: "Rakstīt", noLiked: "Vēl nevienu neesi atzīmējis",
    online: "Online", typeMsg: "Raksti ziņu...", noDesc: "Nav pievienots apraksts",
    aboutMeLabel: "Par mani", welcomeBack: "Sveicināts atpakaļ!", loggedInAs: "Ielogojies kā",
    greeting: "Sveiki! Es esmu", compatMsg: "Jūsu Maiju saderība ir",
    reply1: "Interesanti! Pastāsti man vairāk par sevi 😊",
    reply2: "Maiju kalendārs mūs saveda kopā — tas noteikti kaut ko nozīmē! ✨",
    reply3: "Man arī patīk! Mēs esam tik saderīgi 🌟",
    reply4: "Varbūt satikties uz kafiju? ☕",
    profileSetup: "Profila izveide", editProfile: "Labot profilu", saveProfile: "Saglabāt", cancelEdit: "Atcelt", premium: "Premium",
    premiumTitle: "KIN Dziļā Analīze",
    premiumSubtitle: "Atklāj savu patieso Maiju dvēseles zīmes noslēpumu ar AI palīdzību",
    myKinReading: "Mans KIN", otherKinReading: "Cits KIN", compatibilityCheck: "Saderība",
    premiumFeature1: "Pilns tavas Maiju zīmes apraksts",
    premiumFeature2: "Tavs dzīves mērķis un misija",
    premiumFeature3: "Stiprās un vājās puses",
    premiumFeature4: "Jebkura cita KIN analīze pēc dzimšanas datuma",
    premiumFeature5: "Dziļa AI saderības analīze diviem cilvēkiem",
    getReading: "Iegūt AI analīzi", analyzeKin: "Analizēt KIN",
    enterBirthdate: "Ievadi dzimšanas datumu", person1: "1. persona", person2: "2. persona",
    checkCompatibility: "Pārbaudīt saderību", analyzing: "AI analizē...",
    unlockPremium: "Aktivizēt Premium", premiumPrice: "€4.99 / mēnesī",
    premiumFree: "7 dienas bezmaksas izmēģinājums", alreadyPremium: "✨ Premium aktīvs",
    trecena: "Trecena", navHome: "Sākums", navPremium: "AI KIN", navProfile: "Profils",
    lockedMsg: "Šī funkcija pieejama Premium lietotājiem", upgradeBtn: "Aktivizēt Premium →",
    editProfile: "Labot profilu", saveProfile: "Saglabāt", cancelEdit: "Atcelt", editBtn: "✏️ Labot",
    ageErrorMsg: "Šī aplikācija ir paredzēta tikai personām, kas vecākas par 18 gadiem.", ageErrorEdit: "Vecumam jābūt vismaz 18 gadi.",
  },
  en: {
    appTagline: "Find your soulmate using the Mayan Tzolkin calendar ✨",
    chooseLanguage: "Choose Language", or: "or",
    continueAsGuest: "Continue as Guest", signInGoogle: "Sign in with Google",
    myProfile: "My Profile", yourName: "Name", yourAge: "Age", yourCity: "City",
    birthdate: "Date of Birth", aboutMe: "About Me",
    namePlaceholder: "Your name...", agePlaceholder: "Your age...",
    cityPlaceholder: "Where do you live?", bioPlaceholder: "Tell us about yourself...",
    gender: "Gender", genderFemale: "Female", genderMale: "Male", genderOther: "Prefer not to say",
    calcSign: "Calculate my Mayan Sign ✨", myMayanSign: "Your Mayan Sign", element: "Element",
    compatible: "Compatible", liked: "Liked", greatMatch: "Great match!",
    goodMatch: "Good match", diffEnergy: "Different energies", compatibility: "compatibility",
    like: "Like", liked2: "Liked", write: "Message", noLiked: "You haven't liked anyone yet",
    online: "Online", typeMsg: "Type a message...", noDesc: "No description added",
    aboutMeLabel: "About me", welcomeBack: "Welcome back!", loggedInAs: "Signed in as",
    greeting: "Hi! I'm", compatMsg: "Our Mayan compatibility is",
    reply1: "Interesting! Tell me more about yourself 😊",
    reply2: "The Mayan calendar brought us together — that must mean something! ✨",
    reply3: "Me too! We are so compatible 🌟",
    reply4: "Maybe meet for coffee? ☕",
    profileSetup: "Profile Setup", editProfile: "Edit Profile", saveProfile: "Save", cancelEdit: "Cancel", premium: "Premium",
    premiumTitle: "KIN Deep Analysis",
    premiumSubtitle: "Unlock your true Mayan soul sign secrets with AI-powered readings",
    myKinReading: "My KIN", otherKinReading: "Other KIN", compatibilityCheck: "Compatibility",
    premiumFeature1: "Full description of your Mayan sign",
    premiumFeature2: "Your life purpose and spiritual mission",
    premiumFeature3: "Key strengths and challenges",
    premiumFeature4: "Any KIN analysis by birth date",
    premiumFeature5: "Deep AI compatibility report for two people",
    getReading: "Get AI Reading", analyzeKin: "Analyze KIN",
    enterBirthdate: "Enter birth date", person1: "Person 1", person2: "Person 2",
    checkCompatibility: "Check Compatibility", analyzing: "AI analyzing...",
    unlockPremium: "Unlock Premium", premiumPrice: "€4.99 / month",
    premiumFree: "7-day free trial", alreadyPremium: "✨ Premium Active",
    trecena: "Trecena", navHome: "Home", navPremium: "AI KIN", navProfile: "Profile",
    lockedMsg: "This feature is available to Premium users", upgradeBtn: "Unlock Premium →",
    editProfile: "Edit Profile", saveProfile: "Save Changes", cancelEdit: "Cancel", editBtn: "✏️ Edit",
    ageErrorMsg: "This app is only for users aged 18 and above.", ageErrorEdit: "Age must be at least 18.",
  }
};

// ── MAYAN DATA ──
const TZOLKIN_DAYS = [
  { name: "Imix",     glyph: "🌊", lv: "Krokodils / Radīšana",    en: "Crocodile / Creation",    element: "Water" },
  { name: "Ik",       glyph: "💨", lv: "Vējš / Komunikācija",      en: "Wind / Communication",    element: "Air"   },
  { name: "Akbal",    glyph: "🌙", lv: "Nakts / Sapņi",            en: "Night / Dreams",          element: "Fire"  },
  { name: "Kan",      glyph: "🌽", lv: "Sēkla / Izaugsme",         en: "Seed / Growth",           element: "Earth" },
  { name: "Chikchan", glyph: "🐍", lv: "Čūska / Spēks",            en: "Serpent / Power",         element: "Fire"  },
  { name: "Kimi",     glyph: "💀", lv: "Nāve / Transformācija",    en: "Death / Transformation",  element: "Earth" },
  { name: "Manik",    glyph: "🦌", lv: "Briedis / Ceļojums",       en: "Deer / Journey",          element: "Air"   },
  { name: "Lamat",    glyph: "⭐", lv: "Venera / Harmonija",        en: "Venus / Harmony",         element: "Water" },
  { name: "Muluk",    glyph: "🌧️", lv: "Lietus / Jūtas",           en: "Rain / Feelings",         element: "Water" },
  { name: "Ok",       glyph: "🐕", lv: "Suns / Uzticība",          en: "Dog / Loyalty",           element: "Earth" },
  { name: "Chuwen",   glyph: "🐒", lv: "Mērkaķis / Māksla",        en: "Monkey / Art",            element: "Air"   },
  { name: "Eb",       glyph: "🌿", lv: "Ceļš / Dziedināšana",      en: "Path / Healing",          element: "Earth" },
  { name: "Ben",      glyph: "🌾", lv: "Niedre / Vadīšana",        en: "Reed / Leadership",       element: "Fire"  },
  { name: "Ix",       glyph: "🐆", lv: "Jaguārs / Mistika",        en: "Jaguar / Mystery",        element: "Earth" },
  { name: "Men",      glyph: "🦅", lv: "Ērglis / Vīzija",          en: "Eagle / Vision",          element: "Air"   },
  { name: "Kib",      glyph: "🦉", lv: "Pūce / Gudrība",           en: "Owl / Wisdom",            element: "Fire"  },
  { name: "Kaban",    glyph: "🌍", lv: "Zeme / Evolūcija",         en: "Earth / Evolution",       element: "Earth" },
  { name: "Etznab",   glyph: "🔪", lv: "Nazis / Patiesība",        en: "Flint / Truth",           element: "Air"   },
  { name: "Kawak",    glyph: "⛈️", lv: "Vētra / Atjaunošana",      en: "Storm / Renewal",         element: "Water" },
  { name: "Ahau",     glyph: "☀️", lv: "Saule / Apgaismība",       en: "Sun / Enlightenment",     element: "Fire"  },
];

function julianDay(y, m, d) {
  const a = Math.floor((14 - m) / 12), yy = y + 4800 - a, mm = m + 12 * a - 3;
  return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
}
function getTzolkin(y, m, d) {
  const delta = julianDay(y, m, d) - julianDay(2012, 12, 21);
  const dayIndex = ((19 + delta) % 20 + 20) % 20;
  const numIndex = ((3 + delta) % 13 + 13) % 13;
  const trecenaIndex = ((dayIndex - numIndex) % 20 + 20) % 20;
  return { number: numIndex + 1, day: TZOLKIN_DAYS[dayIndex], dayIndex, trecena: TZOLKIN_DAYS[trecenaIndex] };
}
function getCompatibility(s1, s2) {
  const scores = { "Fire-Fire":95,"Fire-Air":85,"Fire-Earth":60,"Fire-Water":50,"Air-Air":90,"Air-Water":80,"Air-Earth":65,"Earth-Earth":88,"Earth-Water":78,"Water-Water":92 };
  const key = [s1.day.element, s2.day.element].sort().join("-");
  const es = scores[key] || 70;
  const dd = Math.abs(s1.dayIndex - s2.dayIndex);
  const rs = dd === 0 ? 100 : dd === 10 ? 95 : dd <= 3 ? 80 : dd <= 7 ? 70 : 60;
  const ns = (s1.number + s2.number) % 13;
  const numS = ns === 0 || ns === 7 ? 90 : ns <= 3 || ns >= 10 ? 80 : 70;
  return Math.round(es * 0.5 + rs * 0.3 + numS * 0.2);
}

const MOCK_USERS = [
  { id: 1, name: "Laila",    age: 28, city: "Rīga",      bio_lv: "Mīlu ceļojumus un meditāciju 🌿",              bio_en: "I love travel and meditation 🌿",           birthdate: "1996-03-15", photo: "L", color: "#e8a87c", gender: "female" },
  { id: 2, name: "Mārtiņš", age: 32, city: "Jūrmala",   bio_lv: "Mākslinieks, kurš meklē dvēseles radinieku ☀️", bio_en: "Artist seeking a soulmate ☀️",             birthdate: "1992-07-22", photo: "M", color: "#7ec8e3", gender: "male"   },
  { id: 3, name: "Elīna",   age: 25, city: "Liepāja",   bio_lv: "Joga un kosmiskā harmonija 🌊",                bio_en: "Yoga and cosmic harmony 🌊",               birthdate: "1999-11-08", photo: "E", color: "#b8e0a8", gender: "female" },
  { id: 4, name: "Jānis",   age: 35, city: "Ventspils", bio_lv: "Astronomijas fans, mīlu dziļas sarunas 🌙",     bio_en: "Astronomy fan, love deep conversations 🌙", birthdate: "1989-05-30", photo: "J", color: "#c3aed6", gender: "male"   },
  { id: 5, name: "Kristīne",age: 29, city: "Rīga",      bio_lv: "Dziedātāja un pasniedzēja 🎵",                 bio_en: "Singer and teacher 🎵",                    birthdate: "1995-09-12", photo: "K", color: "#f4a9c4", gender: "female" },
  { id: 6, name: "Roberts", age: 31, city: "Cēsis",     bio_lv: "Dabas cienītājs un rakstnieks 🌲",             bio_en: "Nature lover and writer 🌲",               birthdate: "1993-02-18", photo: "R", color: "#ffd580", gender: "male"   },
];

const bg = "linear-gradient(135deg, #0d0221 0%, #1a0533 50%, #0f1f40 100%)";
const glass = { background: "rgba(255,255,255,0.06)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)" };
const glassGold = { background: "rgba(255,200,50,0.07)", borderRadius: 20, border: "1px solid rgba(255,200,50,0.25)" };
const btnGrad = { background: "linear-gradient(90deg,#7c3aed,#ec4899)", color: "white", border: "none", cursor: "pointer", fontWeight: 700 };
const btnGold = { background: "linear-gradient(90deg,#f59e0b,#f97316)", color: "white", border: "none", cursor: "pointer", fontWeight: 700 };

// ── TYPEWRITER ──
function TypewriterText({ text }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed(""); let i = 0;
    const iv = setInterval(() => { if (i < text.length) { setDisplayed(text.slice(0, ++i)); } else clearInterval(iv); }, 10);
    return () => clearInterval(iv);
  }, [text]);
  return <span style={{ whiteSpace: "pre-wrap", lineHeight: 1.8 }}>{displayed}</span>;
}

// ── LOCKED OVERLAY ──
function LockedOverlay({ t, onUnlock }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(10,5,30,0.88)", borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, backdropFilter: "blur(5px)" }}>
      <div style={{ fontSize: 38, marginBottom: 10 }}>🔒</div>
      <p style={{ color: "#c4b5fd", textAlign: "center", marginBottom: 18, padding: "0 24px", fontSize: 13, lineHeight: 1.5 }}>{t.lockedMsg}</p>
      <button onClick={onUnlock} style={{ ...btnGold, padding: "11px 26px", borderRadius: 50, fontSize: 14 }}>{t.upgradeBtn}</button>
    </div>
  );
}

// ── AI FETCH ──
async function fetchKinReading(sign, lang, type, sign2 = null) {
  const langLabel = lang === "lv" ? "Latvian" : "English";
  let prompt = "";
  if (type === "my") {
    prompt = `You are a master of Mayan Tzolkin astrology. Write a deep, personal spiritual reading in ${langLabel} for someone born under Kin: ${sign.number} ${sign.day.name} (${sign.day.element} element), Trecena: ${sign.trecena.name}.

Write with mystical warmth. Include:
🌟 Core Essence — the soul personality of this Kin (3 sentences)
🎯 Life Purpose & Mission — their spiritual calling (2-3 sentences)
💪 Strengths (3 short bullet points)
🌑 Challenges (2 short bullet points)
✨ A personal message for this soul (1-2 inspiring sentences)

Be specific to THIS Kin. Avoid generic spiritual language.`;
  } else if (type === "other") {
    prompt = `You are a master of Mayan Tzolkin astrology. Write a warm, insightful reading in ${langLabel} for the Kin: ${sign.number} ${sign.day.name} (${sign.day.element} element), Trecena: ${sign.trecena.name}.

Include:
🌟 Who is this soul — core personality (2-3 sentences)
🎁 Gifts & Talents (3 bullet points)
✨ A short message for this person (1 sentence)

Be specific and warm.`;
  } else if (type === "compat" && sign2) {
    const score = getCompatibility(sign, sign2);
    prompt = `You are a master of Mayan Tzolkin astrology. Write a compatibility reading in ${langLabel} for:

Person 1: ${sign.number} ${sign.day.name} (${sign.day.element}), Trecena: ${sign.trecena.name}
Person 2: ${sign2.number} ${sign2.day.name} (${sign2.day.element}), Trecena: ${sign2.trecena.name}
Compatibility score: ${score}%

Include:
💫 The dynamic between these signs (2-3 sentences)
❤️ What they bring to each other (2 bullet points)
⚡ Key challenge to navigate (1-2 sentences)
🌟 Advice for this pairing (1-2 sentences)
📊 Final verdict: ${score}% — what this means

Be specific to THESE two signs. Write with warmth and depth.`;
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  return data.content?.map(b => b.text || "").join("") || "Neizdevās ielādēt analīzi.";
}

// ══════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════
export default function KinFlowApp() {
  const [lang, setLang] = useState(null);
  const [screen, setScreen] = useState("language");
  const [googleUser, setGoogleUser] = useState(null);
  const [myProfile, setMyProfile] = useState(null);
  const [mySign, setMySign] = useState(null);
  const [form, setForm] = useState({ name: "", age: "", city: "", bio: "", birthdate: "", gender: "" });
  const [matches, setMatches] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState("matches");
  const [likedUsers, setLikedUsers] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [ageError, setAgeError] = useState("");
  const [editForm, setEditForm] = useState({});
  const [premiumTab, setPremiumTab] = useState("my");
  const [otherBirthdate, setOtherBirthdate] = useState("");
  const [compat1, setCompat1] = useState("");
  const [compat2, setCompat2] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [navTab, setNavTab] = useState("home");

  const t = T[lang || "lv"];

  function calcAge(birthdate) {
    if (!birthdate) return "";
    const [y, m, d] = birthdate.split("-").map(Number);
    const today = new Date();
    const born = new Date(y, m - 1, d);
    return today.getFullYear() - born.getFullYear() - (today < new Date(today.getFullYear(), born.getMonth(), born.getDate()) ? 1 : 0);
  }
  const compatColor = s => s >= 85 ? "#22c55e" : s >= 70 ? "#eab308" : "#ef4444";
  const compatLabel = s => s >= 85 ? t.greatMatch : s >= 70 ? t.goodMatch : t.diffEnergy;
  const signMeaning = (day) => lang === "en" ? day.en : day.lv;

  function goTo(tab) {
    setNavTab(tab);
    setScreen(tab === "home" ? "home" : tab === "profile" ? "profile" : "premium");
    if (tab === "premium") setAiResult(null);
  }

  function handleGoogleLogin() {
    setGoogleUser({ name: "Google Lietotājs", email: "user@gmail.com" });
    setForm(f => ({ ...f, name: "Google Lietotājs" }));
    setScreen("register");
  }

  function handleRegister() {
    if (!form.name || !form.birthdate) return;
    const [y, m, d] = form.birthdate.split("-").map(Number);
    const today = new Date(); const born = new Date(y, m - 1, d);
    const age = today.getFullYear() - born.getFullYear() - (today < new Date(today.getFullYear(), born.getMonth(), born.getDate()) ? 1 : 0);
    if (age < 18) { setAgeError(T[lang || "lv"].ageErrorMsg); return; }
    setAgeError("");
    const sign = getTzolkin(y, m, d);
    setMySign(sign);
    setMyProfile({ ...form, id: 0, photo: form.name[0].toUpperCase(), color: "#a78bfa" });
    const computed = MOCK_USERS.map(u => {
      const [uy, um, ud] = u.birthdate.split("-").map(Number);
      const uSign = getTzolkin(uy, um, ud);
      return { ...u, sign: uSign, compatibility: getCompatibility(sign, uSign) };
    }).sort((a, b) => b.compatibility - a.compatibility);
    setMatches(computed);
    goTo("home");
  }

  function handleSaveEdit() {
    const [y, m, d] = editForm.birthdate.split("-").map(Number);
    const today = new Date(); const born = new Date(y, m - 1, d);
    const age = today.getFullYear() - born.getFullYear() - (today < new Date(today.getFullYear(), born.getMonth(), born.getDate()) ? 1 : 0);
    if (age < 18) { setAgeError(T[lang || "lv"].ageErrorEdit); return; }
    setAgeError("");
    const sign = getTzolkin(y, m, d);
    setMySign(sign);
    setMyProfile(p => ({ ...p, ...editForm }));
    const computed = MOCK_USERS.map(u => {
      const [uy, um, ud] = u.birthdate.split("-").map(Number);
      const uSign = getTzolkin(uy, um, ud);
      return { ...u, sign: uSign, compatibility: getCompatibility(sign, uSign) };
    }).sort((a, b) => b.compatibility - a.compatibility);
    setMatches(computed);
    setIsEditing(false);
  }


  function openChat(user) {
    setSelectedUser(user);
    setScreen("chat");
    if (!chatMessages[user.id]) {
      setChatMessages(p => ({ ...p, [user.id]: [{ from: "them", text: `${t.greeting} ${user.name} 👋 ${t.compatMsg} ${user.compatibility}%!` }] }));
    }
  }

  function sendMessage() {
    if (!newMessage.trim()) return;
    const replies = [t.reply1, t.reply2, t.reply3, t.reply4];
    const msg = newMessage;
    setChatMessages(p => ({ ...p, [selectedUser.id]: [...(p[selectedUser.id] || []), { from: "me", text: msg }] }));
    setNewMessage("");
    setTimeout(() => {
      setChatMessages(p => ({ ...p, [selectedUser.id]: [...(p[selectedUser.id] || []), { from: "them", text: replies[Math.floor(Math.random() * replies.length)] }] }));
    }, 700);
  }

  async function handleAiReading(type) {
    setAiLoading(true); setAiResult(null);
    try {
      let result;
      if (type === "my") {
        result = await fetchKinReading(mySign, lang, "my");
      } else if (type === "other" && otherBirthdate) {
        const [y, m, d] = otherBirthdate.split("-").map(Number);
        result = await fetchKinReading(getTzolkin(y, m, d), lang, "other");
      } else if (type === "compat" && compat1 && compat2) {
        const [y1,m1,d1] = compat1.split("-").map(Number);
        const [y2,m2,d2] = compat2.split("-").map(Number);
        result = await fetchKinReading(getTzolkin(y1,m1,d1), lang, "compat", getTzolkin(y2,m2,d2));
      }
      setAiResult(result);
    } catch(e) { setAiResult("Kļūda: " + e.message); }
    setAiLoading(false);
  }

  // ── BOTTOM NAV ──
  function BottomNav() {
    return (
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "rgba(8,3,20,0.97)", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", zIndex: 50, backdropFilter: "blur(12px)" }}>
        {[{ k: "home", icon: "🏠", l: t.navHome }, { k: "premium", icon: "✨", l: t.navPremium }, { k: "profile", icon: "👤", l: t.navProfile }].map(nav => (
          <button key={nav.k} onClick={() => goTo(nav.k)}
            style={{ flex: 1, background: "none", border: "none", cursor: "pointer", padding: "11px 0 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 20 }}>{nav.icon}</span>
            <span style={{ fontSize: 10, color: navTab === nav.k ? "#a78bfa" : "#4b5563", fontWeight: navTab === nav.k ? 700 : 400 }}>{nav.l}</span>
            {navTab === nav.k && <div style={{ width: 22, height: 2, background: "linear-gradient(90deg,#7c3aed,#ec4899)", borderRadius: 2, marginTop: 1 }} />}
          </button>
        ))}
      </div>
    );
  }

  // ── SIGN CARD ──
  function SignCard({ sign, compact }) {
    if (!sign) return null;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: compact ? 8 : 12, background: "rgba(255,255,255,0.05)", padding: compact ? "8px 12px" : "12px 16px", borderRadius: 12 }}>
        <span style={{ fontSize: compact ? 24 : 32 }}>{sign.day.glyph}</span>
        <div>
          <p style={{ color: "#fbbf24", margin: 0, fontWeight: 700, fontSize: compact ? 14 : 16 }}>{sign.number} {sign.day.name}</p>
          <p style={{ color: "#fde68a", margin: 0, fontSize: 11 }}>{t.trecena}: {sign.trecena.name} • {sign.day.element}</p>
        </div>
      </div>
    );
  }

  // ══════════════════════════
  // SCREENS
  // ══════════════════════════

  if (screen === "language") return (
    <div style={{ minHeight: "100vh", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ textAlign: "center", color: "white", maxWidth: 380 }}>
        <div style={{ fontSize: 78, marginBottom: 8 }}>🌞</div>
        <h1 style={{ fontSize: 44, fontWeight: 900, background: "linear-gradient(90deg,#ffd700,#ff6b6b,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 6px" }}>KinFlow</h1>
        <p style={{ color: "#6b7280", marginBottom: 50, fontSize: 13 }}>Choose your language / Izvēlies valodu</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          {[{ code: "lv", flag: "🇱🇻", label: "Latviešu" }, { code: "en", flag: "🇬🇧", label: "English" }].map(l => (
            <button key={l.code} onClick={() => { setLang(l.code); setScreen("login"); }}
              style={{ ...btnGrad, padding: "22px 34px", borderRadius: 20, fontSize: 17, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, minWidth: 138, boxShadow: "0 0 28px rgba(124,58,237,0.4)" }}>
              <span style={{ fontSize: 42 }}>{l.flag}</span>{l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (screen === "login") return (
    <div style={{ minHeight: "100vh", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ textAlign: "center", color: "white", maxWidth: 370, width: "100%" }}>
        <div style={{ fontSize: 68, marginBottom: 8 }}>🌞</div>
        <h1 style={{ fontSize: 34, fontWeight: 900, background: "linear-gradient(90deg,#ffd700,#ff6b6b,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6 }}>KinFlow</h1>
        <p style={{ color: "#c4b5fd", fontSize: 13, marginBottom: 42, lineHeight: 1.7, padding: "0 12px" }}>{t.appTagline}</p>
        <button onClick={handleGoogleLogin} style={{ width: "100%", background: "white", color: "#1f2937", border: "none", padding: "13px 22px", borderRadius: 50, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12, boxShadow: "0 4px 18px rgba(0,0,0,0.3)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          {t.signInGoogle}
        </button>
        <div style={{ color: "#374151", fontSize: 12, marginBottom: 12 }}>— {t.or} —</div>
        <button onClick={() => setScreen("register")} style={{ width: "100%", background: "rgba(255,255,255,0.07)", color: "white", border: "1px solid rgba(255,255,255,0.15)", padding: "13px", borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>👤 {t.continueAsGuest}</button>
        <button onClick={() => setScreen("language")} style={{ background: "none", border: "none", color: "#374151", fontSize: 11, cursor: "pointer", marginTop: 20 }}>← {lang === "lv" ? "Mainīt valodu" : "Change language"}</button>
      </div>
    </div>
  );

  if (screen === "register") return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Segoe UI', sans-serif", padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ ...glass, padding: 28, maxWidth: 420, width: "100%" }}>
        {googleUser && (
          <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 12, padding: "9px 14px", marginBottom: 16, display: "flex", alignItems: "center", gap: 9 }}>
            <span>✅</span><div><p style={{ color: "#22c55e", fontSize: 11, margin: 0, fontWeight: 600 }}>{t.welcomeBack}</p><p style={{ color: "#86efac", fontSize: 10, margin: 0 }}>{googleUser.email}</p></div>
          </div>
        )}
        <h2 style={{ color: "white", fontSize: 20, fontWeight: 700, marginBottom: 20, textAlign: "center" }}>📝 {t.profileSetup}</h2>
        {[{ l: t.yourName, k: "name", type: "text", ph: t.namePlaceholder }, { l: t.yourCity, k: "city", type: "text", ph: t.cityPlaceholder }, { l: t.birthdate, k: "birthdate", type: "date", ph: "" }].map(f => (
          <div key={f.k} style={{ marginBottom: 12 }}>
            <label style={{ color: "#c4b5fd", fontSize: 11, display: "block", marginBottom: 5 }}>{f.l}</label>
            <input type={f.type} placeholder={f.ph} value={f.k === "birthdate" ? form[f.k] : form[f.k]} onChange={e => { const val = e.target.value; if (f.k === "birthdate") { setForm(p => ({ ...p, birthdate: val, age: calcAge(val) || p.age })); } else { setForm(p => ({ ...p, [f.k]: val })); } }}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", color: "white", fontSize: 14, boxSizing: "border-box", outline: "none" }} />
          </div>
        ))}
        {form.birthdate && (
          <div style={{ marginBottom: 12, background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>🎂</span>
            <p style={{ color: "#c4b5fd", margin: 0, fontSize: 13 }}>{t.yourAge}: <strong style={{ color: "white" }}>{calcAge(form.birthdate)}</strong></p>
          </div>
        )}
        <div style={{ marginBottom: 12 }}>
          <label style={{ color: "#c4b5fd", fontSize: 11, display: "block", marginBottom: 7 }}>{t.gender}</label>
          <div style={{ display: "flex", gap: 6 }}>
            {[{ v: "female", l: t.genderFemale, e: "👩" }, { v: "male", l: t.genderMale, e: "👨" }, { v: "other", l: t.genderOther, e: "🌈" }].map(g => (
              <button key={g.v} onClick={() => setForm(p => ({ ...p, gender: g.v }))}
                style={{ flex: 1, padding: "9px 4px", borderRadius: 12, border: `2px solid ${form.gender === g.v ? "#a78bfa" : "rgba(255,255,255,0.1)"}`, background: form.gender === g.v ? "rgba(167,139,250,0.2)" : "rgba(255,255,255,0.04)", color: "white", cursor: "pointer", fontSize: 10, fontWeight: 600, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <span style={{ fontSize: 18 }}>{g.e}</span>{g.l}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ color: "#c4b5fd", fontSize: 11, display: "block", marginBottom: 5 }}>{t.aboutMe}</label>
          <textarea placeholder={t.bioPlaceholder} value={form.bio} onChange={e => setForm(p => ({ ...p, bio: e.target.value }))}
            style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", color: "white", fontSize: 13, boxSizing: "border-box", outline: "none", minHeight: 70, resize: "none" }} />
        </div>
        {ageError && <div style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 12, padding: "10px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 18 }}>🔞</span><p style={{ color: "#fca5a5", margin: 0, fontSize: 13 }}>{ageError}</p></div>}
        <button onClick={handleRegister} style={{ ...btnGrad, width: "100%", padding: 13, borderRadius: 50, fontSize: 15 }}>{t.calcSign}</button>
      </div>
    </div>
  );

  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Segoe UI', sans-serif", paddingBottom: 80 }}>
      <div style={{ background: "rgba(0,0,0,0.4)", padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <h1 style={{ color: "white", fontSize: 21, fontWeight: 900, margin: 0, background: "linear-gradient(90deg,#ffd700,#ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>KinFlow</h1>
        {isPremium && <span style={{ background: "linear-gradient(90deg,#f59e0b,#f97316)", color: "white", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 50 }}>✨ PREMIUM</span>}
      </div>
      <div style={{ margin: 12, background: "linear-gradient(90deg,rgba(124,58,237,0.3),rgba(236,72,153,0.3))", borderRadius: 16, padding: 15, border: "1px solid rgba(167,139,250,0.2)" }}>
        <p style={{ color: "#c4b5fd", fontSize: 10, margin: 0 }}>{t.myMayanSign}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 5 }}>
          <span style={{ fontSize: 30 }}>{mySign?.day.glyph}</span>
          <div>
            <h3 style={{ color: "white", margin: 0, fontSize: 17 }}>{mySign?.number} {mySign?.day.name}</h3>
            <p style={{ color: "#a78bfa", margin: 0, fontSize: 10 }}>{signMeaning(mySign.day)} • {t.element}: {mySign?.day.element} • {t.trecena}: {mySign?.trecena.name}</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", margin: "0 12px", gap: 7, marginBottom: 12 }}>
        {["matches", "liked"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            style={{ flex: 1, padding: 8, borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12, background: activeTab === tab ? "linear-gradient(90deg,#7c3aed,#ec4899)" : "rgba(255,255,255,0.07)", color: "white" }}>
            {tab === "matches" ? `💫 ${t.compatible} (${matches.length})` : `❤️ ${t.liked} (${likedUsers.length})`}
          </button>
        ))}
      </div>
      <div style={{ padding: "0 12px" }}>
        {(activeTab === "matches" ? matches : matches.filter(u => likedUsers.includes(u.id))).map(user => (
          <div key={user.id} style={{ ...glass, padding: 14, marginBottom: 10 }}>
            <div style={{ display: "flex", gap: 11 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: user.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, fontWeight: 700, color: "white", flexShrink: 0 }}>{user.photo}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div><h3 style={{ color: "white", margin: 0, fontSize: 15 }}>{user.name}, {user.age}</h3><p style={{ color: "#9ca3af", margin: "2px 0 0", fontSize: 10 }}>📍 {user.city}</p></div>
                  <div style={{ textAlign: "right" }}><div style={{ fontSize: 19, fontWeight: 800, color: compatColor(user.compatibility) }}>{user.compatibility}%</div><div style={{ fontSize: 9, color: compatColor(user.compatibility) }}>{compatLabel(user.compatibility)}</div></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, margin: "6px 0" }}>
                  <span style={{ fontSize: 15 }}>{user.sign.day.glyph}</span>
                  <span style={{ color: "#c4b5fd", fontSize: 10 }}>{user.sign.number} {user.sign.day.name} • {user.sign.day.element} • {t.trecena}: {user.sign.trecena.name}</span>
                </div>
                <p style={{ color: "#d1d5db", fontSize: 11, margin: 0 }}>{lang === "en" ? user.bio_en : user.bio_lv}</p>
                <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                  <button onClick={() => setLikedUsers(p => likedUsers.includes(user.id) ? p.filter(i=>i!==user.id) : [...p, user.id])}
                    style={{ flex: 1, padding: "7px", borderRadius: 50, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 11, background: likedUsers.includes(user.id) ? "rgba(236,72,153,0.3)" : "rgba(255,255,255,0.08)", color: "white" }}>
                    {likedUsers.includes(user.id) ? `❤️ ${t.liked2}` : `🤍 ${t.like}`}
                  </button>
                  <button onClick={() => openChat(user)} style={{ ...btnGrad, flex: 1, padding: "7px", borderRadius: 50, fontSize: 11 }}>💬 {t.write}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {activeTab === "liked" && likedUsers.length === 0 && (
          <div style={{ textAlign: "center", color: "#374151", marginTop: 50 }}><div style={{ fontSize: 48 }}>🌙</div><p>{t.noLiked}</p></div>
        )}
      </div>
      <BottomNav />
    </div>
  );

  // ── PREMIUM SCREEN ──
  if (screen === "premium") return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Segoe UI', sans-serif", paddingBottom: 80 }}>
      <div style={{ background: "rgba(0,0,0,0.4)", padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <h1 style={{ color: "white", fontSize: 18, fontWeight: 900, margin: 0, background: "linear-gradient(90deg,#ffd700,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>✨ {t.premiumTitle}</h1>
        {!isPremium
          ? <button onClick={() => setIsPremium(true)} style={{ ...btnGold, padding: "6px 14px", borderRadius: 50, fontSize: 11 }}>{t.unlockPremium}</button>
          : <span style={{ background: "linear-gradient(90deg,#f59e0b,#f97316)", color: "white", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 50 }}>AKTĪVS</span>
        }
      </div>

      {/* Upgrade banner */}
      {!isPremium && (
        <div style={{ margin: 12, background: "linear-gradient(135deg,rgba(245,158,11,0.12),rgba(249,115,22,0.12))", borderRadius: 20, padding: 20, border: "1px solid rgba(245,158,11,0.25)", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🌟</div>
          <h2 style={{ color: "#fbbf24", fontSize: 18, margin: "0 0 5px" }}>{t.unlockPremium}</h2>
          <p style={{ color: "#fde68a", fontSize: 12, margin: "0 0 14px", lineHeight: 1.5 }}>{t.premiumSubtitle}</p>
          <div style={{ marginBottom: 14, textAlign: "left" }}>
            {[t.premiumFeature1, t.premiumFeature2, t.premiumFeature3, t.premiumFeature4, t.premiumFeature5].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 6 }}>
                <span style={{ color: "#fbbf24", fontSize: 13, marginTop: 1 }}>⭐</span>
                <span style={{ color: "#fde68a", fontSize: 12, lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setIsPremium(true)} style={{ ...btnGold, width: "100%", padding: "13px", borderRadius: 50, fontSize: 15, boxShadow: "0 0 18px rgba(245,158,11,0.35)" }}>
            {t.unlockPremium} — {t.premiumPrice}
          </button>
          <p style={{ color: "#57534e", fontSize: 10, marginTop: 7 }}>🎁 {t.premiumFree}</p>
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: "flex", margin: "0 12px 12px", gap: 6 }}>
        {[{ k: "my", icon: "🌞", l: t.myKinReading }, { k: "other", icon: "🔍", l: t.otherKinReading }, { k: "compat", icon: "💞", l: t.compatibilityCheck }].map(tab => (
          <button key={tab.k} onClick={() => { setPremiumTab(tab.k); setAiResult(null); }}
            style={{ flex: 1, padding: "9px 4px", borderRadius: 12, border: `1px solid ${premiumTab === tab.k ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.08)"}`, background: premiumTab === tab.k ? "rgba(245,158,11,0.12)" : "rgba(255,255,255,0.03)", color: premiumTab === tab.k ? "#fbbf24" : "#6b7280", cursor: "pointer", fontWeight: 700, fontSize: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <span style={{ fontSize: 18 }}>{tab.icon}</span>{tab.l}
          </button>
        ))}
      </div>

      <div style={{ padding: "0 12px" }}>

        {/* MY KIN TAB */}
        {premiumTab === "my" && (
          <div style={{ position: "relative" }}>
            {!isPremium && <LockedOverlay t={t} onUnlock={() => setIsPremium(true)} />}
            <div style={{ ...glassGold, padding: 18, marginBottom: 12 }}>
              <p style={{ color: "#fde68a", fontSize: 11, margin: "0 0 10px" }}>{t.myMayanSign}</p>
              <SignCard sign={mySign} />
              <button onClick={() => handleAiReading("my")} disabled={aiLoading}
                style={{ ...btnGold, width: "100%", padding: "12px", borderRadius: 50, fontSize: 14, marginTop: 14, opacity: aiLoading ? 0.7 : 1 }}>
                {aiLoading ? `⏳ ${t.analyzing}` : `🤖 ${t.getReading}`}
              </button>
            </div>
            {aiLoading && premiumTab === "my" && (
              <div style={{ textAlign: "center", padding: 24 }}>
                <div style={{ fontSize: 36 }}>🌀</div>
                <p style={{ color: "#c4b5fd", marginTop: 8, fontSize: 13 }}>{t.analyzing}</p>
              </div>
            )}
            {aiResult && (
              <div style={{ ...glass, padding: 18 }}>
                <p style={{ color: "#e2e8f0", fontSize: 13, margin: 0 }}><TypewriterText text={aiResult} /></p>
              </div>
            )}
          </div>
        )}

        {/* OTHER KIN TAB */}
        {premiumTab === "other" && (
          <div style={{ position: "relative" }}>
            {!isPremium && <LockedOverlay t={t} onUnlock={() => setIsPremium(true)} />}
            <div style={{ ...glassGold, padding: 18, marginBottom: 12 }}>
              <label style={{ color: "#fde68a", fontSize: 12, display: "block", marginBottom: 7 }}>{t.enterBirthdate}</label>
              <input type="date" value={otherBirthdate} onChange={e => { setOtherBirthdate(e.target.value); setAiResult(null); }}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 12, border: "1px solid rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.08)", color: "white", fontSize: 14, boxSizing: "border-box", outline: "none", marginBottom: otherBirthdate ? 12 : 14 }} />
              {otherBirthdate && (() => { const [y,m,d] = otherBirthdate.split("-").map(Number); return <SignCard sign={getTzolkin(y,m,d)} />; })()}
              <button onClick={() => handleAiReading("other")} disabled={!otherBirthdate || aiLoading}
                style={{ ...btnGold, width: "100%", padding: "12px", borderRadius: 50, fontSize: 14, marginTop: 12, opacity: (!otherBirthdate || aiLoading) ? 0.5 : 1 }}>
                {aiLoading ? `⏳ ${t.analyzing}` : `🔍 ${t.analyzeKin}`}
              </button>
            </div>
            {aiResult && (
              <div style={{ ...glass, padding: 18 }}>
                <p style={{ color: "#e2e8f0", fontSize: 13, margin: 0 }}><TypewriterText text={aiResult} /></p>
              </div>
            )}
          </div>
        )}

        {/* COMPATIBILITY TAB */}
        {premiumTab === "compat" && (
          <div style={{ position: "relative" }}>
            {!isPremium && <LockedOverlay t={t} onUnlock={() => setIsPremium(true)} />}
            <div style={{ ...glassGold, padding: 18, marginBottom: 12 }}>
              {[{ label: t.person1, val: compat1, set: (v) => { setCompat1(v); setAiResult(null); } }, { label: t.person2, val: compat2, set: (v) => { setCompat2(v); setAiResult(null); } }].map((p, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <label style={{ color: "#fde68a", fontSize: 12, display: "block", marginBottom: 6 }}>{p.label}</label>
                  <input type="date" value={p.val} onChange={e => p.set(e.target.value)}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.07)", color: "white", fontSize: 14, boxSizing: "border-box", outline: "none" }} />
                  {p.val && (() => { const [y,m,d] = p.val.split("-").map(Number); return <div style={{ marginTop: 8 }}><SignCard sign={getTzolkin(y,m,d)} compact /></div>; })()}
                </div>
              ))}
              {compat1 && compat2 && (() => {
                const [y1,m1,d1] = compat1.split("-").map(Number);
                const [y2,m2,d2] = compat2.split("-").map(Number);
                const score = getCompatibility(getTzolkin(y1,m1,d1), getTzolkin(y2,m2,d2));
                return (
                  <div style={{ textAlign: "center", padding: "12px 0 4px" }}>
                    <div style={{ fontSize: 40, fontWeight: 900, color: compatColor(score) }}>{score}%</div>
                    <div style={{ color: compatColor(score), fontSize: 13, fontWeight: 600 }}>{compatLabel(score)}</div>
                  </div>
                );
              })()}
              <button onClick={() => handleAiReading("compat")} disabled={!compat1 || !compat2 || aiLoading}
                style={{ ...btnGold, width: "100%", padding: "12px", borderRadius: 50, fontSize: 14, marginTop: 12, opacity: (!compat1 || !compat2 || aiLoading) ? 0.5 : 1 }}>
                {aiLoading ? `⏳ ${t.analyzing}` : `💞 ${t.checkCompatibility}`}
              </button>
            </div>
            {aiResult && (
              <div style={{ ...glass, padding: 18 }}>
                <p style={{ color: "#e2e8f0", fontSize: 13, margin: 0 }}><TypewriterText text={aiResult} /></p>
              </div>
            )}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );

  if (screen === "profile" && myProfile) {
    const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", color: "white", fontSize: 14, boxSizing: "border-box", outline: "none" };
    function startEdit() {
      setEditForm({ name: myProfile.name, age: myProfile.age, city: myProfile.city, bio: myProfile.bio, birthdate: myProfile.birthdate, gender: myProfile.gender });
      setIsEditing(true);
    }
    function saveEdit() {
      if (!editForm.name || !editForm.birthdate) return;
      const [y, m, d] = editForm.birthdate.split("-").map(Number);
      const newSign = getTzolkin(y, m, d);
      setMySign(newSign);
      setMyProfile(p => ({ ...p, ...editForm, photo: editForm.name[0].toUpperCase() }));
      const computed = MOCK_USERS.map(u => {
        const [uy, um, ud] = u.birthdate.split("-").map(Number);
        const uSign = getTzolkin(uy, um, ud);
        return { ...u, sign: uSign, compatibility: getCompatibility(newSign, uSign) };
      }).sort((a, b) => b.compatibility - a.compatibility);
      setMatches(computed);
      setIsEditing(false);
    }
    return (
      <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Segoe UI', sans-serif", paddingBottom: 80 }}>
        <div style={{ background: "rgba(0,0,0,0.4)", padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 style={{ color: "white", margin: 0, fontSize: 19 }}>{isEditing ? t.editProfile : t.myProfile}</h2>
          {!isEditing
            ? <button onClick={startEdit} style={{ background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.4)", color: "#c4b5fd", padding: "7px 16px", borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>✏️ {t.editProfile}</button>
            : <div style={{ display: "flex", gap: 7 }}>
                <button onClick={() => setIsEditing(false)} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#9ca3af", padding: "7px 13px", borderRadius: 50, fontSize: 12, cursor: "pointer" }}>{t.cancelEdit}</button>
                <button onClick={saveEdit} style={{ ...btnGrad, padding: "7px 15px", borderRadius: 50, fontSize: 12 }}>💾 {t.saveProfile}</button>
              </div>
          }
        </div>

        {isEditing ? (
          <div style={{ padding: "18px 16px" }}>
            {[{ l: t.yourName, k: "name", type: "text", ph: t.namePlaceholder }, { l: t.yourCity, k: "city", type: "text", ph: t.cityPlaceholder }, { l: t.birthdate, k: "birthdate", type: "date", ph: "" }].map(f => (
              <div key={f.k} style={{ marginBottom: 13 }}>
                <label style={{ color: "#c4b5fd", fontSize: 11, display: "block", marginBottom: 5 }}>{f.l}</label>
                <input type={f.type} placeholder={f.ph} value={editForm[f.k] || ""} onChange={e => { const val = e.target.value; if (f.k === "birthdate") { setEditForm(p => ({ ...p, birthdate: val, age: calcAge(val) || p.age })); } else { setEditForm(p => ({ ...p, [f.k]: val })); } }} style={inputStyle} />
              </div>
            ))}
            {editForm.birthdate && (
              <div style={{ marginBottom: 13, background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>🎂</span>
                <p style={{ color: "#c4b5fd", margin: 0, fontSize: 13 }}>{t.yourAge}: <strong style={{ color: "white" }}>{calcAge(editForm.birthdate)}</strong></p>
              </div>
            )}
            <div style={{ marginBottom: 13 }}>
              <label style={{ color: "#c4b5fd", fontSize: 11, display: "block", marginBottom: 7 }}>{t.gender}</label>
              <div style={{ display: "flex", gap: 6 }}>
                {[{ v: "female", l: t.genderFemale, e: "👩" }, { v: "male", l: t.genderMale, e: "👨" }, { v: "other", l: t.genderOther, e: "🌈" }].map(g => (
                  <button key={g.v} onClick={() => setEditForm(p => ({ ...p, gender: g.v }))}
                    style={{ flex: 1, padding: "9px 4px", borderRadius: 12, border: `2px solid ${editForm.gender === g.v ? "#a78bfa" : "rgba(255,255,255,0.1)"}`, background: editForm.gender === g.v ? "rgba(167,139,250,0.2)" : "rgba(255,255,255,0.04)", color: "white", cursor: "pointer", fontSize: 10, fontWeight: 600, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <span style={{ fontSize: 18 }}>{g.e}</span>{g.l}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 22 }}>
              <label style={{ color: "#c4b5fd", fontSize: 11, display: "block", marginBottom: 5 }}>{t.aboutMe}</label>
              <textarea placeholder={t.bioPlaceholder} value={editForm.bio || ""} onChange={e => setEditForm(p => ({ ...p, bio: e.target.value }))}
                style={{ ...inputStyle, minHeight: 80, resize: "none" }} />
            </div>
            {ageError && <div style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 12, padding: "10px 14px", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 18 }}>🔞</span><p style={{ color: "#fca5a5", margin: 0, fontSize: 13 }}>{ageError}</p></div>}
            <button onClick={saveEdit} style={{ ...btnGrad, width: "100%", padding: "13px", borderRadius: 50, fontSize: 15 }}>💾 {t.saveProfile}</button>
          </div>
        ) : (
          <div style={{ padding: 20, textAlign: "center" }}>
            <div style={{ width: 82, height: 82, borderRadius: "50%", background: "#a78bfa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 700, color: "white", margin: "0 auto 11px" }}>
              {googleUser ? "G" : myProfile.name[0]}
            </div>
            {googleUser && <p style={{ color: "#86efac", fontSize: 11, marginBottom: 3 }}>✅ Google {lang === "en" ? "account" : "konts"}</p>}
            <h2 style={{ color: "white", fontSize: 21, marginBottom: 2 }}>{myProfile.name}{myProfile.age ? `, ${myProfile.age}` : ""}</h2>
            {myProfile.city && <p style={{ color: "#9ca3af", marginBottom: 3, fontSize: 13 }}>📍 {myProfile.city}</p>}
            {myProfile.gender && <p style={{ color: "#c4b5fd", marginBottom: 14, fontSize: 12 }}>{myProfile.gender === "female" ? `👩 ${t.genderFemale}` : myProfile.gender === "male" ? `👨 ${t.genderMale}` : `🌈 ${t.genderOther}`}</p>}
            <div style={{ ...glass, padding: 18, marginBottom: 10 }}>
              <div style={{ fontSize: 42, marginBottom: 7 }}>{mySign?.day.glyph}</div>
              <h3 style={{ color: "white", fontSize: 18, margin: "0 0 3px" }}>{mySign?.number} {mySign?.day.name}</h3>
              <p style={{ color: "#a78bfa", margin: "0 0 10px", fontSize: 12 }}>{signMeaning(mySign.day)}</p>
              <div style={{ display: "flex", gap: 7, justifyContent: "center", flexWrap: "wrap" }}>
                <span style={{ background: "rgba(124,58,237,0.3)", color: "#c4b5fd", padding: "3px 11px", borderRadius: 50, fontSize: 11 }}>{t.element}: {mySign?.day.element}</span>
                <span style={{ background: "rgba(236,72,153,0.2)", color: "#f9a8d4", padding: "3px 11px", borderRadius: 50, fontSize: 11 }}>{t.trecena}: {mySign?.trecena.name}</span>
              </div>
            </div>
            <div style={{ ...glass, padding: 14, textAlign: "left", marginBottom: 12 }}>
              <p style={{ color: "#c4b5fd", fontSize: 10, margin: "0 0 5px" }}>{t.aboutMeLabel}</p>
              <p style={{ color: "white", margin: 0, fontSize: 12 }}>{myProfile.bio || t.noDesc}</p>
            </div>
            {isPremium
              ? <div style={{ ...glassGold, padding: 12, textAlign: "center" }}><p style={{ color: "#fbbf24", margin: 0, fontWeight: 700, fontSize: 14 }}>{t.alreadyPremium}</p></div>
              : <button onClick={() => goTo("premium")} style={{ ...btnGold, width: "100%", padding: "12px", borderRadius: 50, fontSize: 14 }}>{t.unlockPremium} — {t.premiumPrice}</button>
            }
          </div>
        )}
        <BottomNav />
      </div>
    );
  }

  if (screen === "chat" && selectedUser) {
    const msgs = chatMessages[selectedUser.id] || [];
    return (
      <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Segoe UI', sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ background: "rgba(0,0,0,0.4)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 11, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "white", fontSize: 20, cursor: "pointer" }}>←</button>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: selectedUser.color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "white", fontSize: 13 }}>{selectedUser.photo}</div>
          <div>
            <h3 style={{ color: "white", margin: 0, fontSize: 14 }}>{selectedUser.name}</h3>
            <p style={{ color: "#22c55e", margin: 0, fontSize: 10 }}>● {t.online} • {selectedUser.compatibility}% {t.compatibility}</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: 12, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {msgs.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.from === "me" ? "flex-end" : "flex-start" }}>
              <div style={{ maxWidth: "76%", padding: "9px 14px", borderRadius: msg.from === "me" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", background: msg.from === "me" ? "linear-gradient(90deg,#7c3aed,#ec4899)" : "rgba(255,255,255,0.1)", color: "white", fontSize: 13 }}>{msg.text}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: 12, background: "rgba(0,0,0,0.4)", display: "flex", gap: 7 }}>
          <input value={newMessage} onChange={e => setNewMessage(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder={t.typeMsg}
            style={{ flex: 1, padding: "10px 15px", borderRadius: 50, border: "1px solid rgba(255,255,255,0.13)", background: "rgba(255,255,255,0.07)", color: "white", fontSize: 14, outline: "none" }} />
          <button onClick={sendMessage} style={{ ...btnGrad, width: 44, height: 44, borderRadius: "50%", fontSize: 17 }}>→</button>
        </div>
      </div>
    );
  }

  return null;
}
