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
    uid2: string,
    date_added: string
    // rfid_uid: string,
    // createdAt: string
    // updatedAt: Date,
    // deletedAt: Date
}

export type HistoryResponse = {
    data: HistoryType[];
    message?: string;
    code?: number;
}