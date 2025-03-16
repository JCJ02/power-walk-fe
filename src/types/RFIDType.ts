export type RFIDType = {
    id: number;
    uid: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
}

export type RFIDListResponse = {
    data: {
        rfids: RFIDType[];
        totalStudents?: number;
    };
    message?: string;
    code?: number;
}

export type HistoryType = {
    id: number,
    rfid_uid: string,
    createdAt: string,
    updatedAt: Date,
    deletedAt: Date
}

export type HistoryResponse = {
    data: {
        rfids: HistoryType[]
        totalRFIDUID: number;
    };
    message?: string;
    code?: number;
}