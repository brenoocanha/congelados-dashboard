export const googleSheetsCredentials = {
  authProvider: process.env.AUTH_PROVIDER,
  authUri: process.env.AUTH_URI,
  clientEmail: process.env.CLIENT_EMAIL,
  clientId: process.env.CLIENT_ID,
  clientCertUrl: process.env.CLIENT_CERT_URL,
  privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
  privateKeyId: process.env.PRIVATE_KEY_ID,
  projectId: process.env.PROJECT_ID,
  tokenUri: process.env.TOKEN_URI,
  type: process.env.TYPE,
  universeDomain: process.env.UNIVERSE_DOMAIN,
}