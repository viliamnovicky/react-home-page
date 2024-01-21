export async function getCryptoData() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`
  );
  const data = await res.json();

  if (data.error) throw new Error("Niečo sa nepodarilo");

  return data;
}

export async function getCoinData(id) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  if (!res.ok) throw new Error("Something went wrong with fetching crypto data 😥");
  const data = await res.json();
  if (data.error) throw new Error("Something went wrong with fetching crypto data 😥");
  return data;
}
