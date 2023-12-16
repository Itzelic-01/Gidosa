// URL에서 id 매개변수 추출
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

console.log(userId);

// userId를 활용하여 데이터를 가져오는 코드 작성
// 예시:

 let TEAM_DETAIL_SHEET_ID = '1zl5Qr9L1ZIJLEKNapWW8TaJkEzv74FwAu9hzwoS86V0'
 let TEAM_DETAIL_SHEET_TITLE = 'Team-Detail';
 let TEAM_DETAIL_SHEET_RANGE = 'A4:F8'

 let TEAM_DETAIL_FULL_URL = ('https://docs.google.com/spreadsheets/d/'
   + TEAM_DETAIL_SHEET_ID + '/gviz/tq?sheet=' + TEAM_DETAIL_SHEET_TITLE + '&range='
   + TEAM_DETAIL_SHEET_RANGE);

 fetch(TEAM_DETAIL_FULL_URL)
   .then(res => res.text())
   .then(rep => {
     let data = JSON.parse(rep.substr(47).slice(0, -2));
     let length = data.table.rows.length;

     for (let i = 1; i < length; i++) {
       if (data.table.rows[i].c[0].v === userId) {
            console.log('hello');
            let nameData = data.table.rows[i].c[1].v;
            console.log(nameData);
            break;
       } else {
            console.log('Bye');
       }
     }
   });

