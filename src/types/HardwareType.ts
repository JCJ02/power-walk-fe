export type Battery = {
    id: number;
    batteryPercentage?: string,
    batteryVoltage?: string,
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
}

export type BatteryResponse = {
    data: {
        batteryPercentage: string,
        batteryVoltage: string
    };
    message?: string;
    code?: number;
}

export type Electricity = {
    id: number;
    electricityConsumption: string,
    electricityGenerated: string,
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
}

export type ElectricityGeneratedResponse = {
    data: {
        electricityGenerated: string;
    };
    message?: string;
    code?: number;
}

export type ElectricityConsumptionResponse = {
    data: {
        electricityConsumption: string;
    };
    message?: string;
    code?: number;
}

export type ElectricityMeter = {
    id: number,
    totalElectricityGeneratedToday: number | null,
    totalElectricityConsumptionToday: number | null,
    date: Date,
}

export type ElectricityMeterResponse = {
    data: ElectricityMeter[];
    message?: string;
    code?: number;
}