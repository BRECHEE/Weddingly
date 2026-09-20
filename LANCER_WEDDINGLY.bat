@echo off
REM Script pour ouvrir WEDDINGLY V1 dans le navigateur par défaut

cd /d "%~dp0"

REM Chercher le fichier index.html
if exist index.html (
    echo Lancement de WEDDINGLY V1...
    start "" index.html
    echo.
    echo Application ouverte dans votre navigateur !
    echo.
    echo Votre application est prete a l'emploi. Inscrivez-vous pour commencer.
) else (
    echo Erreur: index.html non trouve
    pause
)
