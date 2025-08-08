import { LB, KG } from "../index.ts";

export interface PatientFormState {
    name: string;
    weight: {
        value: number;  
        units: typeof LB | typeof KG
    }
}