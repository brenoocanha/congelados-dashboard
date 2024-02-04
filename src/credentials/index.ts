export const googleSheetsCredentials = {
  authProvider: process.env.NEXT_PUBLIC_AUTH_PROVIDER,
  authUri: process.env.NEXT_PUBLIC_AUTH_URI,
  clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientCertUrl: process.env.NEXT_PUBLIC_CLIENT_CERT_URL,
  privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  privateKeyId: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  tokenUri: process.env.NEXT_PUBLIC_TOKEN_URI,
  type: process.env.NEXT_PUBLIC_TYPE,
  universeDomain: process.env.NEXT_PUBLIC_UNIVERSE_DOMAIN,
}

export const googleSheetID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;