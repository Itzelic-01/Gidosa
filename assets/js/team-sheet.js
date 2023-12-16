let TEAM_SHEET_ID = '1zl5Qr9L1ZIJLEKNapWW8TaJkEzv74FwAu9hzwoS86V0'
let TEAM_SHEET_TITLE = 'Team';
let TEAM_SHEET_RANGE = 'A4:H8'

let TEAM_FULL_URL = ('https://docs.google.com/spreadsheets/d/'
+ TEAM_SHEET_ID + '/gviz/tq?sheet=' + TEAM_SHEET_TITLE + '&range='
+ TEAM_SHEET_RANGE);

fetch(TEAM_FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    let length = data.table.rows.length;

    let parentElement= document.querySelector('.team .container .row');

    for(let i=0; i<length; i++) {
        let userId = data.table.rows[i].c[0].v;
        let imgSrcData= data.table.rows[i].c[1].v;
        let nameData= data.table.rows[i].c[2].v;
        let positionData= data.table.rows[i].c[3].v;
        let companyData= data.table.rows[i].c[4].v;
        let phoneData= data.table.rows[i].c[5].v;
        let regionData= data.table.rows[i].c[6].v;
        let addressData= data.table.rows[i].c[7].v; 

	    var newHTML=`<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
                <div class="member-img">
                    <img src="${imgSrcData}" class="img-fluid" alt="">
                    <div class="social">
                    <a href="team-detail.html?id=${userId}">상세보기</a>
                </div>
                </div>
                <div class="member-info">
                    <h4>${nameData}</h4>
                    <span>${positionData}</span>
                    <table id="profileTable">
                        <tr>
                            <th colspan="2">기관명</th>
                            <td>${companyData}</td>
                        </tr>
                        <tr>
                            <th colspan="2">전화번호</th>
                            <td>${phoneData}</td> 
                        </tr>  
                        <tr> 
                            <th colspan="2">지역</th> 
                            <td>${regionData}</td> 
                        </tr>  
                        <tr> 
                            <th colspan="2">주소</th>  
                            <td>${addressData}</td></tr>
                        </tr>
                    </table>
                </div>
            </div>`; 

        parentElement.innerHTML += newHTML;

        console.log(userId);
     }
});