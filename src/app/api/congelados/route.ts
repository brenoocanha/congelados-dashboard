import { NextRequest, NextResponse } from "next/server";
import { googleSheetsCredentials as credentials } from "@/credentials";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const serviceAccountAuth = new JWT({
  email: credentials.clientEmail,
  key: credentials.privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function GET(request: NextRequest) {
  const doc = new GoogleSpreadsheet(
    "1W8rd1OPPBko6I7toNMrGzQ86QTDCZqOrKre16gRfWEY",
    serviceAccountAuth
  );
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const items = await sheet.getRows();
  console.log(items);

  const res = items.map(({ _rawData }: any) => {
    return {
      produto: _rawData[0],
      valor: _rawData[1],
    }
  })

  return new NextResponse(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json", // Adicione o cabeçalho Content-Type
    },
  });
}
