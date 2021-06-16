export async function getVehicle(str: string): Promise<Vehicle> {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${str}?format=json`;
    const res = await fetch(url)
    const json = await res.json();
    return json.Results[0];
}

export default {
    getVehicle
}