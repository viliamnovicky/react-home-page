export async function getDexcomData(key) {
  const query = new URLSearchParams({
    startDate: "2022-02-06T09:12:35",
    endDate: "2022-02-06T09:12:35",
  }).toString();

  const res = await fetch(`https://api.dexcom.com/v3/users/self/egvs?${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  const data = await res.json();

  if (data.error) throw new Error("Niečo sa nepodarilo");

  return data;
}
