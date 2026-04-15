<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
if ($raw === false || $raw === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid payload']);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$surname = trim((string) ($data['surname'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$comment = trim((string) ($data['comment'] ?? ''));

if (mb_strlen($name) < 2 || mb_strlen($surname) < 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and surname must be at least 2 characters']);
    exit;
}

if (!preg_match('/^(?:\+7|8)\d{10}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Phone format is invalid']);
    exit;
}

if (mb_strlen($comment) > 1000) {
    http_response_code(400);
    echo json_encode(['error' => 'Comment is too long']);
    exit;
}

$botConnection = '__TELEGRAM_BOT_CONNECTION_STRING__';
$chatId = '__TELEGRAM_CHAT_ID__';

if (
    $botConnection === '__TELEGRAM_BOT_CONNECTION_STRING__' ||
    $chatId === '__TELEGRAM_CHAT_ID__' ||
    $botConnection === '' ||
    $chatId === ''
) {
    http_response_code(500);
    echo json_encode(['error' => 'Server configuration error']);
    exit;
}

$textLines = [
    'New lead from website',
    '',
    'Name: ' . $name . ' ' . $surname,
    'Phone: ' . $phone,
];

if ($comment !== '') {
    $textLines[] = 'Comment: ' . $comment;
}

$payload = json_encode([
    'chat_id' => $chatId,
    'text' => implode("\n", $textLines),
], JSON_UNESCAPED_UNICODE);

if ($payload === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to prepare message']);
    exit;
}

$ch = curl_init($botConnection);
if ($ch === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to initialize request']);
    exit;
}

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send message', 'details' => $error]);
    exit;
}

http_response_code(200);
echo json_encode(['ok' => true]);
