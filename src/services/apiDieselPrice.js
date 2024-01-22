export async function getDieselPriceGermany() {
  const res = await fetch(
    `https://creativecommons.tankerkoenig.de/json/list.php?lat=47.390&lng=11.255&rad=50&sort=dist&type=all&apikey=b2f21a59-fb34-c7ca-47ea-68587c82cc20`
  );

  if (!res.ok) throw new Error("Something went wrong with fetching diesel data 😥");
  const data = await res.json();

  console.log(data)
  if (data.error) throw new Error("Niečo sa nepodarilo");
  
  return data;
}

export async function getDieselPriceAustria() {
  const res = await fetch(
    `https://api.e-control.at/sprit/1.0/search/gas-stations/by-address?latitude=47.390&longitude=11.255&fuelType=DIE&includeClosed=true`
  );
  if (!res.ok) throw new Error("Something went wrong with fetching diesel data 😥")
  const data = await res.json();

  if (data.error) throw new Error("Niečo sa nepodarilo");

  return data;
}
