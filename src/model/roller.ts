import data from "../apikey.json"

const rollerState={
    apiKey:data.api_key,
    useApi: data.api_key!==null && data.api_key.length===36
};


export default async function RealRandom(max){
    if (rollerState.useApi){
        return await RealRandomNumber(max);
    }else
        return PseudoRandomNumber(max);
}

async function RealRandomNumber(max:number){
    try {
        let response = await fetch("https://api.random.org/json-rpc/4/invoke",{
            method: "POST",
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "generateIntegers",
                params: {
                    apiKey: rollerState.apiKey,
                    n: 1,
                    min: 0,
                    max: max-1
                },
                id:1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        }).then((response) => {
            if (response.status===402 || response.status===403)
                throw new Error("Your Api key hit limit of daily request. Change to using build in random number generator.");
            if (response.status!==200)
                throw new Error("Unkown error. Change to using build in random number generator.");
            return response.json();
        });
        return response.result.random.data[0];
    } catch (error) {
        console.log(error);
        alert();
        rollerState.useApi=false;
        return PseudoRandomNumber(max);
    }
}

function PseudoRandomNumber(max:number){
    return Math.floor(Math.random() * (max));
}