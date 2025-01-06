import data from "../apikey.json"

const rollerState={
    apiKey:data.api_key,
    requestUsed: data.api_key!==null && data.api_key.length===36
};


export default function RealRandom(max){
    if (rollerState.requestUsed){
        return RealRandomNumber(max);
    }else
        return PseudoRandomNumber(max);
}

function RealRandomNumber(max:number){

}

function PseudoRandomNumber(max:number){
    return Math.floor(Math.random() * (max));
}