export const products = (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
                subject: "programacion v",
                semester: "7",
                date: new Date().toDateString(),
            },
        ],
    });
};