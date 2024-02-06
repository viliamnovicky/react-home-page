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

export async function getDexcomToken(code) {
  const formData = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:3000/",
    client_id: "wCuk8ezQEZi19HNTYw9RlplEHWr35GBR",
    client_secret: "yNYuhG4Zq8d89p7v",
  };

  const res = await fetch(`https://api.dexcom.com/v2/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(formData).toString(),
  });

  const data = await res.json()
  return data
}
