// =========================
// #region ICONS
// =========================
const twitchIcon = `
<svg class="twitch" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2400 2800" style="enable-background:new 0 0 2400 2800;" xml:space="preserve">
 <style type="text/css">
  .st0{fill:#FFFFFF;}
	.st1{fill:#9146FF;}
 </style>
 <title>
  Asset 2
 </title>
 <g>
  <polygon class="st0" points="2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200  ">
  </polygon>
  <g>
   <g id="Layer_1-2">
    <path class="st1" d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600     V1300z">
    </path>
    <rect x="1700" y="550" class="st1" width="200" height="600">
    </rect>
    <rect x="1150" y="550" class="st1" width="200" height="600">
    </rect>
   </g>
  </g>
 </g>
</svg>
`;

const kickIcon = `
<svg class="kick" role="img" viewBox="0 0 24 24" fill="#53fc19" xmlns="http://www.w3.org/2000/svg">
  <title>Kick</title>
  <path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z"/>
</svg>
`;

const raidIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>`;

const donateIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
</svg>`;

const subIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

const followIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
</svg>`;

const bitIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hexagon-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/>
</svg>`;

const giftIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift-fill" viewBox="0 0 16 16">
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"/>
</svg>`;

// =========================
// #region SETTINGS
// =========================
const params = new URLSearchParams(document.location.search);

const CONFIG = {
  HOST: params.get("host") || "127.0.0.1",
  PORT: Number(params.get("port")) || 8080,
  ORIENTATION:
    params.get("orientation") == "horizontal" ? "horizontal" : "vertical",
  MAX_VISIBLE: Number(params.get("max")) || 20,
  BATCH_SIZE: Number(params.get("batch")) || 10,
  THEME: params.get("theme") || "minimal",
  PLATFORMS: separateParams(params, ["platforms"]) || [],
  EXCLUDEDACCOUNTS: separateParams(params, ["exclude", "bots"]) || [],
  COLORED: params.has("colored"),
  HIDEALERTS: params.has("hidealerts"),
  HIDECHAT: params.has("hidechat"),
  HIDEPLATFORM: params.has("hideplatform"),
  HIDEBADGES: params.has("hidebadges"),
  HIDEALERTTYPE: params.has("hidetype"),
};

const HOST = CONFIG.HOST;
const PORT = CONFIG.PORT;
// =========================
// #region INIT
// =========================
const messagesContainer = document.getElementById("messages");
messagesContainer.classList.add(CONFIG.ORIENTATION, CONFIG.THEME);
if (CONFIG.COLORED) messagesContainer.classList.add("colored");
// =========================
// #region STREAMER BOT CLIENT
// =========================
const client = new StreamerbotClient({
  host: HOST,
  port: PORT,
  endpoint: "/",
});
// =========================
// #region QUEUE SYSTEM
// =========================
const messageQueue = [];
let queueProcess = false;

function addQueueItem(type, data, user, platform) {
  if (messageQueue.length > CONFIG.MAX_VISIBLE) {
    messageQueue.shift();
  }

  messageQueue.push({ data, user, platform, type });

  if (!queueProcess) processQueue();
}

function processQueue() {
  if (messageQueue.length === 0) {
    queueProcess = false;
    return;
  }

  queueProcess = true;
  requestAnimationFrame(() => {
    for (
      let index = 0;
      index < CONFIG.BATCH_SIZE && messageQueue.length > 0;
      index++
    ) {
      const item = messageQueue.shift();

      setTimeout(() => {
        clearMessages();
        appendChat(item.data, item.user, item.platform, item.type);
      }, 400);
    }

    processQueue();
  });
}
// =========================
// #region MAPS
// =========================
const cache = {
  messages: new Map(),
  badges: new Map(),
  emotes: new Map(),
};
// =========================
// #region CLIENT HANDLERS
// =========================
client.on("Disconnected", () => console.log("Disconnected"));
client.on("Connected", () => console.log("Connected"));
// =========================
// TWITCH CHAT MESSAAGE HANDLER
// =========================
if (CONFIG.HIDECHAT !== true) {
  if (CONFIG.PLATFORMS.includes("twitch") && CONFIG.PLATFORMS.length > 0) {
    client.on("Twitch.ChatMessage", (event) => {
      const data = event.data || event;
      const structuredData = {
        msgId: data.message.msgId,
        displayName: data.message.displayName,
        color: data.message.color,
        badges: data.message.badges,
        parts: data.parts,
      };
      addQueueItem(
        "message",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
  }
  // =========================
  // KICK CHAT MESSAAGE HANDLER
  // =========================
  if (CONFIG.PLATFORMS.includes("kick") && CONFIG.PLATFORMS.length > 0) {
    client.on("Kick.ChatMessage", (event) => {
      const data = event.data || event;
      const structuredData = {
        msgId: data.messageId,
        displayName: data.user.name,
        color: data.user.color,
        badges: data.user.badges,
        parts: data.parts,
      };
      addQueueItem(
        "message",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
    client.on("Twitch.ChatMessageDeleted", ({ event, data }) => {
      deleteMessage(data.messageId);
    });
  }
}
// =========================
// ALERTS  HANDLER
// =========================
if (CONFIG.HIDEALERTS !== true) {
  // TWITCH ALERTS
  if (CONFIG.PLATFORMS.includes("twitch") && CONFIG.PLATFORMS.length > 0) {
    client.on("Twitch.Follow", (event) => {
      console.log(event);
    });
    client.on("Twitch.Sub", (event) => {
      const data = event.data || event;
      const structuredData = {
        type: event.event.type,
        userId: data.user.id,
        displayName: data.user.name,
        tier: data.sub_tier,
        duration: data.duration_months,
      };
      addQueueItem(
        "alert",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
    client.on("Twitch.ReSub", (event) => {
      const data = event.data || event;
      const structuredData = {
        type: event.event.type,
        userId: data.user.id,
        displayName: data.user.name,
        tier: data.subTier,
        duration: data.durationMonths,
      };
      addQueueItem(
        "alert",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
    client.on("Twitch.Raid", (event) => {
      const data = event.data || event;
      const structuredData = {
        type: event.event.type,
        toUserId: data.to_broadcaster_user_id,
        toDisplayName: data.to_broadcaster_user_name,
        fromUserId: data.to_broadcaster_user_id,
        fromDisplayName: data.from_broadcaster_user_name,
        viewers: data.viewers,
      };
      addQueueItem(
        "alert",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
  }
  if (CONFIG.PLATFORMS.includes("kick") && CONFIG.PLATFORMS.length > 0) {
    // KICK ALERTS
    client.on("Kick.Follow", (event) => {
      const data = event.data || event;
      const structuredData = {
        type: event.event.type,
        userId: data.user.id,
        displayName: data.user.name,
      };
      addQueueItem(
        "alert",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
    client.on("Kick.Sub", (event) => {
      const data = event.data || event;
      const structuredData = {
        type: event.event.type,
        userId: data.user.id,
        displayName: data.user.name,
        duration: data.duration,
      };
      addQueueItem(
        "alert",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
    client.on("Kick.GiftSubscription", (event) => {
      const data = event.data || event;
      const structuredData = {
        type: event.event.type,
        userId: data.user.id,
        displayName: data.user.name,
        recipientsLength: data.recipients.length,
      };
      addQueueItem(
        "alert",
        structuredData,
        data.user,
        event.source.toLowerCase(),
      );
    });
  }
}
//#endregion

// =========================
// APPEND CHAT
// =========================
function appendChat(data, user, platform, type) {
  if (!messagesContainer) return;

  // =========================
  // ALERT
  // =========================
  if (type === "alert") {
    const { type, displayName } = data;
    const alertBox = document.createElement("div");
    const alertTitleContainer = document.createElement("div");
    const alertTextContainer = document.createElement("div");
    const alertTitle = document.createElement("p");
    const alertUser = document.createElement("p");
    const alertText = document.createElement("p");

    const username = (displayName || "Ismeretlen").toLowerCase();

    if (CONFIG.EXCLUDEDACCOUNTS.includes(username)) return;

    let title;
    let message;

    alertBox.classList.add("alert_event");
    alertTitle.classList.add("alert_title");
    alertUser.classList.add("alert_user");
    alertText.classList.add("alert_text");
    alertTitleContainer.classList.add("alert_titleContainer");
    alertTextContainer.classList.add("alert_textContainer");

    const alertType = type.toLowerCase();

    if (
      alertType === "sub" ||
      alertType === "resub" ||
      alertType === "subscription"
    ) {
      title = "Sub";
      message = `${data.duration} Months`;
      if (CONFIG.COLORED) alertBox.classList.add("sub");
    }
    if (alertType === "raid") {
      title = "Raid";
      message = `${data.viewers} Raiders`;
      if (CONFIG.COLORED) alertBox.classList.add("raid");
    }
    if (alertType === "follow") {
      title = "Follow";
      if (CONFIG.COLORED) alertBox.classList.add("follow");
    }
    if (alertType === "giftsubscription") {
      title = "Gift";
      message = `${data.recipientsLength} Gifts`;
      if (CONFIG.COLORED) alertBox.classList.add("sub");
    }

    if (
      CONFIG.THEME === "boxedminimal" ||
      (CONFIG.THEME === "clean" && CONFIG.ORIENTATION === "horizontal") ||
      CONFIG.ORIENTATION === "horizontal"
    ) {
      if (alertType === "raid")
        alertTitle.insertAdjacentHTML("afterbegin", raidIcon);
      if (
        alertType === "sub" ||
        alertType === "resub" ||
        alertType === "subscription"
      )
        alertTitle.insertAdjacentHTML("afterbegin", subIcon);

      if (alertType === "follow")
        alertTitle.insertAdjacentHTML("afterbegin", followIcon);

      if (alertType === "giftsubscription")
        alertTitle.insertAdjacentHTML("afterbegin", giftIcon);
    } else {
      alertTitle.textContent = title || "Alert";
    }

    alertUser.textContent = displayName || "";
    alertText.textContent = message || "";

    if (
      platform === "twitch" &&
      CONFIG.THEME !== "boxedminimal" &&
      CONFIG.HIDEPLATFORM !== true
    ) {
      alertBox.insertAdjacentHTML("afterbegin", twitchIcon);
    }

    if (
      platform === "kick" &&
      CONFIG.THEME !== "boxedminimal" &&
      CONFIG.HIDEPLATFORM !== true
    ) {
      alertBox.insertAdjacentHTML("afterbegin", kickIcon);
    }

    if (CONFIG.HIDEALERTTYPE !== true)
      alertTitleContainer.appendChild(alertTitle);
    if (displayName) alertTextContainer.appendChild(alertUser);
    if (message) alertTextContainer.appendChild(alertText);
    alertBox.appendChild(alertTitleContainer);
    alertBox.appendChild(alertTextContainer);

    messagesContainer.appendChild(alertBox);
    scrollToEnd();

    return;
  }

  // =========================
  // MESSAGE
  // =========================
  const { msgId, displayName, color, badges, parts } = data;

  const container = document.createElement("div");
  const header = document.createElement("div");
  const textContainer = document.createElement("div");
  const usernameContainer = document.createElement("span");
  const badgesContainer = document.createElement("div");

  container.classList.add("message");
  header.classList.add("message_header");
  textContainer.classList.add("message_text");
  usernameContainer.classList.add("username");
  badgesContainer.classList.add("badges");

  if (!user) return;

  const username = (
    user.username ||
    user.login ||
    user.name ||
    "Ismeretlen"
  ).toLowerCase();

  if (CONFIG.EXCLUDEDACCOUNTS.includes(username)) return;

  container.dataset.user = JSON.stringify({
    userId: user.userId,
    user,
  });

  container.dataset.message = JSON.stringify({
    messageId: msgId,
    parts,
  });

  if (platform === "kick" && CONFIG.HIDEPLATFORM === false)
    badgesContainer.insertAdjacentHTML("beforeend", kickIcon);

  if (platform === "twitch" && CONFIG.HIDEPLATFORM === false)
    badgesContainer.insertAdjacentHTML("beforeend", twitchIcon);

  if (Array.isArray(badges) && CONFIG.HIDEBADGES === false) {
    badges.forEach((badge) => {
      const img = new Image();
      img.src = badge.imageUrl;
      badgesContainer.appendChild(img);
    });
  }
  if (
    CONFIG.HIDEBADGES === false &&
    CONFIG.HIDEPLATFORM === false &&
    (badges.length > 0 || platform.length > 0)
  )
    header.appendChild(badgesContainer);

  usernameContainer.textContent = displayName;
  usernameContainer.style.color = color || "#fff";

  header.appendChild(usernameContainer);
  container.appendChild(header);

  if (Array.isArray(parts)) {
    parts.forEach((part) => {
      let messagePart;

      if (part.type === "text") {
        messagePart = document.createElement("p");
        messagePart.textContent = part.text;
      } else if (part.type === "emote") {
        messagePart = new Image();
        messagePart.src = part.imageUrl;
      }

      if (messagePart) textContainer.appendChild(messagePart);
    });
  }

  container.appendChild(textContainer);
  messagesContainer.appendChild(container);

  if (msgId) cache.messages.set(msgId, container);

  scrollToEnd();
}

function scrollToEnd() {
  const el = document.getElementById("messages");
  if (!el) return;

  if (CONFIG.ORIENTATION === "horizontal") {
    el.scrollLeft = el.scrollWidth;
  } else {
    el.scrollTop = el.scrollHeight;
  }
}

//#region DELETE MESSAGE
function deleteMessage(messageId) {
  const message = cache.messages.get(messageId);

  if (message) {
    message.classList.add("fade-out");

    setTimeout(() => {
      message.remove();
      cache.messages.delete(messageId);
    }, 350);
  }
}

function clearMessages() {
  const messages = document.querySelectorAll(".message, .alert_event");
  const overflow = messages.length - CONFIG.MAX_VISIBLE + 1;

  if (overflow > 0)
    for (let i = 0; i < overflow; i++) {
      const oldMessage = messages[i];
      oldMessage.classList.add("fade-out");
      oldMessage.remove();
    }
}
//#endregion

function separateParams(param, paramTypes) {
  const regex = /[,\-|/]/;

  if (!Array.isArray(paramTypes)) {
    paramTypes = [paramTypes];
  }

  return paramTypes
    .map((type) => param.get(type))
    .filter(Boolean)
    .flatMap((value) => value.split(regex))
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}
