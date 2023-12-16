let TEAM_SHEET_ID = '1zl5Qr9L1ZIJLEKNapWW8TaJkEzv74FwAu9hzwoS86V0'
let TEAM_SHEET_TITLE = 'Home';
let TEAM_SHEET_RANGE = 'A4:C7'

let TEAM_FULL_URL = ('https://docs.google.com/spreadsheets/d/'
+ TEAM_SHEET_ID + '/gviz/tq?sheet=' + TEAM_SHEET_TITLE + '&range='
+ TEAM_SHEET_RANGE);

fetch(TEAM_FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    let length = data.table.rows.length-1;

    let slide1_title = document.getElementById('slide1_title');
    let slide2_title = document.getElementById('slide2_title');
    let slide3_title = document.getElementById('slide3_title');

    let slide1_content = document.getElementById('slide1_content');
    let slide2_content = document.getElementById('slide2_content');
    let slide3_content = document.getElementById('slide3_content');

    slide1_title.innerHTML = data.table.rows[1].c[1].v;
    slide1_content.innerHTML = data.table.rows[1].c[2].v;

    slide2_title.innerHTML = data.table.rows[2].c[1].v;
    slide2_content.innerHTML = data.table.rows[2].c[2].v;

    slide3_title.innerHTML = data.table.rows[3].c[1].v;
    slide3_content.innerHTML = data.table.rows[3].c[2].v;
    
});