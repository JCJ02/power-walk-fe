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