const express = require("express");
const { logger } = require("./middlewares/logger");
const app = express();

app.use(express.json());
app.use(logger);

const eventsRouter = require("./routes/events");

app.use("/api/events", eventsRouter);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`API доступно по адресу: http://localhost:${PORT}`);
});
