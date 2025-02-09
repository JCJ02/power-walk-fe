export type Battery = {
    id: number;
    batteryPercentage: string,
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
}

export type BatteryPercentageResponse = {
    data: {
        batteryPercentage: Battery;
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