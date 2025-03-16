import {
    Document,
    Font,
    Image as PdfImage,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import powerWalkLogo from "../../../../assets/images/power-walk-logo.png";

// STYLES
const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        height: "100%",
        width: "100%",
        paddingHorizontal: 48
    },
    section: {
        marginBottom: 16,
    },
    chartTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#385A65",
        marginBottom: 8,
    },
    chartImage: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    chartSpacing: {
        marginBottom: 56,
    },
    table: {
        width: "100%",
        border: "1px solid #385A65",
        marginBottom: 16,
    },
    tableRow: {
        flexDirection: "row",
        borderBottom: "1px solid #385A65",
    },
    tableHeader: {
        flex: 1,
        padding: 8,
        backgroundColor: "#385A65",
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
    tableCell: {
        flex: 1,
        padding: 8,
        fontSize: 10,
        textAlign: "center",
        color: "#385A65",
    },
    summaryTable: {
        width: "100%",
        border: "1px solid #385A65",
        marginBottom: 16,
    },
    summaryRow: {
        flexDirection: "row",
        borderBottom: "1px solid #385A65",
    },
    summaryHeader: {
        flex: 1,
        padding: 8,
        backgroundColor: "#385A65",
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
    summaryCell: {
        flex: 1,
        padding: 8,
        fontSize: 10,
        textAlign: "center",
        color: "#385A65",
    },
});

Font.register({
    family: "Poppins",
    src: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",
});

Font.register({
    family: "Inter",
    src: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
});

Font.register({
    family: "Roboto",
    src: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
});

// TAILWIND CSS
const tw = createTw({
    theme: {
        fontFamily: {
            sans: ["Comic Sans", "Poppins", "Roboto", "Inter"],
        },
    },
});

const GenerateReportsPDF = ({
    dailyUsageData,
    totalRFIDUID,
    electricityMeterData,
    totalElectricityGenerated,
    totalElectricityConsumption,
    isLoading,
    isError,
    error,
    formattedDate,
    chart1Image, // CHART 1 IMAGE URL CHART
    chart2Image, // CHART 2 IMAGE URL CHART
}: any) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={tw("flex flex-col gap-2 w-full")}>
                {/* Header */}
                <View style={tw("flex flex-row justify-between items-center w-full")}>
                    <View style={tw("flex flex-col items-start")}>
                        <Text style={tw("font-poppins text-md font-bold text-[#385A65]")}>
                            Mechanical Energy
                        </Text>
                        <Text style={tw("font-poppins text-md font-bold text-[#385A65]")}>
                            Charging Station from Footsteps
                        </Text>
                    </View>
                    <PdfImage src={powerWalkLogo} style={tw("h-44 w-44")} />
                </View>

                {/* Date and Time */}
                <View style={tw("flex flex-col items-start gap-2 w-full")}>
                    <Text style={tw("font-poppins text-[12px] text-[#385A65]")}>
                        <Text style={tw("font-bold")}>Date: </Text>
                        {formattedDate}
                    </Text>
                </View>

                {/* CHART 1: DAILY USAGE CHART*/}
                <View style={[styles.section, styles.chartSpacing]}>
                    <Text style={styles.chartTitle}>Daily Usage - Number of Students Per Day</Text>
                    {isLoading ? (
                        <Text>Loading...</Text>
                    ) : isError ? (
                        <Text style={{ color: "red" }}>Error: {error?.message || "An unknown error occurred."}</Text>
                    ) : chart1Image ? (
                        <>
                            <PdfImage src={chart1Image} style={styles.chartImage} />
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Date</Text>
                                    <Text style={styles.tableHeader}>Number of Students</Text>
                                </View>
                                {dailyUsageData.map((item: any, index: any) => (
                                    <View key={index} style={styles.tableRow}>
                                        <Text style={styles.tableCell}>
                                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </Text>
                                        <Text style={styles.tableCell}>{item.rfid_uid}</Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    ) : (
                        <Text>No Chart Available for Daily Usage.</Text>
                    )}
                </View>

                {/* CHART 2: ELECTRICITY METER */}
                <View style={styles.section}>
                    <Text style={styles.chartTitle}>Electricity Generated and Consumption Per Day</Text>
                    {isLoading ? (
                        <Text>Loading...</Text>
                    ) : isError ? (
                        <Text style={{ color: "red" }}>Error: {error?.message || "An unknown error occurred."}</Text>
                    ) : chart2Image ? (
                        <>
                            <PdfImage src={chart2Image} style={styles.chartImage} />
                            <View style={styles.table}>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableHeader}>Date</Text>
                                    <Text style={styles.tableHeader}>Electricity Generated (V)</Text>
                                    <Text style={styles.tableHeader}>Electricity Consumption (Wh)</Text>
                                </View>
                                {electricityMeterData.map((item: any, index: any) => (
                                    <View key={index} style={styles.tableRow}>
                                        <Text style={styles.tableCell}>
                                            {new Date(item.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </Text>
                                        <Text style={styles.tableCell}>{item.totalElectricityGeneratedToday}</Text>
                                        <Text style={styles.tableCell}>{item.totalElectricityConsumptionToday}</Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    ) : (
                        <Text>No Chart Available for Electricity Meter.</Text>
                    )}
                </View>

                {/* SUMMARY TABLE */}
                <View style={styles.section}>
                    <Text style={styles.chartTitle}>Summary</Text>
                    <View style={styles.summaryTable}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryHeader}>Total Students</Text>
                            <Text style={styles.summaryHeader}>Total Electricity Generated (V)</Text>
                            <Text style={styles.summaryHeader}>Total Electricity Consumed (Wh)</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryCell}>{totalRFIDUID}</Text>
                            <Text style={styles.summaryCell}>{totalElectricityGenerated.toFixed(2)}</Text>
                            <Text style={styles.summaryCell}>{totalElectricityConsumption}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default GenerateReportsPDF;