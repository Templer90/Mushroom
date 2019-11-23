const API_KEY = 'AIzaSyB-pj1akDXHH_B82MGFRqJK2NTNV7AdvpY';
const SPREADSHEET_ID = '1u-z6WCIL3GXrMSH2snJxcG3OayiaUC1yxJFXGN7tkXM';
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

function handleClientLoad(sheet, callback) {
    gapi.load('client', () => {
        gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: sheet,
            }).then(
                callback,
                (response) => {
                    console.log('Error: ' + response.result.error.message);
                });
        }, (error) => {
            console.log('Error2: ' + JSON.stringify(error, null, 2));
        });
    });
}
