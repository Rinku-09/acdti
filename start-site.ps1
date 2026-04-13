$port = 4173
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Starting ACDTI site at http://127.0.0.1:$port" -ForegroundColor Cyan
Write-Host "Press Ctrl+C in this window to stop the server." -ForegroundColor DarkGray

Set-Location $root
python -m http.server $port
