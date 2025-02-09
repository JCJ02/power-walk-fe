export type StudentType = {
    id: number;
    uid: number;
    studentId: string;
    firstname: string;
    lastname: string;
    middlename?: string;
    email: string;
    dateOfBirth: Date;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
}


export type StudentListResponse = {
    data: {
        students: StudentType[];
        totalStudents?: number;
    };
    message?: string;
    code?: number;
}