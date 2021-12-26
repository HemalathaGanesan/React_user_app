const FIREBASE_URL = "https://reactproject-6f524-default-rtdb.firebaseio.com";

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_URL}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok)
    throw new Error(
      data.message || "something went wrong, could not create quote"
    );

  return null;
}

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_URL}/quotes.json`);

  if (!response.ok)
    throw new Error(
      data.message || "something went wrong, could not create quote"
    );

  const data = await response.json();
  const quotesList = [];
  for (let key in data) {
    let quoteObj = {
      id: key,
      ...data[key],
    };
    quotesList.push(quoteObj);
  }
  return quotesList;
}

export async function getSingleQuotes(quoteId) {
  const response = await fetch(`${FIREBASE_URL}/quotes/${quoteId}.json`);

  if (!response.ok)
    throw new Error(
      data.message || "something went wrong, could not create quote"
    );

  const data = await response.json();
  return data;
}
