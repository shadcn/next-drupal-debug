import fetch from "node-fetch"

const NEXT_PUBLIC_DRUPAL_BASE_URL = ""
const DRUPAL_CLIENT_ID = ""
const DRUPAL_CLIENT_SECRET = ""

const basic = Buffer.from(
  `${DRUPAL_CLIENT_ID}:${DRUPAL_CLIENT_SECRET}`
).toString("base64")

fetch(`${NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/token`, {
  method: "POST",
  headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=client_credentials`,
}).then((response) => {
  if (response.status === 200) {
    return console.log("✅ Connection established.")
  }

  console.error("❌", response.statusText)
  console.error(response)
})
