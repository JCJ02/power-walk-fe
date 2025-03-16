import { PDFViewer } from "@react-pdf/renderer"
import GenerateReportsPDF from "../admin/dashboard/components/GenerateReportsPDF"

const Test = () => {
    return (
        <div>
            <div className="w-full h-screen">
                <PDFViewer width="100%" height="100%">
                    <GenerateReportsPDF />
                </PDFViewer>
            </div>
        </div>
    )
}

export default Test
