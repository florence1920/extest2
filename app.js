const express = require('express');
const path = require('path');

const app = express();

// 정적 파일을 제공합니다.
app.use(express.static(path.join(__dirname, 'public')));

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages/index.html'));
});
// 기본 라우트
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages/about.html'));
});

// 서버를 시작합니다.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
